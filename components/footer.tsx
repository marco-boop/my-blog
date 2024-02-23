import React from "react";

const EmailLink: React.FC<{
  email: string;
  name: string;
}> = ({ email, name }) => {
  return <a href={`mailto:${email}`}>{name}</a>;
};

export function Footer() {
  return (
    <div className="max-w-screen bg-gunmetal-100 text-white p-5 font-bold tracking-tighter ">
      <EmailLink email="sanchez.junco@gmail.com" name="Contact Me" />
    </div>
  );
}
