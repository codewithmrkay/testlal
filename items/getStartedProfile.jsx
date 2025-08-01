"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function GetStartedOrProfile() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  return (
    <div
      className="w-[40px] h-[40px] flex items-center justify-center"
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
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Get Started
        </button>
      )}
    </div>
  );
}
