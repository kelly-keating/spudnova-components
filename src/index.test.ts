import * as components from './index.ts';

type exportName = keyof typeof components;
const keys = Object.keys(components) as exportName[];

const documentedComponents = [
  // Blocks
  'Navbar',
  'Table',

  // Elements
  'Button',

  // Layouts
  'FlexGrid',

  // Utilities
  'ThemeSetter',
];

describe('UI Module', () => {
  describe('exports all documented components', () => {
    documentedComponents.forEach((component) => {
      it(`exports ${component}`, () => {
        expect(components).toHaveProperty(component);
        expect(typeof components[component as exportName]).toBe('function');
      });
    });
  });

  it('does not export any additional components', () => {
    expect(keys).toHaveLength(documentedComponents.length);
  });
});
