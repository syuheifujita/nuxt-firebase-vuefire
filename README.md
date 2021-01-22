# nuxt-firebase-vuefire

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### フロントエンド
- Nuxt.js(Vue)
- 状態管理
    - Vuex
- 実行環境
    - Firebase Hosting or Netlify

- Nuxt.js, JavaScript, Firestore, Netlify

### バックエンド
- Firestore(データ管理), Authentication
- API
    - マスターデータ
    - サイトURL
- 検索エンジン
    - Algolia
    - 対抗馬: Elastic search（こっちの方が柔軟だが、GCPでやると自前でコンテナ作って...など）
- Amazon PA-API（アフィリエイト）
