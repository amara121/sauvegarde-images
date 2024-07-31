import Header from "@/components/header-component/Header";
import MenuDesktop from "@/components/menu-component/MenuDesktop";
import MenuMobile from "@/components/menu-component/MenuMobile";
import InitUser from "@/lib/initStores/InitUser";
import { createClient } from "@/utils/supabase/server";

const layout = async ({ children }) => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  // reccuperer un utilisateur par son ID via supabase
  const { data: user } = await supabase
    .from("users")
    .select("id, nom, prenom, pseudo, bio, photo_url")
    .eq("id", data?.user?.id);

  return (
    <div className="flex flex-col">
      {/* les initiateur des stats pour alimenter zustand */}
      <InitUser user={user[0]} />

      {/* le header */}
      <div className="w-full h-20">
        <Header />
      </div>

      {/* menu & content */}
      <div className="relative grid grid-cols-1 md:grid-cols-[150px_minmax(320px,_1fr)] max-h-[calc(100vh_-_80px)]">
        {/* menu */}
        <div className="relative hidden md:flex">
          <MenuDesktop />
        </div>

        {/* content */}
        {children}

        <div className="md:hidden fixed bottom-0 left-0 right-0">
          <MenuMobile />
        </div>
      </div>
    </div>
  );
};

export default layout;
