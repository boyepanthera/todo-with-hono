# Todo with Honojs backend and rspack frontend

## For Backend

```
>> git clone https://github.com/boyepanthera/todo-with-hono.git
>> cd /todo-with-hono/prod-hono-crud
>> npm install
>> npm run dev
```

```
bash$ npm run deploy
```

To create database
`>> npx wrangler d1 create <dbname>`

To create database migration file named init
`>>npx wrangler d1 migrations create <dbname> init`

To create database migration named email_verification
`>>npx wrangler d1 migrations create <dbname> email_verification`

To run update/migration in local database
`>>npx wrangler d1 migrations apply <dbname> --local`

To run update/migration in remote database
`>>npx wrangler d1 migrations apply <dbname> --remote`

## Live URLS

1. [Frontend](https://honotodo.netlify.app/)
2. [Backend](https://prod-hono-crud.sellaboye.workers.dev/)
