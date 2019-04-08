# roadmap

## Build Setup

``` bash
# install dependencies
$ yarn install

# test
$ yarn test

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

### ルール

- 定例MTGは必要に応じて開催（ブレストフェーズを超えたため）
- 仕様変更や提案があれば適宜Issueを立てて全体のコンセンサスを得る
- Issueで議論やタスクを進める（軽微なやり取りはSlackでOK）

## 報酬

最終的に稼働工数（貢献度）を以下に反映([算出ツール](https://deer-inc.github.io/gim/))

- クレジットの掲載順
- マネタイズ時の配分

## MTGについて

- これまでのMTGについては勉強会がマージされていたりと工数化しづらいのでカウント外とする
- 今後のMTGについては開催する場合30分に絞り、参加者に工数付与
- ブレストフェーズを終えたのとメンバーの稼働が安定しているため、定例MTGは適宜開催に変更

## Issueの工数について

```
タイトル - 4H
```

- Issueの工数は実態に応じて設定する
- issueの工数は作成者が設定する
- issueの工数を変更する際はコメントで理由を説明する
- 将来的な利益配分で参照されるので、誠実な設定する

例: https://github.com/Update-hub/roadmap/issues/36

## Mergeについて

- 全員から承認を経る
- 最後に承認した人がマージする

## 開発ルール

オリジナルコンポーネントには`r`プレフィックスをつける（サードパーティライブラリとの区別をつけるため）
