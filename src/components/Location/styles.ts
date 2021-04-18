import styled from "styled-components";
import { media, rems, space } from "../../ui/helpers";

const Container = styled.div<{
  ratio: number;
}>`
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 100%;

  &:after {
    display: block;
    content: "";
    padding-bottom: ${({ ratio }) => `${100 / ratio}%`};
  }
`;

export { Container };
