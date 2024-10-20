"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isValidTest(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    image: formData.get("image"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log("Meals being saved:", meal);

  //   // Server-side validation
  //   const errors = {};
  //   if (isValidTest(meal.title)) {
  //     errors.title = "Title is required";
  //   }
  //   if (isValidTest(meal.summary)) {
  //     errors.summary = "Summary is required";
  //   }
  //   if (isValidTest(meal.instructions)) {
  //     errors.instructions = "Instructions are required";
  //   }
  //   if (isValidTest(meal.creator)) {
  //     errors.creator = "Creator name is required";
  //   }
  //   if (isValidTest(meal.creator_email)) {
  //     errors.creator_email = "Creator email is required";
  //   } else if (!meal.creator_email.includes("@")) {
  //     errors.creator_email = "Invalid email address";
  //   }
  //   if (!meal.image || meal.image.size === 0) {
  //     errors.image = "Image is required";
  //   }

  //   if (Object.keys(errors).length > 0) {
  //     return { message: "Invalid input", errors };
  //   }

  //   try {
  //     await saveMeal(meal);
  //   } catch (error) {
  //     console.error("Error while saving meal:", error);
  //     return { message: "Failed to save meal", error: error.message }; // Handle error gracefully
  //   }
  //   redirect("/meals");
  // }
  if (
    isValidTest(meal.title) ||
    isValidTest(meal.summary) ||
    isValidTest(meal.instructions) ||
    isValidTest(meal.creator) ||
    isValidTest(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Input",
    };
  }
  // try {
  //   await saveMeal(meal);
  // } catch (error) {
  //   console.error("Error while saving meal:", error);
  //   return { message: "Failed to save meal", error: error.message };
  // }
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
