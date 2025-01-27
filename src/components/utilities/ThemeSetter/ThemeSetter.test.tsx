import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';

import ThemeSetter from './ThemeSetter.tsx';

describe('ThemeSetter is passed a new theme', () => {
  it('correctly sets main background color', () => {
    render(<ThemeSetter theme={{ bgMain: 'red' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-bg-main': 'red' });
  });

  it('correctly sets light background color', () => {
    render(<ThemeSetter theme={{ bgLight: 'blue' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-bg-light': 'blue' });
  });

  it('correctly sets dark background color', () => {
    render(<ThemeSetter theme={{ bgDark: 'green' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-bg-dark': 'green' });
  });

  it('correctly sets light text color', () => {
    render(<ThemeSetter theme={{ textLight: 'purple' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-text-light': 'purple' });
  });

  it('correctly sets dark text color', () => {
    render(<ThemeSetter theme={{ textDark: 'orange' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-text-dark': 'orange' });
  });

  it('correctly sets highlight color', () => {
    render(<ThemeSetter theme={{ highlight: 'yellow' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-highlight': 'yellow' });
  });

  it('correctly sets alternative highlight color', () => {
    render(<ThemeSetter theme={{ highlightAlternative: 'pink' }} />);
    const root = document.documentElement;

    expect(root).toHaveStyle({ '--theme-highlight-alt': 'pink' });
  });
});

describe('ThemeSetter is passed multiple new values', () => {
  it('correctly sets all values', () => {
    render(
      <ThemeSetter
        theme={{
          bgMain: 'red',
          bgDark: 'blue',
          highlight: 'green',
          textLight: 'purple',
          textDark: 'orange',
        }}
      />
    );
    const root = document.documentElement;

    expect(root).toHaveStyle({
      '--theme-bg-main': 'red',
      '--theme-bg-dark': 'blue',
      '--theme-highlight': 'green',
      '--theme-text-light': 'purple',
      '--theme-text-dark': 'orange',
    });
  });
});

describe('ThemeSetter is passed an updated theme', () => {
  it('correctly updates outdated values', () => {
    const { rerender } = render(<ThemeSetter theme={{ bgMain: 'red' }} />);
    const root = document.documentElement;

    rerender(<ThemeSetter theme={{ bgMain: 'blue' }} />);
    expect(root).toHaveStyle({ '--theme-bg-main': 'blue' });
  });

  it('add new values and does not update unchanged values', () => {
    const { rerender } = render(
      <ThemeSetter theme={{ bgMain: 'red', bgDark: 'red' }} />
    );
    const root = document.documentElement;

    rerender(<ThemeSetter theme={{ bgDark: 'blue', highlight: 'blue' }} />);
    expect(root).toHaveStyle({
      '--theme-bg-main': 'red',
      '--theme-bg-dark': 'blue',
      '--theme-highlight': 'blue',
    });
  });
});
