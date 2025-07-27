import Rolepage from "@/items/rolepage";
import { SignOutButton } from "@clerk/nextjs";

// app/dashboard/page.jsx
export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[url('/background.svg')] bg-center bg-cover p-3 pb-10 sm:p-5">
         <Rolepage/>
</div>
  );
}
