// import * as React from "react";
// import Link from "gatsby-link";
//
// // Please note that you can use https://github.com/dotansimha/graphql-code-generator
// // to generate all types from graphQL schema
// interface IndexPageProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string;
//       };
//     };
//   };
// }
//
// const IndexPage: React.FC<IndexPageProps> = (props) => {
//   return (
//     <div>
//       <h1>Hi people</h1>
//       <p>
//         Welcome to your new{" "}
//         <strong>{props.data.site.siteMetadata.title}</strong> site.
//       </p>
//       <p>Now go build something great.</p>
//       <Link to="/page-2/">Go to page 2</Link>
//     </div>
//   );
// };
//
// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
//
// export default IndexPage;

import React from "react";
import { Link } from "gatsby";
import { getUser, isLoggedIn } from "../services/auth";

import DefaultLayout from "../layouts/index";

export default () => (
  <DefaultLayout>
    <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="/app/profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to see restricted
          content
        </>
      )}
    </p>
  </DefaultLayout>
);

