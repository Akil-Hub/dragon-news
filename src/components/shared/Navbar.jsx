import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import MenuLinks from "@/components/shared/MenuLinks";
const Navbar = () => {
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
          <MenuLinks href={"/career"} >
            Career
          </MenuLinks>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <Image src={userAvatar} alt="user userAvatar" height={50} width={50} />
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </article>
  );
};

export default Navbar;
