import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
  return (
    <nav className="py-5 flex items-center justify-between">

      <Link href="/">
        <h1 className="text-4xl font-bold">
          BLOG<span className=" text-blue-500">AM70</span>
        </h1>
      </Link>

      <div className="hidden sm:flex items-center gap-6 text-xl">
        <Link href="/" className="hover:text-blue-600 transition"> Home</Link>
        <Link href="/dashboard" className="hover:text-blue-600 transition"> Dashboard</Link>
        <Link href="/" className="hover:text-blue-600 transition"> Chi sono</Link>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <p>Hello {user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </RegisterLink>
        </div>
      )}      
    </nav>
  );
}