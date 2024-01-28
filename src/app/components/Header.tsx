import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-600 text-gray-100 ">
      <nav className="flex items-center justify-between p-4">
        <Link href={"/"} className="text-xl font-bold">
          Book Commerce
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href={"/"}
            className="text-gray-300 hover:text-gray-100 text-sm px-3 py-2 font-medium"
          >
            ホーム
          </Link>
          <Link
            href={"/login"}
            className="text-gray-300 hover:text-gray-100 text-sm px-3 py-2 font-medium"
          >
            ログイン
          </Link>
          <Link href={"/profile"}>
            <Image
              width={50}
              height={50}
              alt="profile_icon"
              src={"/default_icon.png"}
            ></Image>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
