import React from 'react'
import BlogIntro from "../components/blog/BlogIntro";
import BlogNews from "../components/blog/BlogNews";

const Blog = () => {
  return (
    <div className="mt-32">
      <BlogIntro />
      <BlogNews />
    </div>
  );
};

export default Blog