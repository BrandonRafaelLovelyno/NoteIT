import { Bentham } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
    <Link href="/home">
      <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Home
      </button>
    </Link>
    <h1 className="bg-black color-white px-10"> ....Click Home .... </h1>
    </div>
  );
}
