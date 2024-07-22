"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";
// import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import { signup } from "@/app/(dashboard)/(auth)/signup/actions";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";
// import { toast } from "./ui/use-toast";
// import { ToastAction } from "./ui/toast";
import { useRouter } from "next/navigation";
import { SignUpFormSchema } from "@/schemas";
import { useAction } from "next-safe-action/hooks";
import { Loader2 } from "lucide-react";

export function FormSignup() {
  const form = useForm({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      password: "",
    },
  });

  const { execute, status, result } = useAction(signup, {
    onSuccess: (data) => {
      if (data.message) {
        console.log(data.message);
        // toast.error(data.message);
        // toast({
        //   variant: "destructive",
        //   title: "Uh oh! Quelque chose a mal tourné.",
        //   description: `Mot de passe incorrect. Réessayez ou cliquez sur "Mot de passe oublié?" pour le réinitialiser.`,
        //   // action: (
        //   //     <ToastAction altText="Try again" type="button" onClick={() => router.push('/login')}>Connectez-vous</ToastAction>
        //   // ),
        // });
      } else {
        console.log("succès connexion");
        console.log(data);
        // toast({
        //   variant: "destructive",
        //   // title: "Uh oh! Quelque chose a mal tourné.",
        //   description: `succès connexion`,
        //   // action: (
        //   //     <ToastAction altText="Try again" type="button" onClick={() => router.push('/login')}>Connectez-vous</ToastAction>
        //   // ),
        // });
      }
    },
    onExecute(data) {
      console.log("connection en cours");
    },
    onError(error) {
      if (error) {
        console.log("probleme avec le server");
        console.log(error);
        // toast({
        //   variant: "destructive",
        //   title: "Uh oh! Quelque chose a mal tourné.",
        //   description: `probleme avec le serveur`,
        //   // action: (
        //   //     <ToastAction altText="Try again" type="button" onClick={() => router.push('/login')}>Connectez-vous</ToastAction>
        //   // ),
        // });
      }
    },
  });

  function onSubmit(values) {
    execute(values);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-[500px] border rounded-lg p-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Nom</FormLabel>
                <FormControl>
                  <Input placeholder="nom" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="prenom"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="prénom" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="pseudo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Pseudo</FormLabel>
              <FormControl>
                <Input placeholder="prénom" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Mot de passe</FormLabel>
              <FormControl>
                <Input placeholder="mot de passe" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-800">
          {status === "executing" && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Inscription
        </Button>

        <p className="text-xs text-center">
          Vous avez déjà un compte sur liberté ? alors{" "}
          <Link
            href={"/login"}
            className="underline text-gray-800 font-semibold"
          >
            Connectez-vous
          </Link>
        </p>
      </form>
    </Form>
  );
}
