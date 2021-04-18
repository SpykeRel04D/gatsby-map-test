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

  & > {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export { Container };
