"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import ImageUploaderProfil from "./ImageUploaderProfil";
import SimpleBar from "simplebar-react";
import { useUser } from "@/lib/stores/user";

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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  nom: z.string().min(3, {
    message: "Le nom doit comporter au moins 3 caractères.",
  }),
  prenom: z.string().min(3, {
    message: "Le prénom doit comporter au moins 3 caractères.",
  }),
  pseudo: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, {
      message:
        "Le nom d’utilisateur doit ne doit pas contenir d'espaces, de symboles ou de caractères accentués.",
    })
    .min(3, {
      message: "Le nom d’utilisateur doit comporter au moins 3 caractères.",
    }),
  bio: z.string().max(50, {
    message: "Bio ne doit pas depassé 50 caractères.",
  }),
});

const ParametreProfil = () => {
  const { user } = useUser();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      pseudo: "",
      bio: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <SimpleBar className="w-full flex h-[calc(100vh_-_180px)]">
      <div className="w-full h-full flex flex-col items-center pb-24 md:pb-3">
        <ImageUploaderProfil />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 px-3 max-w-md w-full"
          >
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Fofana" {...field} />
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
              name="prenom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Amara" {...field} />
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
              name="pseudo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom d'utilisateur</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: amarafofana121" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Il est facile de t'identifier avec ton nom d'utilisateur.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Bio <span className="text-xs">(facultatif)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Pouvez-vous nous parler un peu de vous?"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Veillez à ce que le bio ne dépasse pas 50 caractères.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-cyan-500 hover:bg-cyan-800">Modifier</Button>
          </form>
        </Form>
      </div>
    </SimpleBar>
  );
};

export default ParametreProfil;
