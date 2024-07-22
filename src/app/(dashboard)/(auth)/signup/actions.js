"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { SignUpFormSchema } from "@/schemas";
import { createSafeActionClient } from "next-safe-action";

const safeAction = createSafeActionClient();

// export const signup = safeAction
//   .schema(SignUpFormSchema)
//   .action(async ({ nom, prenom, email, password }) => {
//     const supabase = createClient();

//     const data = {
//       email,
//       password,
//       options: {
//         data: {
//           nom,
//           prenom,
//           pseudo: email,
//         },
//       },
//     };

//     const { error } = await supabase.auth.signUp(data);

//     if (error) return { message: error.message };

//     revalidatePath("/", "layout");
//     redirect("/");
//   });

export const signup = safeAction(
  SignUpFormSchema,
  async ({ nom, prenom, pseudo, email, password }) => {
    const supabase = createClient();

    const data = {
      email,
      password,
      options: {
        data: {
          nom,
          prenom,
          pseudo,
        },
      },
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) return { message: error.message };

    revalidatePath("/", "layout");
    redirect("/");
  }
);
