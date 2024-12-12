import { getUser } from "./api";

export const newUrl = (pathname: string): URL => {
  if (!process.env.NEXT_PUBLIC_SERVER_URL) {
    throw Error("Must set NEXT_PUBLIC_SERVER_URL env var");
  }
  var url = new URL(process.env.NEXT_PUBLIC_SERVER_URL);
  url.pathname = pathname;
  return url;
};

export const newWsUrl = (pathname: string): URL => {
  if (!process.env.NEXT_PUBLIC_SERVER_URL) {
    throw Error("Must set NEXT_PUBLIC_SERVER_URL env var");
  }
  var url = new URL(process.env.NEXT_PUBLIC_SERVER_URL);
  url.pathname = pathname;
  if (url.protocol == "https:") {
    url.protocol = "wss:";
  }
  if (url.protocol == "http:") {
    url.protocol = "ws:";
  }

  return url;
};

export const getFetch = async (url: URL): Promise<any> => {
  var res = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  if (res.status == 401) {
    await getUser();
    console.log("retrying");
  }
  res = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) {
    const err = await res.json();
    throw Error(err.error);
  }

  return await res.json();
};

export const downloadFetch = async (url: URL): Promise<[Blob, string]> => {
  const res = await fetch(url, {
    method: "GET",
  });
  if (!res.ok) {
    const err = await res.json();
    throw Error(err.error);
  }
  const disp = res.headers.get("Content-Disposition");
  if (!disp) {
    return [await res.blob(), "unknown.csv"];
  }
  const pattern = /filename="([^"]+)"/;
  // Find the submatches (filename) in the input string
  const submatches = disp.match(pattern);
  if (!submatches) {
    return [await res.blob(), "unknown.csv"];
  }
  return [await res.blob(), submatches[1] ?? "unknown.csv"];
};

export const postFetch = async (url: URL, body: any) => {
  const res = await fetch(url, {
    method: "POST",

    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json();
    throw Error(err.error);
  }
};

export const putFetch = async (url: URL, body: any) => {
  const res = await fetch(url, {
    method: "PUT",

    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json();
    throw Error(err.error);
  }
};

export const putReturnFetch = async (url: URL, body: any) => {
  const res = await fetch(url, {
    method: "PUT",

    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json();

    throw Error(err.error);
  }
  return await res.json();
};

export const postReturnFetch = async (url: URL, body: any) => {
  const res = await fetch(url, {
    method: "POST",

    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json();

    throw Error(err.error);
  }
  return await res.json();
};

export const postFetchNoHandle = async (url: URL, body: any) => {
  const res = await fetch(url, {
    method: "POST",

    body: JSON.stringify(body),
  });

  return res;
};

export const postFormFetch = async (url: URL, form: FormData) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    //@ts-ignore
    body: new URLSearchParams(form),
  });

  if (!res.ok) {
    const err = await res.json();
    throw Error(err.error);
  }
};

export const postBinaryFetch = async (url: URL, file: File) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": file.type,
    },
    //@ts-ignore
    body: file,
  });

  if (!res.ok) {
    const err = await res.json();
    throw Error(err.error);
  }
};

export const postMultipartFetch = async (url: URL, form: FormData) => {
  const res = await fetch(url, {
    method: "POST",

    body: form,
  });

  if (!res.ok) {
    const err = await res.json();
    throw Error(err.error);
  }
};

export const postMultipartFetchWithReturn = async (
  url: URL,
  form: FormData
): Promise<any> => {
  const res = await fetch(url, {
    method: "POST",

    body: form,
  });

  if (!res.ok) {
    const err = await res.json();
    throw Error(err.error);
  }
  return await res.json();
};

export const putMultipartFetch = async (url: URL, form: FormData) => {
  const res = await fetch(url, {
    method: "PUT",

    body: form,
  });

  if (!res.ok) {
    const err = await res.json();
    throw Error(err.error);
  }
};

export const deleteFetch = async (url: URL) => {
  const res = await fetch(url, {
    method: "DELETE",
  });

  if (!res.ok) {
    const err = await res.json();
    throw Error(err.error);
  }
};

export const toUnix = (date: Date): number => {
  return Math.floor(date.getTime() / 1000);
};
