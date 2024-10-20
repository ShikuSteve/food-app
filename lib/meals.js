// // import { Client } from "pg";
// import slugify from "slugify";
// import xss from "xss";
// // import fs from "node:fs/promises";
// // import path from "path";
// import { bucket } from "@/firebase";
// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// // const client = new Client({
// //   user: "postgres",
// //   host: "localhost",
// //   database: "foodies",
// //   password: "timon",
// //   port: 5432,
// // });

// // const client = new Client({
// //   connectionString: process.env.POSTGRES_URL,
// // });

// // const client = new Client({
// //   connectionString: process.env.DATABASE_URL,
// //   ssl: {
// //     rejectUnauthorized: false, // Required for Render
// //   },
// // });
// pool.connect();

// export async function getMeals() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   // throw new Error("Loading meals failed");

//   const query = "SELECT * FROM meals";
//   const result = await pool.query(query);
//   return result.rows; // Returns the array of meal records from PostgreSQL
// }

// export async function getMeal(slug) {
//   const query = "SELECT * FROM meals WHERE slug=$1";
//   const result = await pool.query(query, [slug]);
//   return result.rows[0]; // Return the first matching meal (or undefined if not found)
// }

// // export async function saveMeal(meal) {
// //   meal.slug = slugify(meal.title, { lower: true });
// //   meal.instructions = xss(meal.instructions);

// //   const extension = meal.image.name.split(".").pop();
// //   const filename = `${meal.slug}.${extension}`;

// //   const filePath = `/${filename}`;

// //   // Use fs.promises to handle file writing with async/await
// //   const buffedImage = await meal.image.arrayBuffer();
// //   await fs.writeFile(filePath, Buffer.from(buffedImage)); // Use writeFile for proper error handling

// //   meal.image = ``;

// //   const insertQuery = `
// //     INSERT INTO meals (title, slug, image, instructions, creator_email, summary, creator)
// //     VALUES ($1, $2, $3, $4, $5, $6, $7)
// //   `;

// //   try {
// //     await pool.query(insertQuery, [
// //       meal.title,
// //       meal.slug,
// //       meal.image,
// //       meal.instructions,
// //       meal.creator_email,
// //       meal.summary,
// //       meal.creator,
// //     ]);
// //   } catch (error) {
// //     console.error("Database insertion error:", error);
// //     throw new Error("Saving meal to the database failed: " + error.message);
// //   }
// // }

// // export async function saveMeal(meal) {
// //   meal.slug = slugify(meal.title, { lower: true });
// //   meal.instructions = xss(meal.instructions);

// //   const extension = meal.image.name.split(".").pop();
// //   const filename = `${meal.slug}.${extension}`;
// //   const filePath = path.join(
// //     "C:\\Users\\admin\\Pictures\\React\\nginx\\images",
// //     filename
// //   );

// //   // Use fs.promises to handle file writing with async/await
// //   const buffedImage = await meal.image.arrayBuffer();
// //   await fs.writeFile(filePath, Buffer.from(buffedImage)); // Use writeFile for proper error handling

// //   // Update the image URL to be served by Nginx
// //   meal.image = `http://127.0.0.1:8080/images/${filename}`;

// //   const insertQuery = `
// //       INSERT INTO meals (title, slug, image, instructions, creator_email, summary, creator)
// //       VALUES ($1, $2, $3, $4, $5, $6, $7)
// //   `;

// //   try {
// //     await pool.query(insertQuery, [
// //       meal.title,
// //       meal.slug,
// //       meal.image,
// //       meal.instructions,
// //       meal.creator_email,
// //       meal.summary,
// //       meal.creator,
// //     ]);
// //   } catch (error) {
// //     console.error("Database insertion error:", error);
// //     throw new Error("Saving meal to the database failed: " + error.message);
// //   }
// // }

// // export async function saveMeal(meal) {
// //   meal.slug = slugify(meal.title, { lower: true });
// //   meal.instructions = xss(meal.instructions);

// //   const extension = meal.image.name.split(".").pop();
// //   const filename = `${meal.slug}.${extension}`;
// //   const filePath = `images/${filename}`; // Path in Firebase Storage

// //   // Upload the image to Firebase Storage
// //   const fileBuffer = Buffer.from(await meal.image.arrayBuffer());
// //   const fileUpload = bucket.file(filePath);

