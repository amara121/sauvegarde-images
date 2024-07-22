"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { Button } from "@/components/ui/button";
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
import { login } from "@/app/(dashboard)/(auth)/login/actions";
// import { toast } from "./ui/use-toast";
// import { ToastAction } from "./ui/toast";
import { createClient } from "@/utils/supabase/client";
import { LoginFormSchema } from "@/schemas";
import { Loader2 } from "lucide-react";


export function FormLogin() {
  // const supabase = createClient();

  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { execute, status, result } = useAction(login, {
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
      if (error.serverError) {
        console.log("probleme avec le server");
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
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-[500px] border rounded-lg p-4"
      >
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-800">
          {status === "executing" && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Connexion
        </Button>

        <p className="text-xs text-center">
          <Link
            href={"/signup"}
            className="underline text-gray-800 font-semibold"
          >
            Mot de passe oublié?
          </Link>
        </p>
        <p className="text-xs text-center">
          Vous n'avez pas un compte sur liiberté ? alors{" "}
          <Link
            href={"/signup"}
            className="underline text-gray-800 font-semibold"
          >
            Inscrivez-vous
          </Link>
        </p>
      </form>
    </Form>
  );
}
