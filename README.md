# base-node-template

基底の Node.js 開発環境（vscode + コンテナ）

## メモ

dotfiles をローカルで管理せず github から取得するように変更する

### バンドルサイズの確認

```bash
yarn build --analyze
```

## 変更点の備忘

1. eslint-plugin-prettier を除去
1. メンテナンスモードになった moment.js の代替として day.js に変更
