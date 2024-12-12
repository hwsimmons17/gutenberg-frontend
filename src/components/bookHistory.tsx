"use client";
import { getUsersBooks } from "@/lib/api";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookHistory() {
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();

  useEffect(() => {
    getSetBooks();
  }, []);

  const getSetBooks = async () => {
    const data = await getUsersBooks();
    setBooks(data);
  };

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {books ? (
        books.map((book) => (
          <li
            key={book.id}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {book.title}
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                <p className="truncate">Author {book.author}</p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <button
                onClick={() => router.push("/?book-id=" + book.id)}
                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              >
                View Book<span className="sr-only"></span>
              </button>
            </div>
          </li>
        ))
      ) : (
        <div>No books</div>
      )}
    </ul>
  );
}
