"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import { Button } from "../ui/button";
import { useUser } from "@/lib/stores/user";
import { createClient } from "@/utils/supabase/client";
import {
  followUser,
  getFollowers,
  getFollowing,
  unfollowUser,
} from "@/lib/utils";
import Link from "next/link";
import { useFollowers } from "@/lib/stores/useFollowers";

const PanelLeftUtilisateur = ({ utilisateur }) => {
  const supabase = createClient();
  // const [followers, setFollowers] = useState([]);
  // const [following, setFollowing] = useState([]);
  const {
    followers,
    following: userFollowing,
    setFollowing: setUserFollowing,
    setUserProfile,
    userProfile,
  } = useFollowers();
  const [followStatus, setFollowStatus] = useState({});
  const { user } = useUser();
  const userId = supabase.auth.getUser()
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  // useEffect pour la largeur du composant
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        setWidth(Math.floor(entries[0].contentRect.width));
      }
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (utilisateur?.id) {
      const fetchFollowers = async () => {
        let { data, error } = await supabase
          .from("follows")
          .select("follower_id")
          .eq("following_id", utilisateur?.id)
          .order("created_at", { ascending: false });
        if (error) console.error(error);
        // else setFollowers(data.map((f) => f.following_id));
      };

      const fetchFollowing = async () => {
        let { data, error } = await supabase
          .from("follows")
          .select("following_id")
          .eq("follower_id", utilisateur?.id)
          .order("created_at", { ascending: false });
        if (error) console.error(error);
        // else setFollowing(data.map((f) => f.following_id));
      };

      const fetchUserFollowing = async () => {
        let { data, error } = await supabase
          .from("follows")
          .select("following_id")
          .eq("follower_id", (await userId).data.user.id);
        if (error) console.error(error);
        else setUserFollowing(data.map((f) => f.following_id));
      };

      fetchFollowers();
      fetchFollowing();
      fetchUserFollowing();
    }
  }, [utilisateur?.id, user?.id]);

  const handleFollow = async () => {
    const { data, error } = await supabase
      .from('follows')
      .insert([{ follower_id: user?.id, following_id: utilisateur?.id }]);
    if (error) console.error(error);
    else {
      setUserFollowing([...userFollowing, utilisateur?.id]);
    }
  };

  const handleUnfollow = async () => {
    const { data, error } = await supabase
      .from('follows')
      .delete()
      .match({ follower_id: user?.id, following_id: utilisateur?.id });
    if (error) console.error(error);
    else {
      setUserFollowing(userFollowing.filter(followingId => followingId !== utilisateur?.id));
    }
  };

  return (
    <div ref={divRef} className="w-full flex">
      <SimpleBar className="w-full flex h-[calc(100vh_-_80px)] px-2 gap-2">
        <div
          className={`flex flex-col items-center space-y-4 h-full py-4 ${
            width < 290 ? "px-0" : "px-4"
          } text-gray-700`}
        >
          {/* <p>Largeur de la div: {width}px</p> */}
          <div className="relative rounded-full">
            {/* photo de profil */}
            {utilisateur?.photo_url ? (
              <Image
                priority={true}
                src={utilisateur?.photo_url}
                alt="default avatar"
                width={296}
                height={296}
                className={` ${
                  width < 290
                    ? "min-w-[143px] w-[143px] h-[143px]"
                    : "min-w-[296px] w-[296px] h-[296px]"
                } object-cover rounded-full border-2 border-white`}
              />
            ) : (
              <Image
                priority={true}
                src={"/images/default-avatar.png"}
                alt="default avatar"
                width={296}
                height={296}
                className={` ${
                  width < 290
                    ? "min-w-[143px] w-[143px] h-[143px]"
                    : "min-w-[296px] w-[296px] h-[296px]"
                } object-cover rounded-full border-2 border-white`}
              />
            )}

            {/* statut en ligne */}
            {/* <span
              className={`absolute  ${
                width < 290
                  ? "bottom-[15%] right-[7%]"
                  : "bottom-[18%] right-[10%]"
              } w-6 h-6 bg-green-500 border-2 border-white rounded-full animate-ping`}
            ></span>
            <span
              className={`absolute  ${
                width < 290
                  ? "bottom-[16%] right-[8%]"
                  : "bottom-[19%] right-[11%]"
              }  w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center`}
            ></span> */}
          </div>

          <div className={`w-full flex flex-col items-center`}>
            <div
              className={`flex ${
                width < 290 ? "text-lg" : "gap-3 text-2xl"
              } items-center font-extrabold`}
            >
              <span className="text-center">
                {utilisateur?.prenom} {utilisateur?.nom}
              </span>
              {/* <span></span> */}
            </div>
            <span className="font-bold">@{utilisateur?.pseudo}</span>
          </div>

          {/* content(publications, followers, suivi(e)s) */}
          <div
            className={`w-full grid ${
              width < 290 ? "grid-cols-1" : "grid-cols-3"
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold">5</span>
              <span className="text-sm text-gray-500">publications</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold">130</span>
              <span className="text-sm text-gray-500">followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold">160</span>
              <span className="text-sm text-gray-500">suivi(e)s</span>
            </div>
          </div>

          {/* biographie */}
          <div className={`${width < 290 ? "hidden" : "flex"}`}>
            <p className="font-semibold text-gray-600">{utilisateur?.bio}</p>
          </div>

          {/* bouton pour editer profil */}
          <div className="w-full flex">
            {user?.pseudo === utilisateur?.pseudo ? (
              <Link href={"/parametre"} className="w-full">
                <Button className="w-full bg-cyan-500 hover:bg-cyan-800">
                  Edit Profil
                </Button>
              </Link>
            ) : userFollowing.includes(utilisateur?.id) ? (
              <Button
                // onClick={handleUnfollow}
                className="w-full bg-cyan-500 hover:bg-cyan-800"
              >
                Unfollow
              </Button>
            ) : (
              <Button
                // onClick={handleFollow}
                className="w-full bg-cyan-500 hover:bg-cyan-800"
              >
                Suivre
              </Button>
            )}
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default PanelLeftUtilisateur;
