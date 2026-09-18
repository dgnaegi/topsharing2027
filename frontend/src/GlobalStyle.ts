import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-display: ${({ theme }) => theme.fonts.display};
    --font-text: ${({ theme }) => theme.fonts.text};
    --font-mono: ${({ theme }) => theme.fonts.mono};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background: ${({ theme }) => theme.colors.paper};
  }

  body {
    font-family: var(--font-text);
    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.paper};
    color: ${({ theme }) => theme.colors.ink};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.signal};
    text-decoration-thickness: 3px;
    text-underline-offset: 4px;

    &:hover {
      text-decoration-color: ${({ theme }) => theme.colors.signalDark};
    }
  }

  button {
    font-family: inherit;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.ink};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`
