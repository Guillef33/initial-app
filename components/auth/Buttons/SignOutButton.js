"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    const data = await signOut({
      redirect: false, // Do not let NextAuth handle redirection
      callbackUrl: "/", // Specify your custom redirect page
    });

    if (data?.error) {
      console.error("Sign out error:", data.error);
    } else {
      // Redirect to the custom page after successful sign out
      router.push("/");
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default LogoutButton;
