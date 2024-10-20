// import sql from "better-sqlite3";
// import slugify from "slugify";
// import xss from "xss";
// import fs from "node:fs";

// const db = sql("meals.db");

// export async function getMeals() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   // throw new Error("Loading meals failed");
//   db.prepare("SELECT * FROM meals").all();
// }

// export function getMeal(slug) {
//   return db.prepare("SELECT * FROM meals WHERE slug=?".get(slug));
// }

// export async function saveMeal() {
//   Meal.slug = slugify(meal.title, { lower: true });
//   Meal.instructions = xss(meal.instructions);

//   const extension = meal.image.name.split(".").pop();
//   const filename = `${Meal.slug}.${extension}`;

//   const stream = fs.createWriteStream(`public/images/${filename}`);
//   const buffedImage = await meal.image.arrayBuffer();

//   stream.write(Buffer.from(buffedImage), (error) => {
//     if (error) {
//       throw new Error("Saving image failed");
//     }
//   });
//   meal.image = `/image/${filename}`;

//   db.prepare(
//     `
//     INSERT INTO meals
//     (title, slug, image, instructions, creator_email,summary,creator)
//     VALUES (?, ?, ?, ?, ?, ?, ?)
//  `
//   ).run(meal);
// }
