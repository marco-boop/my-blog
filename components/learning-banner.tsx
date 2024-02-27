import Link from "next/link";

export function LearningBanner() {
  return (
    <div>
      <div className="container py-6 md:py-24 bg-gunmetal-100 text-platinum">
        <div className="space-y-6 text-center lg:max-w-3xl lg:mx-auto lg:space-y-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/[-0.5] lg:text-6xl/[-1] text-harvestgold">
            I am learning
          </h1>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some things I have worked on recently:
          </p>
          <p className="text-m font-bold tracking-wide hover:text-harvestgold">
            <Link href="https://www.pokesearch.dev/">
              - Autofill search that returns data about a pokemon
            </Link>
          </p>
          <p className="text-m font-bold tracking-wide hover:text-harvestgold">
            <Link href="https://typingtest-30b2.onrender.com/">
              - Typing speed test (react app that fetches data from an API)
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
