import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  //.run() is used when you update or add the data.
  //all is used when you fetch teh data.
  //for a single row you can use .get() instead
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare(`SELECT * FROM meals`).all();
}

export async function getMeal(slug) {
  //
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
