import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => <div>Hello {data.site.siteMetadata.title}!</div>;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
