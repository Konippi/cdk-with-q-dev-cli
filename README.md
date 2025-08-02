# CDK with Amazon Q Developer CLI Hands-on

このリポジトリは、Amazon Q Developer CLI を使用して CDK スタックを構築するハンズオンです。

## 完成イメージ

<img width="584" height="491" alt="Image" src="https://github.com/user-attachments/assets/44d373e2-bfac-48f1-ab4c-743cee0cb053" />

## 手順

1. 現在の CDK 構成をドキュメント化する
   - [プロンプト](./.amazonq/prompts/1_describe_current_stack.md)

2. 現在の CDK 構成に API Gateway を追加してデプロイする
    - [プロンプト](./.amazonq/prompts/2_add_api_gateway.md)
    - 確認コマンド: `curl -X GET "${API Endpoint URL}"`

3. ユニットテストを追加する
    - [プロンプト](./.amazonq/prompts/3_add_tests.md)
