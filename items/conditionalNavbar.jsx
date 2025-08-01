"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ConditionalNavbar() {
  const path = usePathname();
  const hidden = ["/sign-in", "/sign-up"].includes(path);
  return hidden ? null : <Navbar/>;
}
