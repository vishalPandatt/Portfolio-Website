"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ariZonia, firaCode } from "@/app/fonts.js";

const Footer = () => {
  return (
    <footer className="w-full py-5 mt-20 flex flex-col items-center justify-center border-t dark:border-white/40 border-primary/20 backdrop-blur-sm">
      <ul className="flex gap-6 sm:gap-10 mb-6 ">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className={`font-medium text-content-alter dark:text-white transition-colors duration-300 hover:text-primary ${firaCode.className}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex gap-8 mb-6">
        <a
          href="#"
          title="Social Link"
          className="transition-transform duration-300 hover:-translate-y-1 hover:opacity-80"
        >
          <Image
            src="/assets/social/x.png"
            width={100}
            height={100}
            alt="X Logo"
            className="w-5 h-5 object-contain dark:invert opacity-60 hover:opacity-100"
          />
        </a>
        <a
          href="#"
          title="Social Link"
          className="transition-transform duration-300 hover:-translate-y-1 hover:opacity-80"
        >
          <Image
            src="/assets/social/linkedIn.png"
            width={100}
            height={100}
            alt="LinkedIn Logo"
            className="w-5 h-5 object-contain dark:invert opacity-60 hover:opacity-100"
          />
        </a>
        <a
          href="#"
          title="Social Link"
          className="transition-transform duration-300 hover:-translate-y-1 hover:opacity-80"
        >
          <Image
            src="/assets/social/github.png"
            width={100}
            height={100}
            alt="Github Logo"
            className="w-5 h-5 object-contain dark:invert opacity-60 hover:opacity-100"
          />
        </a>
      </div>

      <p className="text-content-alter text-xs sm:text-sm tracking-widest font-medium text-center dark:text-white">
        © {new Date().getFullYear()} All Rights Reserved |{" "}
        <span
          className={`text-cyan-500 font-bold text-lg ${ariZonia.className}`}
        >
          Your Name
        </span>
      </p>
    </footer>
  );
};

export default Footer;
