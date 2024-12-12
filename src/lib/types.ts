type BookSubject = {
  id: number;
  created_at: Date;
  book_id: number;
  subject: string;
};

type BookNote = {
  id: number;
  created_at: Date;
  book_id: number;
  note: string;
};

type BookMetadata = {
  id: number;
  created_at: Date;
  book_id: number;
  language?: string;
  summary?: string;
  category?: string;
  release_date?: string;
  most_recently_updated?: string;
  copyright_status?: string;
  downloads?: string;
  notes: BookNote[];
  subjects: BookSubject[];
};

type Book = {
  id: number;
  created_at: Date;
  title: string;
  author: string;
  metadata?: BookMetadata;
};

type BookWithText = {
  book: Book;
  text: string;
};
