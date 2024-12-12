import { getFetch, newUrl } from "./fetch";

export const getUser = async () => {
  const url = newUrl("/user");
  return getFetch(url);
};

export const getUsersBooks = async (): Promise<Book[]> => {
  const url = newUrl("/books");
  return getFetch(url);
};

export const getBook = async (id: number): Promise<BookWithText> => {
  const url = newUrl(`/books/${id}`);
  return getFetch(url);
};
