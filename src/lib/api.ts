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

export const analyzeText = async (
  id: number,
  prompt: string
): Promise<string> => {
  const url = newUrl(`/books/${id}/analyze`);
  url.searchParams.append("prompt", prompt);
  return getFetch(url);
};
