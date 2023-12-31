import React from "react";
import Link from "next/link";
import {
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="   text-zinc-500 px-4 ">
      <section className="flex items-center justify-between py-10 flex-col sm:flex-row gap-3 border-t border-zinc-500">
        <div>
          <div className="">
            <p>
              crafted by{" "}
              <Link
                href="https://github.com/nzaih1999"
                rel="noopener noreferrer"
                target="_blank"
                className="underline font-semibold"
              >
                mundume.
              </Link>{" "}
              for{" "}
              <Link
                href={`https://rendercon.org`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                @renderconke
              </Link>
            </p>
            <p>
              get the source code{" "}
              <Link
                target="_blank"
                href="https://github.com/nzaih1999/pleb"
                className="underline font-semibold"
                rel="noopener noreferrer"
              >
                here
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link
            href="https://www.youtube.com/channel/UC0bCcG8gHUL4njDOpQGcMIA"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiOutlineYoutube className="text-2xl" />
          </Link>
          <Link
            href="https://twitter.com/renderconke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter className="text-2xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/renderconke/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin className="text-2xl" />
          </Link>
        </div>
      </section>
    </footer>
  );
}
