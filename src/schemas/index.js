import { z } from "zod";

// le schema pour se connecter
export const LoginFormSchema = z.object({
  email: z
    .string()
    .email({
      message: "Veuillez entrer une adresse email valide.",
    })
    .min(6, {
      message: "Le courriel doit comporter au moins 6 caractères.",
    }),
  password: z.string().min(6, {
    message: "le mot de passe doit comporter au moins 6 caractères.",
  }),
});

// le schema pour s'inscrire
export const SignUpFormSchema = z.object({
  nom: z.string().min(3, {
    message: "le nom doit comporter au moins 3 caractères.",
  }),
  prenom: z.string().min(3, {
    message: "le prenom doit comporter au moins 3 caractères.",
  }),
  pseudo: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, {
      message:
        "Le nom d’utilisateur doit ne doit pas contenir d'espaces, de symboles ou de caractères accentués.",
    })
    .min(3, {
      message: "le pseudo doit comporter au moins 3 caractères.",
    }),
  email: z
    .string()
    .email({
      message: "Veuillez entrer une adresse email valide.",
    })
    .min(6, {
      message: "l'email doit comporter au moins 6 caractères.",
    }),
  password: z.string().min(6, {
    message: "le mot de passe doit comporter au moins 6 caractères.",
  }),
});

// le schema pour modifier un compte utilisateur
// export const UpdateUserFormSchema = z.object({
//   nom: z.string().min(3, {
//     message: "le nom doit comporter au moins 3 caractères.",
//   }),
//   prenom: z.string().min(3, {
//     message: "le prenom doit comporter au moins 3 caractères.",
//   }),
//   numero: z.string().min(10, {
//     message: "le numero doit comporter au moins 10 caractères.",
//   }),
//   commune: z.string().min(3, {
//     message: "la commune doit comporter au moins 3 caractères.",
//   }),
// });

// le schema pour ajouter un produit
// export const AddProduitFormSchema = z.object({
//   image: z.string().min(3, {
//     message: "le nom doit comporter au moins 3 caractères.",
//   }),
//   nom: z.string().min(3, {
//     message: "le nom doit comporter au moins 3 caractères.",
//   }),
//   prix: z.string().min(1, {
//     message: "le prix doit comporter au moins 3 caractères.",
//   }),
//   categorie: z.string().min(1, {
//     message: "Veuillez sélectionner une catégorie à afficher.",
//   }),
//   description: z.string().max(160, {
//     message: "la description ne doit pas dépasser 30 caractères.",
//   }),
// });

// le schema pour modifier un produit
// export const UpdateProduitFormSchema = z.object({
//   id: z.number(),
//   image: z.string(),
//   nom: z.string(),
//   prix: z.string(),
//   categorie: z.string(),
//   description: z.string(),
// });

// le schema pour ajouter une catégorie
// export const AddCategorieProduitFormSchema = z.object({
//   label: z.string().min(3, {
//     message: "le nom doit comporter au moins 3 caractères.",
//   }),
// });

// le schema pour ajouter une commande
// export const AddCommandeFormSchema = z.object({
//   lieu: z.string().min(2, {
//     message: "le lieu doit comporter au moins 2 caractères.",
//   }),
//   somme_min: z.string().min(3, {
//     message: "le prix doit comporter au moins 3 chiffres.",
//   }),
//   utilisateur_id: z.string(),
//   commercial_id: z.string(),
//   produit_id: z.number(),
// });

// le schema pour ajouter une commande
// export const AddVersementFormSchema = z.object({
//   commande_id: z.number(),
//   mode_paiement: z.number(),
// });
