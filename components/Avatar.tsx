"use client";

import Image from "next/image";
import { TransitionComponent } from "./TransitionComponent";

export const Avatar = () => {
  return (
    <TransitionComponent
      position="bottom"
      className="bottom-0 right-0 hidden xl:inline-block xl:absolute"
    >
      <Image
        src="/avatar-1.png"
        width={400}
        height={400}
        className="w-full h-full"
        alt="Avatar"
      />
    </TransitionComponent>
  );
};
