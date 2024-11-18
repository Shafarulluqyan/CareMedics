"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Navbar() {
  const pathname = usePathname(); // Get the current pathname
  console.log(pathname, "<< ini untuk cek pathname");

  return (
    <div className="flex justify-between w-full h-20 px-8 t-0 font-bold items-center mb-10 bg-red-800">
      {/* Icon */}
      <div className="flex items-center">
        <Link href="/" className="text-3xl">
          <Image
            src="/care-medics-icon.png"
            alt="icon-care-medics"
            width={65}
            height={20}
            className="object-contain"
          />
        </Link>
        {pathname == "/login" && <h1 className="text-3xl">Care Medics</h1>}
      </div>

      {/* Menu - Only show if not on the login page */}
      {pathname !== "/login" && (
        <div className="flex items-center space-x-6 font-bold">
          <Link href="/products" className="hover:text-red-700">
            Product
          </Link>
          <Link href="/categories" className="hover:text-red-700">
            Category
          </Link>
          <Link href="/" className="hover:text-red-700">
            History
          </Link>
        </div>
      )}

      {/* Login - Only show if not on the login page */}
      {pathname !== "/login" && (
        <div className="flex items-center">
          <Link href="/login" className="hover:text-red-700">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
