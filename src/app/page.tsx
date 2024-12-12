"use client";

import Sidebar from "@/components/sidebar";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getBook } from "@/lib/api";
import BookDisplay from "@/components/bookDisplay";

export default function Example() {
  const [bookID, setBookID] = useState("");
  const searchParams = useSearchParams();

  const { data } = useQuery({
    queryKey: ["book-id"],
    queryFn: async () => {
      const id = searchParams.get("book-id");
      if (!id) {
        return;
      }
      console.log("here");
      return getBook(parseInt(id));
    },
  });

  return (
    <>
      {searchParams && (
        <Sidebar bookID={bookID} setBookID={setBookID}>
          {data && <BookDisplay book={data} />}
        </Sidebar>
      )}
    </>
  );
}
