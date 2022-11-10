---
title: '事前レンダリングの２つの形'
date: '2020-01-01'
---
Next.js には 2 つの事前レンダリングがあります。Static Generation と Server-side Rendering です。この 2 つの違いは、そのページの HTML がいつ生成されるかです。

Static Generation はビルド時に HTML を生成します。事前に生成された HTML はリクエストされるたびに 再利用 されます。
Server-side Rendering は、リクエストごとに HTML を生成する事前レンダリングです。
重要なのは、Next.js ではページごとにどの事前レンダリングを利用するか選ぶことができるということです。Static Generation を大半のページに利用しつつ、その他のページを Server-side Rendering で作ったハイブリッドな Next.js アプリケーションを作成することができます。
