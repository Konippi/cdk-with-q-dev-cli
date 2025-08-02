# CDK with Amazon Q Developer CLI Hands-on

このリポジトリは、Amazon Q Developer CLI を使用して CDK スタックを構築するハンズオンです。

## 完成イメージ

<img width="584" height="491" alt="Image" src="https://github.com/user-attachments/assets/44d373e2-bfac-48f1-ab4c-743cee0cb053" />

## Amazon Q Developer CLI のセットアップ

1. [Amazon Q Developer CLI のインストール](https://docs.aws.amazon.com/ja_jp/amazonq/latest/qdeveloper-ug/command-line-installing.html)を行います。

2. `q login` コマンドによってログインします。
   - AWS Builder ID or AWS IAM Identity Center アカウントを使用して、[Amazon Q Developer CLI をセットアップ](https://docs.aws.amazon.com/ja_jp/amazonq/latest/qdeveloper-ug/command-line-setup.html)します。

## 手順   

1. 現在の CDK 構成をドキュメント化する
   - [プロンプト](./.amazonq/prompts/1_describe_current_stack.md)

2. プロジェクトルールを作成する
   - [ルール](./.amazonq/rules/api_gateway_integration.md)
   - ↑ 適宜利用するプロファイル名を変更してください。(環境変数による設定でも可)

3. 現在の CDK 構成に API Gateway を追加してデプロイする
   - [プロンプト](./.amazonq/prompts/2_add_api_gateway.md)
   - 確認コマンド: `curl -X GET "${API Endpoint URL}"`

4. ユニットテストを追加する
   - [プロンプト](./.amazonq/prompts/3_add_tests.md)
