"use client";

import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import MenuLinks from "@/components/shared/MenuLinks";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  console.log(session);
  const user = session?.user;

  // Sign out function

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/login";
        },
      },
    });
  };

  return (
    <article className="flex justify-between wrapper py-4">
      <p></p>
      <ul className="flex gap-3 text-gray-700">
        <li>
          <MenuLinks href={"/"}>Home</MenuLinks>
        </li>
        <li>
          <MenuLinks href={"/about"}>About</MenuLinks>
        </li>
        <li>
          <MenuLinks href={"/career"}>Career</MenuLinks>
        </li>
      </ul>

      {isPending ? (
        <p>Loading...</p>
      ) : user ? (
        <div className="flex gap-3 items-center">
          <h3 className="font-bold"> Hello, {user?.name}</h3>

          <Image
            src={user?.image || userAvatar}
            alt="user userAvatar"
            height={50}
            width={50}
            className="rounded-full"
          />

          <button
            onClick={handleSignOut}
            className="btn bg-purple-500 text-white"
          >
            Log Out
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </article>
  );
};

export default Navbar;
