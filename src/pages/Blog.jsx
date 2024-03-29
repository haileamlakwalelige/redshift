import React from 'react'
import BlogIntro from "../components/blog/BlogIntro";
import BlogCards from "../components/blog/BlogCards";

const Blog = () => {
  return (
    <div className=" overflow-x-hidden bg-white">
      <BlogIntro />
      <BlogCards />
    </div>
  );
};

export default Blog