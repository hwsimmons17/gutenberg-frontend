import { analyzeText } from "@/lib/api";
import { useState } from "react";

export default function BookDisplay({ book }: { book: BookWithText }) {
  const [prompt, setPrompt] = useState("");
  const [analysis, setAnalysis] = useState("");

  const submitPrompt = async () => {
    setPrompt("");
    setAnalysis("Processing data, this may take a min...");
    try {
      const data = await analyzeText(book.book.id, prompt);
      setAnalysis(data);
    } catch (error: any) {
      setAnalysis("Error: " + error.message);
    }
  };

  return (
    <>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg mb-4">
        <div className="px-4 py-6 sm:px-6">
          <h3 className="text-base/7 font-semibold text-gray-900">
            {book.book.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            {book.book.author}
          </p>
        </div>
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {book.book.metadata?.language && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Language</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {book.book.metadata.language}
                </dd>
              </div>
            )}
            {book.book.metadata?.summary && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Summary</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {book.book.metadata.summary}
                </dd>
              </div>
            )}
            {book.book.metadata?.category && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Category</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {book.book.metadata.category}
                </dd>
              </div>
            )}
            {book.book.metadata?.release_date && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Release Date
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {book.book.metadata.release_date}
                </dd>
              </div>
            )}
            {book.book.metadata?.most_recently_updated && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Most Recently Updated
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {book.book.metadata.most_recently_updated}
                </dd>
              </div>
            )}
            {book.book.metadata?.copyright_status && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Copyright Status
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {book.book.metadata.copyright_status}
                </dd>
              </div>
            )}
            {book.book.metadata?.downloads && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Downloads</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {book.book.metadata.downloads}
                </dd>
              </div>
            )}

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm/6 font-medium text-gray-900">Notes</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  key={1}
                >
                  {book.book.metadata?.notes &&
                    book.book.metadata?.notes.map((note) => (
                      <li
                        key={note.note}
                        className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6"
                      >
                        <div className="flex w-0 flex-1 items-center">
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            {note.note}
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm/6 font-medium text-gray-900">Subjects</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  key={2}
                >
                  {book.book.metadata?.subjects &&
                    book.book.metadata?.subjects.map((subjects) => (
                      <li
                        key={subjects.subject}
                        className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6"
                      >
                        <div className="flex w-0 flex-1 items-center">
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            {subjects.subject}
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="overflow-hidden bg-white shadow sm:rounded-lg mb-4">
        <div className="px-4 py-6 sm:px-6">
          <h3 className="text-base/7 font-semibold text-gray-900">
            Analyze Text with AI
          </h3>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-900">Prompt</dt>
          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
            <input
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              name="prompt"
              type="prompt"
              placeholder="Identify key characters"
              className="mb-6 block w-72 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
            <button
              type="button"
              onClick={submitPrompt}
              className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-900">Result</dt>
          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
            {analysis.split("\r\n").map((line, lineIndex) => (
              <span key={lineIndex}>
                {line}
                <br />
              </span>
            ))}
          </dd>
        </div>
      </div>

      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-6 sm:px-6">
          <h3 className="text-base/7 font-semibold text-gray-900">
            Book Contents
          </h3>
        </div>
        <div className="border-t border-gray-100 text-sm/6 font-medium text-gray-900 text-center">
          <dl className="divide-y divide-gray-100 p-3">
            {book.text.split("\r\n\r\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph.split("\r\n").map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
