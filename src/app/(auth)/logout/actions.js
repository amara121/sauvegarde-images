"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const logout = async () => {
  const supabase = createClient()

  const { error } = supabase.auth.signOut()

  if (error) {
    redirect("/error")
  }

  revalidatePath("/" , "layout")
  redirect("/login")
}