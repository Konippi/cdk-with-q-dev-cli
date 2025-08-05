# CDK with Amazon Q Developer CLI Hands-on

このリポジトリは、Amazon Q Developer CLI を使用して CDK スタックを操作するハンズオンです。

## 前提

- [AWS CDKを始めるハンズオン ─ IaCの第一歩をAWS LambdaとDynamoDBのシンプルな仕組みで学ぶ](https://en-ambi.com/itcontents/entry/2023/04/27/093000/)で作成したスタックを操作します。

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

## 注意

### [コストについて]

Amazon Q Developer を Free Tier で触っていただくことは無料ですが、<br>
Amazon Q Developer CLI で AWS リソースをデプロイするため、リソースに応じてコストがかかります。<br>
料金の見積もりは[AWS Pricing Calculator](https://calculator.aws/#/)より試算可能です。

### [セキュリティについて]

API Gateway に対してセキュリティ防御を考慮していないため、検証後は削除 or 適切なセキュリティ設定を実施してください。
