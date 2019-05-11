import React from "react";
import allPosts from "../hooks/allPosts";
import Img from "gatsby-image";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function posts() {
  const posts = allPosts();
  return (
    <Layout>
      <div className="posts">
        {posts.map(post => (
          <div>
            <Img
              fluid={post.frontmatter.banner.sharp.fluid}
              alt={post.frontmatter.title}
            />
            <Link to={post.frontmatter.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
