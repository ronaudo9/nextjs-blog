import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../lib/posts";
import Date from '../components/date';
import utilStyles from '/Users/kojimanaoyuki/src/nextjs-blog/styles/utils.module.css';
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async({params}) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Post ページ
export default function Post({postData}:{postData:{title:string,date:string,contentHtml:string}}) {
  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
