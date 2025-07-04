"use client";

// Deps
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import Logo from "@/assets/images/logo.png";
import Button from "../button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarItems] = useState([
    { name: "Beranda", location: "home" },
    { name: "Via Tol", location: "route" },
    { name: "Agen Resmi", location: "agent" },
    { name: "Kontak", location: "footer" },
    { name: "Lounge" },
    { name: "Lowongan" },
  ]);

  return (
    <>
      {/* Navbar */}
      <div
        className={classNames(
          "h-24",
          "z-50",
          "px-6",
          "flex",
          "fixed",
          "top-0",
          "w-full",
          "items-center",
          "bg-black/[53%]",
          "backdrop-blur-xs"
        )}
      >
        <div
          className={classNames(
            "flex",
            "w-full",
            "mx-auto",
            "max-w-7xl",
            "items-center",
            "justify-between"
          )}
        >
          <Image
            src={Logo}
            alt="Logo Eka Patas"
            className={classNames("h-16", "w-auto", "object-contain")}
          />

          <div
            className={classNames(
              "hidden",
              "flex-1",
              "lg:flex",
              "gap-x-10",
              "justify-center"
            )}
          >
            {navbarItems.map((item, index) => (
              <a
                href={item.location ? `#${item.location}` : undefined}
                key={`navbar-item-${index}`}
                className={classNames(
                  "relative",
                  "text-white",
                  "font-semibold",
                  "hover:cursor-pointer",
                  "transition-all",
                  "duration-300",
                  "after:content-['']",
                  "after:absolute",
                  "after:left-0",
                  "after:-bottom-1",
                  "after:w-0",
                  "after:h-[2px]",
                  "after:bg-orange-400",
                  "hover:after:w-full",
                  "after:transition-all",
                  "after:duration-300"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div
            className={classNames("hidden", "lg:flex", "flex-row", "gap-x-3")}
          >
            <Button circle variant="transparent">
              Masuk
            </Button>
            <Button circle variant="outline">
              Daftar
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className={classNames(
              "text-2xl",
              "lg:hidden",
              "text-white",
              "hover:cursor-pointer"
            )}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Popup Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={classNames(
              "flex",
              "fixed",
              "gap-6",
              "inset-0",
              "z-[100]",
              "flex-col",
              "text-white",
              "items-center",
              "bg-black/90",
              "justify-center",
              "backdrop-blur-sm"
            )}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className={classNames(
                "top-5",
                "right-5",
                "text-3xl",
                "absolute",
                "hover:cursor-pointer"
              )}
            >
              <FiX />
            </button>

            {navbarItems.map((item, idx) => (
              <a
                key={`mobile-nav-${idx}`}
                href={item.location ? `#${item.location}` : undefined}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className={classNames(
                  "text-xl",
                  "font-semibold",
                  "cursor-pointer",
                  "hover:text-orange-400"
                )}
              >
                {item.name}
              </a>
            ))}

            <div className={classNames("mt-8", "flex", "flex-col", "gap-4")}>
              <Button variant="transparent">Masuk</Button>
              <Button variant="outline">Daftar</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
