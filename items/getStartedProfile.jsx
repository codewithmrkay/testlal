"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function GetStartedOrProfile() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  return (
    <div
      className="w-fit max-w-[140px] h-[40px] flex items-center justify-center"
      style={{ minWidth: 40, minHeight: 40 }}
    >
      {!isLoaded ? (
        <div className="w-[40px] h-[40px] bg-gray-400 opacity-70 rounded-full animate-pulse" />
      ) : isSignedIn ? (
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "!w-[40px] !h-[40px] ",
            },
          }}
        />
      ) : (
        <button
          onClick={() => router.push("/sign-up")}
          className="
    px-4 py-2 w-full text-center text-white font-medium rounded-full cursor-pointer
    bg-gradient-to-r
      from-green-400
      via-blue-500
      to-purple-600
    bg-[length:200%_100%] bg-left
    transition-all duration-700 ease-out
    hover:bg-right
    focus:outline-none focus:ring-4 focus:ring-blue-300
  "
        >
          Get Started
        </button>
      )}
    </div>
  );
}
