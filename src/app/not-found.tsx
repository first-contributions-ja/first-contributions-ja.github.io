// document: https://nextjs.org/docs/app/api-reference/file-conventions/not-found
// 以下記述しないとエラーが出たためドキュメントよりコピペ

import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
