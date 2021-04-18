import { createGlobalStyle } from 'styled-components';
import { media } from '../ui/helpers';

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  h1,h2 {
      margin: 16px 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
  }

  a {
    font-weight: 500;
    text-decoration: underline;
    text-decoration-skip-ink: auto;

    * {
      pointer-events: none;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  strong, b {
    font-weight: 500;
  }

  header {
    position: sticky;
    top: 0px;
    width: 100%;
    z-index: 1000;

    a{
        text-decoration: none;
    }

    ${media.min('medium')`
        &.expanded {
            transform: translateY(0);
            transition: 0.5s;
        }

        &.retrained {
            transform: translateY(-3rem);
            transition: 0.5s;
        }
    `};
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
