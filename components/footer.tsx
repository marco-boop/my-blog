import React from "react";

const EmailLink: React.FC<{
  email: string;
  name: string;
}> = ({ email, name }) => {
  return <a href={`mailto:${email}`}>{name}</a>;
};

export function Footer() {
  return (
    <div className="flex flex-col justify-between max-w-screen bg-gunmetal-100 text-white p-5 font-bold tracking-tighter ">
      <footer className="sticky top-[100vh]">
        <EmailLink email="sanchez.junco@gmail.com" name="Contact Me" />
      </footer>
    </div>
  );
}
