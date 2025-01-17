import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';

import ThemeSetter from './ThemeSetter.tsx';

describe('ThemeSetter is passed a new theme', () => {
  it('correctly sets primary color', () => {
    render(<ThemeSetter theme={{ primaryColor: 'red' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-color-base': 'red' });
  });

  it('correctly sets secondary color', () => {
    render(<ThemeSetter theme={{ secondaryColor: 'blue' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-color-secondary': 'blue' });
  });

  it('correctly sets highlight color', () => {
    render(<ThemeSetter theme={{ highlightColor: 'green' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-color-highlight': 'green' });
  });

  it('correctly sets text color', () => {
    render(<ThemeSetter theme={{ textColor: 'purple' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-text-color': 'purple' });
  });

  it('correctly sets alternate text color', () => {
    render(<ThemeSetter theme={{ textAltColor: 'orange' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-text-alt': 'orange' });
  });
});

describe('ThemeSetter is passed multiple new values', () => {
  it('correctly sets all values', () => {
    render(
      <ThemeSetter
        theme={{
          primaryColor: 'red',
          secondaryColor: 'blue',
          highlightColor: 'green',
          textColor: 'purple',
          textAltColor: 'orange',
        }}
      />
    );
    const root = document.documentElement;

    expect(root).toHaveStyle({
      '--theme-color-base': 'red',
      '--theme-color-secondary': 'blue',
      '--theme-color-highlight': 'green',
      '--theme-text-color': 'purple',
      '--theme-text-alt': 'orange',
    });
  });
});

describe('ThemeSetter is passed an updated theme', () => {
  it('correctly updates outdated values', () => {
    const { rerender } = render(
      <ThemeSetter theme={{ primaryColor: 'red' }} />
    );
    const root = document.documentElement;

    rerender(<ThemeSetter theme={{ primaryColor: 'blue' }} />);
    expect(root).toHaveStyle({ '--theme-color-base': 'blue' });
  });

  it('add new values and does not update unchanged values', () => {
    const { rerender } = render(
      <ThemeSetter theme={{ primaryColor: 'red', secondaryColor: 'red' }} />
    );
    const root = document.documentElement;

    rerender(
      <ThemeSetter theme={{ secondaryColor: 'blue', highlightColor: 'blue' }} />
    );
    expect(root).toHaveStyle({
      '--theme-color-base': 'red',
      '--theme-color-secondary': 'blue',
      '--theme-color-highlight': 'blue',
    });
  });
});
