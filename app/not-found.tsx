"use client";

import { LinkPreview } from "@/components/ui/link-preview";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white relative">
      <div className="max-w-4xl w-full space-y-20">
        <div className="space-y-4">
          <h1 className="text-[120px] sm:text-[180px] font-light tracking-tight leading-none">
            <span className="text-gray-400">404/</span>
            <br />
            <span className="text-white">PAGE</span>
            <br />
            <span className="text-white">UNSEEN</span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-xl mt-8">
            It looks like the page you were looking for has moved or cant be found.
          </p>
          <LinkPreview url="https://jamesmatthew07.github.io/">
        <span className="text-white text-2xl underline">HOME</span>
      </LinkPreview>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-sm text-zinc-600">
        ©2024
      </div>
    </div>
  );
};

export default ErrorPage;
