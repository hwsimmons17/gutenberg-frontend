"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { IdentificationIcon, HomeIcon } from "@heroicons/react/20/solid";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function Sidebar({
  children,
  bookID,
  setBookID,
  setData,
}: {
  children: ReactNode;
  bookID: string;
  setBookID: Dispatch<SetStateAction<string>>;
  setData: Dispatch<SetStateAction<BookWithText | undefined>>;
}) {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          {/* Separator */}
          <div
            aria-hidden="true"
            className="h-6 w-px bg-gray-900/10 lg:hidden"
          />
          <HomeIcon
            className="h-6 w-6 cursor-pointer text-gray-900"
            onClick={() => {
              router.push("/");
              setData(undefined);
            }}
          />
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form action="#" method="GET" className="grid flex-1 grid-cols-1">
              <input
                name="book-id"
                type=""
                placeholder="Book ID"
                onChange={(e) => setBookID(e.target.value)}
                value={bookID}
                aria-label="Book ID"
                className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6"
              />
              <IdentificationIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
              />
            </form>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
