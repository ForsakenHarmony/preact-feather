const fs = require('fs');
const glob = require('glob');
const camelcase = require('camelcase');
const uppercamelcase = require('uppercamelcase');
const path = require('path');
const cheerio = require('cheerio');
const prettier = require('prettier');

const rootDir = path.join(__dirname, '..');

glob(`${rootDir}/src/feather/icons/**.svg`, (err, icons) => {
  fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');

  let allExports = '';

  icons.forEach((i) => {
    const svg = fs.readFileSync(i, 'utf-8');
    const id = path.basename(i, '.svg');
    const $ = cheerio.load(svg, {
      xmlMode: true,
    });
    const fileName = path.basename(i).replace('.svg', '.js');
    const location = path.join(rootDir, 'src/icons', fileName);

    $('*').each((index, el) => {
      Object.keys(el.attribs).forEach((x) => {
        if (x === 'stroke') {
          $(el).attr(x, 'currentColor');
        }
      });

      if (el.name === 'svg') {
        $(el).attr('otherProps', '...');
      }
    });

    const element = `
      const ${uppercamelcase(id)} = ({ color, size, ...otherProps }) => {
        color = color || 'currentColor';
        size = size || '24';
        return (
          ${
            $('svg').toString()
              .replace(new RegExp('stroke="currentColor"', 'g'), 'stroke={color}')
              .replace('width="24"', 'width={size}')
              .replace('height="24"', 'height={size}')
              .replace('otherProps="..."', '{...otherProps}')
          }
        )
      };

      export default ${uppercamelcase(id)}
    `;

    const component = prettier.format(element, {
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      parser: 'flow',
    });

    fs.writeFileSync(location, component, 'utf-8');

    allExports += `export ${uppercamelcase(id)} from './icons/${id}';\r\n`;
  });

  fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), allExports, 'utf-8');
});
