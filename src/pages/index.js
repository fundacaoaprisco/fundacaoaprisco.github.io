import React from "react";
import { graphql } from "gatsby";

import styles from "./styles.module.css";

export default ({ data }) => (
  <div className={styles.green}>Hello {data.site.siteMetadata.title}!</div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
