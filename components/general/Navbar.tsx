import Link from "next/link";

export function Navbar() {
  return (
    <nav className="py-5 flex items-center justify-between">

      <Link href="/">
        <h1 className="text-4xl font-bold">
          BLOG<span className=" text-blue-500">AM70</span>
        </h1>
      </Link>

      <div className="hidden sm:flex items-center gap-6 text-xl">
        <Link href="/" className="hover:text-blue-600 transition"> Home</Link>
        <Link href="/" className="hover:text-blue-600 transition"> Articoli</Link>
        <Link href="/" className="hover:text-blue-600 transition"> Chi sono</Link>
      </div>
    </nav>
  );
}