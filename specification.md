# CRUD-sample

## 概要
- CRUDの練習

## 機能
- CRUD
- ページネーション

## frontend
### 概要
- ユーザから受け取ったtaskをbackendへ送る
    - backendにて用意されているapi(CRUD)へリクエストを送信する
- データフロー
    - pages → modules → (apiClient) → backend
    - backend → (apiClient) → modules → pages

### ページ
#### ダッシュボードページ(DashboardPage.tsx)
- todoの追加（削除）
- プロジェクトの管理
    - 未着手/実行中/完了


### ディレクトリ
```  
frontend/  
├─ pages/  
│  └─ DashboardPage.tsx
├─ modules/  
│  └─ task/  
│     └─ task.repository.ts  
│
└─ api/  
   └─ apiClient.ts
```

### 技術スタック
- 開発ツール
    - Vite
- ライブラリ
    - React


## backend

### 概要
- frontendから受け取ったデータをデータベースへ送信する
- データフロー
    - routes(index.js) → db-client → db
    - db → db-client → routes(index.js)

### 技術スタック
- フレームワーク
    - Express
- DBライブラリ
    - pg
- インフラ
    - Docker Compose

### ディレクトリ
```
backend/
├── app.js # メインアプリケーション\
├── routes/
│ └── index.js # APIルーティング\
├── app/
│ ├── db/
│ ├── db-config.js # DB接続設定
│ └── db-client.js # CRUD操作
│
└── package.json
```


## DB


### 技術スタック
- データベース
    - PostgreSQL
- インフラ
    - Docker Compoes

### テーブル
#### todos
- id
- title
- status: "未着手" | "実行中" | "完了"