"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SimpleBar from "simplebar-react";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  ancienPassword: z.string().min(3, {
    message: "Le mot de passe doit comporter au moins 3 caractères.",
  }),
  nouveauPassword: z.string().min(3, {
    message: "Le mot de passe doit comporter au moins 3 caractères.",
  }),
  confirmerPassword: z.string().min(3, {
    message: "Le mot de passe doit comporter au moins 3 caractères.",
  }),
});

const ParametrePassword = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ancienPassword: "",
      nouveauPassword: "",
      confirmerPassword: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <SimpleBar className="w-full flex h-[calc(100vh_-_180px)]">
      <div className="w-full h-full flex flex-col items-center pb-24 md:pb-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 mt-5 px-3 max-w-md w-full"
          >
            <FormField
              control={form.control}
              name="ancienPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ancien mot de passe</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {/* <FormDescription className="text-xs">
                    Aucun espace, symbole ou lettre accentuée ne doit être
                    présent dans le nom.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nouveauPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nouveau mot de passe</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {/* <FormDescription className="text-xs">
                    Aucun espace, symbole ou lettre accentuée ne doit être
                    présent dans le Prénom.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmerPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmer le mot de passe</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {/* <FormDescription className="text-xs">
                    Il est facile de t'identifier avec ton nom d'utilisateur.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-800"
              // disabled={loading || errorPseudo}
            >
              {/* {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{" "} */}
              Modifier
            </Button>
          </form>
        </Form>

        <p className="text-xl font-bold">Page en maintenance</p>
      </div>
    </SimpleBar>
  );
};

export default ParametrePassword;
