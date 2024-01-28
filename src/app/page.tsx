import books from "../data/BookInformation";
import Book from "./components/Book";

export default function Home() {
  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          Book Commerce
        </h2>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </main>
    </>
  );
}
