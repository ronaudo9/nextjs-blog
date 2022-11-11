import fs from 'fs';// Node.jsでファイルの読み書きを行う
import path from 'path';//Node.jsでファイルパスからディレクトリ名を取得したり、ファイル名を取得する
import matter from 'gray-matter';//mdファイルのfrontmatterと本文をJSONに変換するツール
import { remark } from 'remark';// Markdown を HTML に変換する
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // /posts 下のファイル名一覧を取得する
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // id を取得するために、拡張子 .md をファイル名から除去する
    const id = fileName.replace(/\.md$/, '');

    // Markdown を文字列に読み込む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter を使用してメタデータ部をパース（jsonファイルを読み取れる形に変換する）する
    const matterResult = matter(fileContents);

    // id とデータをあわせる
    return {
      id,
      ...(matterResult.data as {date:string; title: string})
    };
  });
  // 日付で投稿をソートする
  return allPostsData.sort((a,b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
}
/**
 * 次のような配列を返します。
 * <code>
 * [
 *   {
 *     params: {
 *       id: 'ssg-ssr'
 *     }
 *   },
 *   {
 *     params: {
 *       id: 'pre-rendering'
 *     }
 *   }
 * ]
 * </code>
 */
 export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}


export async function getPostData(id:string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matter を使用してメタデータ部をパースする
  const matterResult = matter(fileContents);

  // remark を使って Markdown を HTML に変換する
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データを id と HTML とあわせる
  return {
    id,
    contentHtml,
    ...(matterResult.data as {date:string;title:string})
  };
}
