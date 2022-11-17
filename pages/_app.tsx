import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

// _app.jsは特殊なファイルでRouteコンポーネントをラップする
// 全ページで共通して実行させたいファイルを読み込む
// 全ページで共通して実行させたい処理を実行する
// 前ページ共通のレイアウトを組み込む
