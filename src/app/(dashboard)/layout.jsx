import { createClient } from '@/utils/supabase/server'

const layout = async ({ children }) => {

  return (
    <div>
      {children}
    </div>
  )
}

export default layout
