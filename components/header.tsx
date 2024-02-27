import Link from "next/link";
import Image from "next/image";
import React from "react";
import "app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

export function Header() {
  return (
    <header className="flex flex-col items-center pb-10">
      <div className="flex flex-col items-center space-y-6 lg:max-w-3xl lg:mx-auto lg:space-y-8">
        <Image
          src="/blog-logo.png"
          width={100}
          height={20}
          alt="Blog logo. It's cute"
        />
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/[-0.5] lg:text-6xl/[-1] text-harvestgold hover:text-gunmetal-100">
          <Link href="/">Marco Writes Things</Link>
        </h1>

        <div className="flex ">
          <ul>
            <p className="text-m font-bold tracking-wide hover:text-harvestgold pl-1">
              <Link href="https://github.com/marco-boop">@marco-boop</Link>
            </p>
          </ul>
        </div>
      </div>
    </header>
  );
}
