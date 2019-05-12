import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-mdx";
import Layout from "./layout";
import Img from "gatsby-image";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        keywords
        banner {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        categories
      }
      code {
        body
      }
    }
  }
`;
export default function post({ data: { mdx: post } }) {
  return (
    <Layout>
      <Link to="/posts">
        <span role="img" aria-label="back" class="icon__back">
          👈
        </span>
      </Link>
      <Img
        fluid={post.frontmatter.banner.sharp.fluid}
        alt={post.frontmatter.title}
      />
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </Layout>
  );
}
