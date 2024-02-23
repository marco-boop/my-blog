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
    <header className="sticky top-0 z-10 bg-harvestgold p-10 max-w-screen col-auto">
      <div>
        <div className="font-bold tracking-tighter text-4xl  text-gunmetal-100 ">
          <Link className="hover:text-white" href="/">
            Marco Writes Things
          </Link>
        </div>
        <div className="pt-1.5">
          <Link
            className=" text-lg font-bold	 text-gunmetal-50 hover:text-white tracking-tight"
            href="/"
          >
            Back
          </Link>
        </div>
      </div>
    </header>
  );
};

export default BlogPostHeader;
