import Link from "next/link";
import Image from "next/image";

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
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-harvestgold hover:text-gunmetal">
          <Link href="/">Things Marco writes</Link>
        </h1>

        <div className="flex flex-row items-center">
          <Image
            src="github-mark.svg"
            className="w-5 h-5 ml-2"
            width={20}
            height={20}
            alt="GitHub"
          />
          <p className="text-m font-bold tracking-wide hover:text-harvestgold pl-1">
            <Link href="https://github.com/marco-boop">@marco-boop</Link>{" "}
          </p>
        </div>
      </div>
    </header>
  );
}
