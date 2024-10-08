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
import { login } from "@/app/(auth)/login/actions";
// import { toast } from "./ui/use-toast";
// import { ToastAction } from "./ui/toast";
import { LoginFormSchema } from "@/schemas";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Toast } from "../ui/toast";
import { useToast } from "@/components/ui/use-toast"


export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast()

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
        toast({
            variant: "destructive",
            title: "Uh oh! Quelque chose a mal tourné.",
            description: `Email ou Mot de passe incorrect. Veuillez éessayez svp!!!`,
          // action: (
          //     <ToastAction altText="Try again" type="button" onClick={() => router.push('/login')}>Connectez-vous</ToastAction>
          // ),
        });
      } else {
        console.log("succès connexion");
        toast({
          variant: "destructive",
          // title: "Uh oh! Quelque chose a mal tourné.",
          description: `succès connexion`,
          // action: (
          //     <ToastAction altText="Try again" type="button" onClick={() => router.push('/login')}>Connectez-vous</ToastAction>
          // ),
        });
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
        className="space-y-4 max-w-[500px] border rounded-lg p-4 mx-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input placeholder="Ex: amarafofana121@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="font-bold">Mot de passe</FormLabel>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="mot de passe"
                  {...field}
                />
              </FormControl>
              <Button
                type="button"
                className="absolute right-0 top-6 bg-transparent hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    className="w-6 h-6 text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z" />
                    <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                    <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Button>
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
