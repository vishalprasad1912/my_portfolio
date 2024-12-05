import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi , I am Vishal 👋🏻
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        An App developer who builds Android and cross-platform 
        solutions, turning ideas into functional experiences.
        </p>
        <p>
        Pursuing a Bachelor's in Computer Science at Delhi University,
        currently in my 3rd year, passionate about coding and building
         tech solutions that make a difference.
        </p>
        <p>

        </p>
        <p>
          {/* <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up
          instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post. */}
        </p>
        <p>

        </p>
      </div>
    </section>
  );
}
