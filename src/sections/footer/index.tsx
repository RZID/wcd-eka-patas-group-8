"use client";

// Deps
import Image from "next/image";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

// Components
import Wave from "@/components/wave";

const Footer = () => {
  const footerLinks = [
    "Support",
    "Syarat & Ketentuan",
    "Tentang Kami",
    "Kebijakan Privasi",
    "FAQ",
  ];

  const socialIcons = [
    { icon: <FiFacebook />, link: "#" },
    { icon: <FiInstagram />, link: "#" },
    { icon: <FiYoutube />, link: "#" },
  ];

  return (
    <div id="footer" className={classNames("scroll-mt-24", "bg-orange-600")}>
      <Wave />
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={classNames(
            "mx-6",
            "flex",
            "gap-8",
            "py-16",
            "lg:gap-20",
            "lg:mx-auto",
            "lg:flex-row",
            "text-white",
            "lg:container",
            "flex-col-reverse"
          )}
        >
          <div
            className={classNames(
              "flex",
              "flex-1",
              "gap-y-4",
              "flex-col",
              "text-center",
              "items-center"
            )}
          >
            <div className={classNames("w-1/2", "relative")}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                className={classNames("w-full", "h-auto", "object-contain")}
              />
            </div>
            <h1 className={classNames("text-2xl", "font-bold")}>
              PT. Eka Mira Prima Sentosa
            </h1>
            <p className={classNames("text-lg", "leading-relaxed")}>
              Jl. Raya Gilang No.10, <br />
              Sidoarjo, Jawa Timur 61257
            </p>
          </div>

          <div
            className={classNames(
              "border-t",
              "lg:border-r",
              "self-stretch",
              "lg:border-t-0",
              "border-white"
            )}
          />

          <div
            className={classNames(
              "flex",
              "flex-1",
              "flex-col",
              "gap-y-10",
              "items-center"
            )}
          >
            <div
              className={classNames(
                "grid",
                "gap-4",
                "text-lg",
                "text-center",
                "grid-cols-2",
                "font-semibold"
              )}
            >
              {footerLinks.map((item, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className={classNames(
                    "relative",
                    "after:block",
                    "after:h-[2px]",
                    "cursor-pointer",
                    "after:scale-x-0",
                    "after:bg-white",
                    "after:origin-left",
                    "after:duration-300",
                    "hover:text-white",
                    "hover:after:scale-x-100",
                    "after:transition-transform"
                  )}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div
              className={classNames(
                "flex",
                "gap-6",
                "flex-row",
                "text-2xl",
                "text-white"
              )}
            >
              {socialIcons.map((soc, idx) => (
                <motion.a
                  key={idx}
                  href={soc.link}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={classNames("hover:text-neutral-200")}
                >
                  {soc.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
