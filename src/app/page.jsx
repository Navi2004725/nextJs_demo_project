import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/about/branches">Brnches</Link>
        </li>
        <li>
          <Link href="/products/vegis">vegies page</Link>
        </li>
      </ul>
      <Link href="https://claude.ai/new" target="_blank">
        Next js site
      </Link>
    </>
  );
}
