"use server";
import { auth } from "@/auth";
import { z } from "zod";
import type { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import paths from "@/paths";
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, { message: "Must be lowercase letters of dashes Without spaces." }),
  description: z.string().min(10),
});

interface createTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function create_topic(formState: createTopicFormState, formData: FormData): Promise<createTopicFormState> {
  // Create to create false delay to illustrate how loading button works.
  // await new Promise((resolve) => setTimeout(resolve, 2500));
  // TODO: Revalidate the homepage

  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    // console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must remain signed in to create new topic"],
      },
    };
  }

  let topic: Topic;

  try {
    // throw new Error("Bad Error");

    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));

  // return {
  //   errors: {},
  // };
}
