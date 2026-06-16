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

### ディレクトリ
```  
frontend/  
├─ pages/  
│  └─ Task.tsx
├─ modules/  
│ └─ task/  
│    └─ task.repository.ts  
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
    - わからない

### 技術スタック
- 開発ツール
    - わからない
- DBライブラリ
    - PostgreSQL


## DB


### 技術スタック
- データベース
    - PostgreSQL