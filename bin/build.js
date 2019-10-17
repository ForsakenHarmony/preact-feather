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

  icons.forEach(i => {
    const svg = fs.readFileSync(i, 'utf-8');
    const id = path.basename(i, '.svg');
    const camelId = uppercamelcase(id);
    const $ = cheerio.load(svg, {
      xmlMode: true,
    });
    const fileName = path.basename(i).replace('.svg', '.tsx');
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
      import { h, FunctionalComponent } from 'preact';
      import { FeatherProps } from "../types";

      export const ${camelId}: FunctionalComponent<FeatherProps> = (props: FeatherProps) => {
        const color = props.color || 'currentColor';
        const size = props.size || 24;
        delete props.color;
        delete props.size;
      
        return (
          ${$('svg')
            .toString()
            .replace(new RegExp('stroke="currentColor"', 'g'), 'stroke={color}')
            .replace('width="24"', 'width={size}')
            .replace('height="24"', 'height={size}')
            .replace('otherProps="..."', '{...props}')}
        );
      }
    `;

    const component = prettier.format(element, {
      trailingComma: 'es5',
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      endOfLine: 'lf',
      parser: 'babylon',
    });

    fs.writeFileSync(location, component, 'utf-8');

    allExports += `export { ${camelId} } from './icons/${id}';\n`;
  });

  fs.writeFileSync(path.join(rootDir, 'src', 'index.ts'), allExports, 'utf-8');
});
