import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/img1.png";
import Button from "./(components)/Button";

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
      <Image src={img1} alt="sample image" style={{ width: "100%", objectFit: "cover" }} />
      {/**this is for large size capacity */}
      <img src={img1.src} alt="sample 2" />
      <Image
        src={
          "https://media.istockphoto.com/id/2208884525/photo/leaf-surface-with-water-drops-macro-shallow-dofleaf-surface-with-water-drops-macro-shallow-dof.jpg?s=2048x2048&w=is&k=20&c=AT1y7I7kLxzKX1-Ij0WlmrF5p2Xkz7H0GEMvH9FMW6c="
        }
        alt="sample 3"
        width={1000}
        height={1000}></Image>
      <Button />
    </>
  );
}
