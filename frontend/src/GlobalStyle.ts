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
    scroll-padding-top: ${({ theme }) => theme.navHeight};
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
    transition:
      color ${({ theme }) => theme.motion.fast} ease-out,
      text-decoration-color ${({ theme }) => theme.motion.fast} ease-out;

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

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }

    /* Scroll-Reveal, gesteuert von hooks/useReveal.ts */
    [data-reveal] {
      transition:
        opacity ${({ theme }) => `${theme.motion.slow} ${theme.motion.ease}`},
        transform ${({ theme }) => `${theme.motion.slow} ${theme.motion.ease}`};
      transition-delay: var(--reveal-delay, 0ms);
    }

    [data-reveal='hidden'] {
      opacity: 0;
      transform: translateY(24px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`
