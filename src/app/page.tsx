"use client";

import Sidebar from "@/components/sidebar";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getBook } from "@/lib/api";
import BookDisplay from "@/components/bookDisplay";
import BookHistory from "@/components/bookHistory";

function Page() {
  const [bookID, setBookID] = useState("");
  const [bookData, setBookData] = useState<BookWithText | undefined>(undefined);
  const searchParams = useSearchParams();

  useEffect(() => {
    getData();
  }, [searchParams]);

  const getData = async () => {
    const id = searchParams.get("book-id");
    if (!id) {
      setBookData(undefined);
      return;
    }
    const data = await getBook(parseInt(id));
    setBookData(data);
  };

  return (
    <>
      {searchParams && (
        <Sidebar bookID={bookID} setBookID={setBookID} setData={setBookData}>
          {bookData ? <BookDisplay book={bookData} /> : <BookHistory />}
        </Sidebar>
      )}
    </>
  );
}

const BookDisplayWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page />
  </Suspense>
);

export default BookDisplayWrapper;
