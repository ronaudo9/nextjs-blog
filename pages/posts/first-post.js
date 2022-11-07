import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>最初の投稿</h1>
      <h2>
        <Link href="/">
          トップページに戻る
        </Link>
      </h2>
    </>
  );
}
