import styled from "styled-components";
import { media, rems, space } from "./helpers";

const BigImage = styled.div`
  width: 100%;
`;

const Double = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${space(2)};
  width: 100%;

  .image {
    width: 50%;
  }
`;

const Triple = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${space(2)};
  width: 100%;

  .image {
    height: auto;
    width: 33.3333%;
  }
`;

const FallRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${space(2)};
  width: 100%;

  .image {
    min-width: 370px;
    min-height: 250px;
    width: 25%;
  }
`;

const PlaceHolderBanner = styled.div`
  background-color: aliceblue;
  height: 200px;
  margin-top: ${space(2)};
  width: 100%;
`;

const PlaceHolderSquare = styled.div`
  background-color: greenyellow;
  height: 500px;
  margin-top: ${space(2)};
  width: 500px;
`;

export {
  BigImage,
  Double,
  Triple,
  FallRow,
  PlaceHolderBanner,
  PlaceHolderSquare,
};
