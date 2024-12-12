export default function BookDisplay({ book }: { book: BookWithText }) {
  console.log(book);
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
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
              >
                {book.book.metadata?.notes.map((note) => (
                  <li
                    className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6"
                    key={note.id}
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
              >
                {book.book.metadata?.subjects.map((subjects) => (
                  <li
                    className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6"
                    key={subjects.id}
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
  );
}
