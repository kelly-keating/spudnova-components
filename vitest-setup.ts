import { expect } from 'vitest';

// Extend Vitest with jest-axe matchers
expect.extend({
  toHaveNoViolations: (results) => {
    if (results.violations.length === 0) {
      return {
        pass: true,
        message: () => 'No accessibility violations found.',
      };
    }

    const violations = results.violations
      .map(
        (v) =>
          `${v.id}: ${v.description}\nNodes:\n${v.nodes
            .map((node) => node.html)
            .join('\n')}`
      )
      .join('\n\n');

    return {
      pass: false,
      message: () => `Accessibility violations detected:\n\n${violations}`,
    };
  },
});
