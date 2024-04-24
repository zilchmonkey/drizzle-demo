import { count } from "drizzle-orm"
import { db } from "./drizzle/db"
import { UserTable } from "./drizzle/schema"

async function main() {
  // await db.delete(UserTable)
  // const user = await db
  //   .insert(UserTable)
  //   .values([
  //     {
  //       name: "Sean",
  //       age: 29,
  //       email: "test@test.com",
  //     },
  //     { name: "Angus", age: 34, email: "anothertest@test.com" },
  //   ])
  //   .returning({
  //     id: UserTable.id,
  //     userName: UserTable.name,
  //   })
  // user.map((u) => {
  //   console.log(`${u.userName} has been added!`)
  // })

  // await db.insert(UserPreferencesTable).values({
  //     emailUpdates: true,
  //     userId: "b927b80a-34ef-442b-8f85-ed178d020057"
  // })

  // const users = await db.query.UserTable.findMany({
  //     columns: { email: true, id: true, age: true },
  //     // extras: { lowerCaseName: sql<string>`lower(${UserTable.name})`.as("lowerCaseName") }
  //     // limit: 1
  //     // offset: 1
  //     // with: {
  //     //     preferences: {
  //     //         columns: {
  //     //             emailUpdates: true
  //     //         }
  //     //     },
  //     //     posts: { with: { postCategories: true } }
  //     // }
  //     // orderBy: desc(UserTable.age)
  //     orderBy: (table, funcs) => funcs.desc(table.age)
  // })

  const users = await db
    .select({ age: UserTable.age, count: count(UserTable.name) })
    .from(UserTable)
    .groupBy(UserTable.age)

  console.log(users)
}

main()
