import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "@/utils/supabase/client";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const supabase = createClient();

// ======= Vérifier les pseudos pour ne pas avoir des doublons ==============
export async function verifierPseudo(pseudo) {
  const { data } = await supabase
    .from("users")
    .select("pseudo")
    .eq("pseudo", pseudo)
    .single();

  return data;
}

// ====================== Followers ==========================
export async function getFollowers(userId) {
  const { data, error } = await supabase
    .from("follows")
    .select("follower_id")
    .eq("following_id", userId);

  if (error) {
    console.error(error);
    return [];
  }

  return data;

  // cette partie sera recevoir l'afficharge des follower

  // const followerIds = data.map((row) => row.follower_id);
  // const { data: followers, error: followersError } = await supabase
  //   .from("users")
  //   .select("*")
  //   .in("id", followerIds);

  // if (followersError) {
  //   console.error(followersError);
  //   return [];
  // }

  // return followers;
}

// ====================== Following ==========================
export async function getFollowing(userId) {
  const { data, error } = await supabase
    .from("follows")
    .select("following_id")
    .eq("follower_id", userId);

  if (error) {
    console.error(error);
    return [];
  }

  return data;

  // cette partie sera recevoir l'afficharge des following

  // const followingIds = data.map((row) => row.following_id);
  // const { data: following, error: followingError } = await supabase
  //   .from("users")
  //   .select("*")
  //   .in("id", followingIds);

  // if (followingError) {
  //   console.error(followingError);
  //   return [];
  // }

  // return following;
}

// ===================== fonctionnalité suivre (follow) ========================
export async function followUser(followerId, followingId) {
  const { data, error } = await supabase
    .from("follows")
    .insert([{ follower_id: followerId, following_id: followingId }]);
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}

// ===================== fonctionnalité ne plus suivre (unfollow) ========================
export async function unfollowUser(followerId, followingId) {
  const { data, error } = await supabase
    .from("follows")
    .delete()
    .eq("follower_id", followerId)
    .eq("following_id", followingId);
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}
