"use client";

import { useUser } from "@clerk/nextjs";

export default function Leo() {
  const { isLoaded, isSignedIn, user } = useUser();

  // 1. Wait for Clerk to initialize
  if (!isLoaded) {
    return (
      <div className="w-[70px] h-[70px] flex items-center justify-center">
        <div className="w-full h-full bg-gray-200 rounded-full animate-pulse" />
      </div>
    );
  }

  // 2. Prompt sign-in if needed
  if (!isSignedIn) {
    return <div>Please sign in to see your greeting.</div>;
  }

  // 3. Once signed in, show the first name
  return (
    <div className="text-lg font-medium">
      &nbsp; ras 💦 piyla ye na {user.firstName} 🍑
    </div>
  );
}
