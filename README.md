### README

### Urutan penggunaan aplikasi SERVER

PORT 3000

1. npm install semua dan tambahan:

- sequelize-cli

```
npm install --save-dev sequelize-cli
```

- nodemon

```
npm install --save-dev nodemon
```

2. perintah untuk migrasi database ke postgreSQL menggunakan sequelize:

- migrasi database

```
npx sequelize-cli db:create
```

- hapus database

```
npx sequelize-cli db:drop
```

- migrasi tabel

```
npx sequelize-cli db:migrate
```

- revert migrasi tabel

```
npx sequelize-cli db:migrate:undo
```

3. perintah running server (harus di directory server):

```
nodemon app.js
```

4. api documentation ada pada directory server dengan nama api_doc.md

### Urutan penggunaan aplikasi CLIENT

1. npm install semua
2. memulai app

```
npm run dev
```
