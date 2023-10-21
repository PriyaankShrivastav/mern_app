import React from "react";
import Helmet from "react-helmet";

const MetaData = ({ title }) => {
  return (
    // Helmet replaces title present in index.html to this title given here
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaData;
