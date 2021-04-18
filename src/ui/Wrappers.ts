import styled from "styled-components";
import { media, rems, space } from "./helpers";
import { BREAKPOINTS } from "./settings";

const Wrapper = styled.div<{
  size: string;
  fullwidth?: boolean;
  center?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  margin: 0 auto;
  max-width: ${({ fullwidth, size }) =>
    fullwidth ? "100%" : rems(BREAKPOINTS[size])};
  padding-left: ${space(3)};
  padding-right: ${space(3)};
  width: 100%;

  img {
    width: 100%;
  }
`;

Wrapper.defaultProps = {
  size: "mainwrapper",
};

const WrapperHeader = styled.div`
  margin: 0 auto;
  max-width: ${rems(BREAKPOINTS.mainwrapper)};
  padding-left: ${space(3)};
  padding-right: ${space(3)};
  width: 100%;

  ${media.min("medium")`
    padding-left: ${space(8)};
    padding-right: ${space(8)};
  `}

  ${media.min("mainwrapper")`
    padding-left: 0;
    padding-right: 0;
  `}
`;

export { WrapperHeader };
export default Wrapper;
