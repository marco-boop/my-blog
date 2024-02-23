import React from "react";
import Link from "next/link";

const EmailLink: React.FC<{
  email: string;
  name: string;
}> = ({ email, name }) => {
  return <a href={`mailto:${email}`}>{name}</a>;
};

interface HeaderProps {}

const BlogPostHeader: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-10 bg-harvestgold p-10 max-w-screen">
      <div className="font-bold tracking-tighter text-4xl  text-gunmetal-100 ">
        <Link className="hover:text-white" href="/">
          Marco Writes Things
        </Link>

        <Link
          className="md:block text-xl text-gunmetal-50 hover:text-white"
          href="/"
        >
          Home
        </Link>
      </div>
    </header>
  );
};

export default BlogPostHeader;
