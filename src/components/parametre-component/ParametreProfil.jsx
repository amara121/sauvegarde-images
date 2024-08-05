"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";
import { z } from "zod";
import React, { useCallback, useEffect, useState } from "react";
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
import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";
import { Loader2 } from "lucide-react";

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
  bio: z.string().max(60, {
    message: "Bio ne doit pas depassé 50 caractères.",
  }),
});

const ParametreProfil = () => {
  const supabase = createClient();
  const { user, updateUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [errorPseudo, setErrorPseudo] = useState(false);


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      pseudo: "",
      bio: "",
    },
  });

  useEffect(() => {
    // Pré-remplir le formulaire avec les données utilisateur de Zustand
    form.setValue("nom", user?.nom);
    form.setValue("prenom", user?.prenom);
    form.setValue("pseudo", user?.pseudo);
    form.setValue("bio", user?.bio);
    console.log(user?.bio);
  }, [user, form.setValue]);

  const checkUsernameExists = useCallback(
    throttle(
      debounce(async (pseudo) => {
        const { data, error } = await supabase
          .from("users")
          .select("pseudo")
          .eq("pseudo", pseudo)
          .neq("id", user?.id); // Exclure l'utilisateur actuel de la vérification

        if (data.length > 0) {
          form.setError("pseudo", {
            type: "manual",
            message: "Le pseudo est déjà pris.",
          });
          setErrorPseudo(true)
        } else {
          setErrorPseudo(false)
          form.clearErrors("pseudo");
        }
      }, 300),
      1000
    ),
    [user?.id]
  );

  useEffect(() => {
    return () => {
      checkUsernameExists.cancel();
    };
  }, [checkUsernameExists]);

  async function onSubmit(values) {
    console.log(values);
    setLoading(true);

    const { error } = await supabase
      .from("users")
      .update({
        nom: values.nom,
        prenom: values.prenom,
        pseudo: values.pseudo,
        bio: values.bio,
      })
      .eq("id", user?.id);

    if (error) {
      console.error(error);
      setLoading(false)
    } else {
      setLoading(false);
      // Mettre à jour les informations utilisateur dans Zustand
      updateUser({
        nom: values.nom,
        prenom: values.prenom,
        pseudo: values.pseudo,
        bio: values.bio,
      });
      // alert("Informations mises à jour avec succès !");
      toast("Informations mises à jour avec succès !");
    }
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
                    <Input
                      {...form.register("pseudo", {
                        onChange: (e) => checkUsernameExists(e.target.value),
                      })}
                      placeholder="Ex: amarafofana121"
                      {...field}
                    />
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
            <Button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-800"
              disabled={loading || errorPseudo}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{" "}
              Modifier
            </Button>
          </form>
        </Form>
      </div>
    </SimpleBar>
  );
};

export default ParametreProfil;
