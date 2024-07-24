'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { createSafeActionClient } from 'next-safe-action'
import { LoginFormSchema } from '@/schemas'

const safeAction = createSafeActionClient()

export const login = safeAction(LoginFormSchema, async ({email, password}) => {
  const supabase = createClient()

  const loginInfo = {
    email,
    password
  }

  const { error } = await supabase.auth.signInWithPassword(loginInfo)

  if (error) return {message: error.message}

  revalidatePath('/', 'layout')
  redirect('/')
})