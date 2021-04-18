import * as React from "react";
import { Link } from "gatsby";

import Wrapper from "../ui/Wrappers";

import Location from "../components/Location";

const IndexPage = () => {
  return (
    <>
      <Wrapper size="mainwrapper" center>
        <Location />
      </Wrapper>
    </>
  );
};

export default IndexPage;
