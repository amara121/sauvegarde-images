"use client";

import { useEffect } from "react";
import { useUser } from "../stores/user";

const InitUser = ({ user }) => {
  const { addUser } = useUser();

  useEffect(() => {
    addUser(user)
  }, []);

  return null;
}

export default InitUser
