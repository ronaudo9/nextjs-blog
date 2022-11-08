import Link from 'next/link';
import Layout from '../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <h1>最初の投稿</h1>
      <h2>
        <Link href="/">
          トップページに戻る
        </Link>
      </h2>
    </Layout>
  );
}
