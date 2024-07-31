import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Footer from "../Footer";
import SheetMenuItems from "./SheetMenuItems";
import SheetInfosProfil from "./SheetInfosProfil";
import { useUser } from "@/lib/stores/user";

export function SheetProfil() {
  const { user } = useUser();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          className="p-0 rounded-full bg-cyan-400 hover:bg-cyan-600"
        >
          {user?.photo_url ? (
            <Image
              priority={true}
              src={user?.photo_url}
              alt="default avatar"
              width={40}
              height={40}
              className=" object-cover rounded-full"
            />
          ) : (
            <Image
              priority={true}
              src={"/images/default-avatar.png"}
              alt="default avatar"
              width={40}
              height={40}
              className=" object-cover rounded-full"
            />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[310px]">
        <SheetHeader>
          <SheetTitle className="text-gray-700">Mon Profil</SheetTitle>
          <SheetDescription>
            {/* Apportez des modifications à votre profil ici. Cliquez sur
            Enregistrer lorsque vous avez terminé. */}
          </SheetDescription>
        </SheetHeader>
        <div className="flex h-full flex-col gap-5">
          <SheetInfosProfil />

          <SheetMenuItems />

          <Footer />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" id="close-sheet" className="hidden"></Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
