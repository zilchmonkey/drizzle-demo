# Drizzle

[Drizzle](https://orm.drizzle.team/) is an extremely flexible TypeScript ORM. Supports many different databases including PostgreSQL, MySQL and SQLite.

# Directions

- Run `npm i` in your terminal.
- Create an .env file and define a database url. This example uses postgreSQL. For example:
  `DATABASE_URL="postgres://user:password@localhost:port/database_name"`
- You will also need to manually create a database. We will be migrating the tables in. Database name should be the same as defined in your .env file.
- In your terminal run `npm run db:generate`. This will create the migration files.
- In your terminal run `npm run db:migrate`. If your connection to the database is correct and the database exists this should create the tables and columns within it.

- Run `npm run dev` to test.

Done! You should be good to go. Right now the database should be empty. You'll need to insert data. In the `/src/main.ts` file try adding the following to the main function:

```javascript
const user = await db
  .insert(UserTable)
  .values([
    {
      name: "Sean",
      age: 29,
      email: "test@test.com",
    },
    { name: "Angus", age: 34, email: "anothertest@test.com" },
  ])
  .returning({
    id: UserTable.id,
    userName: UserTable.name,
  })
user.map((u) => {
  console.log(`${u.userName} has been added!`)
})
```

The `/src/main.ts` file also has more query examples commented out. Feel free to uncomment them and try it out!
