import styled, { css } from 'styled-components';

import { space, rems } from './helpers';

const buttonPrimary = css`
  background: rgb(213, 0, 67);
  border-color: black;
  color: white;

  &:hover,
  &:active {
    background: rgb(255, 0, 67);
    border-color: black;
    color: white;
  }
`;

const BaseButton = css`
  align-items: center;
  border: 2px solid;
  border-radius: ${space(3)};
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  min-width: ${rems(120)};
  padding: ${space(1)} ${space(2)};
  text-decoration: none;
  transition: 0.1s ease-out;
  vertical-align: text-top;
  width: auto;
  will-change: background, color;

  * {
    pointer-events: none;
  }
`;

const Button = styled.button`
  ${BaseButton};
  ${buttonPrimary};
`;

export { Button };
