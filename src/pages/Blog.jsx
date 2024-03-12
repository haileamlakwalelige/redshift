import React from 'react'
import BlogIntro from "../components/blog/BlogIntro";
import BlogNews from "../components/blog/BlogNews";
import BlogCards from "../components/blog/BlogCards";

const Blog = () => {
  return (
    <div className=" overflow-x-hidden">
      <BlogIntro />
      {/* <BlogNews /> */}
      <BlogCards />
    </div>
  );
};

export default Blog