// //   await fileUpload.save(fileBuffer, {
// //     metadata: { contentType: meal.image.type },
// //     resumable: false,
// //   });

// //   // Get the public URL for the uploaded image
// //   const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
// //     bucket.name
// //   }/o/${encodeURIComponent(filePath)}?alt=media`;

// //   // Update the image URL to be served by Firebase Storage
// //   meal.image = publicUrl;

// //   const insertQuery = `
// //       INSERT INTO meals (title, slug, image, instructions, creator_email, summary, creator)
// //       VALUES ($1, $2, $3, $4, $5, $6, $7)
// //   `;

// //   try {
// //     await pool.query(insertQuery, [
// //       meal.title,
// //       meal.slug,
// //       meal.image,
// //       meal.instructions,
// //       meal.creator_email,
// //       meal.summary,
// //       meal.creator,
// //     ]);
// //   } catch (error) {
// //     console.error("Database insertion error:", error);
// //     throw new Error("Saving meal to the database failed: " + error.message);
// //   }
// // }
// export async function saveMeal(meal) {
//   meal.slug = slugify(meal.title, { lower: true });
//   meal.instructions = xss(meal.instructions);

//   const extension = meal.image.name.split(".").pop();
//   const filename = `${meal.slug}.${extension}`;
//   const filePath = `images/${filename}`; // Path in Firebase Storage

//   // Upload the image to Firebase Storage
//   const fileBuffer = Buffer.from(await meal.image.arrayBuffer());
//   const fileUpload = bucket.file(filePath);

//   await fileUpload.save(fileBuffer, {
//     metadata: { contentType: meal.image.type },
//     resumable: false,
//   });

//   // Get the public URL for the uploaded image
//   const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
//     bucket.name
//   }/o/${encodeURIComponent(filePath)}?alt=media`;

//   // Update the image URL to be served by Firebase Storage
//   meal.image = publicUrl;

//   const insertQuery = `
//       INSERT INTO meals (title, slug, image, instructions, creator_email, summary, creator)
//       VALUES ($1, $2, $3, $4, $5, $6, $7)
//   `;

//   try {
//     await pool.query(insertQuery, [
//       meal.title,
//       meal.slug,
//       meal.image,
//       meal.instructions,
//       meal.creator_email,
//       meal.summary,
//       meal.creator,
//     ]);
//   } catch (error) {
//     console.error("Database insertion error:", error);
//     throw new Error("Saving meal to the database failed: " + error.message);
//   }
// }

// process.on("exit", () => {
//   pool.end();
// });

import { Pool } from "pg";
import slugify from "slugify";
import xss from "xss";
import { bucket } from "@/firebase";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function getMeals() {
  const query = "SELECT * FROM meals";
  const result = await pool.query(query);
  return result.rows; // Returns the array of meal records from PostgreSQL
}

export async function getMeal(slug) {
  const query = "SELECT * FROM meals WHERE slug=$1";
  const result = await pool.query(query, [slug]);
  return result.rows[0]; // Return the first matching meal (or undefined if not found)
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const filePath = `images/${filename}`; // Path in Firebase Storage

  // Upload the image to Firebase Storage
  const fileBuffer = Buffer.from(await meal.image.arrayBuffer());
  const fileUpload = bucket.file(filePath);

  await fileUpload.save(fileBuffer, {
    metadata: { contentType: meal.image.type },
    resumable: false,
  });

  // Get the public URL for the uploaded image
  const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
    bucket.name
  }/o/${encodeURIComponent(filePath)}?alt=media`;

  // Update the image URL to be served by Firebase Storage
  meal.image = publicUrl;

  const insertQuery = `
      INSERT INTO meals (title, slug, image, instructions, creator_email, summary, creator)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;

  try {
    await pool.query(insertQuery, [
      meal.title,
      meal.slug,
      meal.image,
      meal.instructions,
      meal.creator_email,
      meal.summary,
      meal.creator,
    ]);
  } catch (error) {
    console.error("Database insertion error:", error);
    throw new Error("Saving meal to the database failed: " + error.message);
  }
}

// Gracefully handle process exit
process.on("SIGINT", async () => {
  await pool.end();
  process.exit(0);
});
