## AWS CLI ルール
- `${AWS プロファイル}` プロファイルを利用してください

## API Gateway統合ルール
- デモ用途なので複雑なセキュリティ設定は省略
- GET リクエストで DynamoDB からアイテムを取得する (エンドポイントは `/items`)
- `cdk deploy` 時に API Gateway のエンドポイント URL を出力
