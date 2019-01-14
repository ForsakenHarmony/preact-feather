const fs = require('fs');
const glob = require('glob');
const uppercamelcase = require('uppercamelcase');
const path = require('path');
const cheerio = require('cheerio');
const prettier = require('prettier');

const rootDir = path.join(__dirname, '..');

glob(`${rootDir}/feather/icons/**.svg`, (err, icons) => {
  fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');

  let allExports = '';
  let tsDef =
    'import { FunctionalComponent } from "preact";\n\ndeclare module \'preact-feather\' {\n  interface FeatherProps extends JSX.SVGAttributes {\n    color?: string,\n  }\n\n';

  icons.forEach(i => {
    const svg = fs.readFileSync(i, 'utf-8');
    const id = path.basename(i, '.svg');
    const camelId = uppercamelcase(id);
    const $ = cheerio.load(svg, {
      xmlMode: true,
    });
    const fileName = path.basename(i).replace('.svg', '.js');
    const location = path.join(rootDir, 'src/icons', fileName);

    $('*').each((index, el) => {
      Object.keys(el.attribs).forEach(x => {
        if (x === 'stroke') {
          $(el).attr(x, 'currentColor');
        }
      });

      if (el.name === 'svg') {
        $(el).attr('otherProps', '...');
      }
    });

    const element = `
      const ${camelId} = ({ color = 'currentColor', size = '24', ...otherProps }) => (
        ${$('svg')
          .toString()
          .replace(new RegExp('stroke="currentColor"', 'g'), 'stroke={color}')
          .replace('width="24"', 'width={size}')
          .replace('height="24"', 'height={size}')
          .replace('otherProps="..."', '{...otherProps}')}
      );

      export default ${camelId}
    `;

    const component = prettier.format(element, {
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      parser: 'flow',
    });

    fs.writeFileSync(location, component, 'utf-8');

    allExports += `export { default as ${camelId} } from './icons/${id}';\n`;
    tsDef += `  export const ${camelId}: FunctionalComponent<FeatherProps>;\n`;
  });

  fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), allExports, 'utf-8');
  fs.writeFileSync(
    path.join(rootDir, 'dist', 'index.d.ts'),
    tsDef + '}\n',
    'utf-8'
  );
});
