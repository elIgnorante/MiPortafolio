"use client";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TransitionComponent } from "./TransitionComponent";

export const NavBar = () => {
  // Basicamente nos indica en que seccion nos encontramos
  const router = usePathname();

  return (
    <TransitionComponent
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sn">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                router === item.link && `bg-secondary`
              }`}
            >
              <Link href={item.link}> {item.icon} </Link>
            </div>
          ))}
        </div>
      </nav>
    </TransitionComponent>
  );
};
