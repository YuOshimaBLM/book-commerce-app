import Image from "next/image";
import Link from "next/link";
import React from "react";

const Book = ({ book }: any) => {
  return (
    <div className="flex flex-col items-center m-4">
      <Link
        href={"/"}
        className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
      >
        <Image
          priority
          width={450}
          height={300}
          alt="book.image"
          src={book.thumbnail}
          className="rounded-t-md"
        />
        <div className="px-4 py-4 bg-slate-100 rounded-b-md">
          <h2 className="text-lg font-semibold">{book.title}</h2>
          <p className="mt-2 text-lg text-slate-600">この本は○○...</p>
          <p className="mt-2 text-md text-slate-700">値段:{book.price}円</p>
        </div>
      </Link>
    </div>
  );
};

export default Book;
