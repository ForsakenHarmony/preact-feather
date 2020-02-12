#! node
const fs = require('fs');
const uppercamelcase = require('uppercamelcase');
const path = require('path');
const prettier = require('prettier');
const featherIcons = require('feather-icons/dist/icons.json');
const prettierConfig = require('../.prettierrc.json');

const rootDir = path.join(__dirname, '..');

const icons = Object.keys(featherIcons);

fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');

let allExports = '';

icons.forEach(name => {
	const svg = featherIcons[name];
	const id = name;
	const camelId = uppercamelcase(id);
	const fileName = `${name}.tsx`;
	const location = path.join(rootDir, 'src/icons', fileName);

	const element = `
    import { h, FunctionalComponent } from 'preact';
    import { FeatherProps } from "../types";

    export const ${camelId}: FunctionalComponent<FeatherProps> = (props: FeatherProps) => {
      const color = props.color || 'currentColor';
      const size = props.size || 24;
      const stroke = props.stroke || '2';
      delete props.color;
      delete props.size;
      delete props.stroke;
    
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          stroke-width={stroke}
          stroke-linecap="round"
          stroke-linejoin="round"
          {...props}
        >
          ${svg}
        </svg>
      );
    }
  `;

	const component = prettier.format(
		element,
		Object.assign(prettierConfig, {
			parser: 'typescript',
		})
	);

	fs.writeFileSync(location, component, 'utf-8');

	allExports += `export { ${camelId} } from './icons/${id}';\n`;
});

fs.writeFileSync(path.join(rootDir, 'src', 'index.ts'), allExports, 'utf-8');
