import { createClient } from '@/utils/supabase/server'

const layout = async ({ children }) => {
  const supabase = createClient()

  return (
    <div>
      {children}
    </div>
  )
}

export default layout
