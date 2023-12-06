import Link from "next/link";

export default function Home(){
  return (
    <>
      <h1>Welcome Home !</h1>
      <div className="flex gap-9 text-pink-600 p-5 text-lg font-bold ">
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      </div>
      
    </>
  );
}
