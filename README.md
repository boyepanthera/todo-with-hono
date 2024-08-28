# Honojs backend and rspack frontend

## For Backend

cd /prod-hono-crud

```
npm install
npm run dev
```

```
npm run deploy
```

### To Create Database

npx wrangler d1 create <dbname>

### To create Database Migration file named init

npx wrangler d1 migrations create <dbname> init

### To create Database Migration named email_verification

npx wrangler d1 migrations create <dbname> email_verification

### To run update/migration in local database

npx wrangler d1 migrations apply <dbname> --local

### To run update/migration in remote database

npx wrangler d1 migrations apply <dbname> --remote
