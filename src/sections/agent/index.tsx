/* eslint-disable react-hooks/exhaustive-deps */
"use client";

// Deps
import Image from "next/image";
import classNames from "classnames";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

// Components
import Search from "@/components/search";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut", // ✅ ini valid
    },
  }),
};

const Agent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView]);

  return (
    <div className={classNames("bg-gray-100", "scroll-mt-24")} id="agent">
      <div
        ref={ref}
        className={classNames(
          "mx-5",
          "flex",
          "py-10",
          "gap-y-10",
          "flex-col",
          "lg:mx-auto",
          "lg:container",
          "min-h-screen"
        )}
      >
        {/* Title */}
        <motion.div
          initial="hidden"
          animate={controls}
          custom={0}
          variants={fadeInUp}
          className={classNames("flex", "flex-row")}
        >
          <h1
            className={classNames(
              "pb-1",
              "text-2xl",
              "font-bold",
              "border-b-4",
              "text-stone-900",
              "border-orange-600"
            )}
          >
            Agen Resmi
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h3
          custom={1}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className={classNames(
            "text-2xl",
            "font-bold",
            "text-center",
            "text-orange-600"
          )}
        >
          Pencarian Agen
        </motion.h3>

        {/* Search */}
        <motion.div
          custom={2}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className={classNames("flex", "flex-row", "justify-center")}
        >
          <div className={classNames("lg:w-2/3", "w-full", "relative")}>
            <Search placeholder="Masukkan nama kotamu" />
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial="hidden"
          animate={controls}
          custom={3}
          variants={fadeInUp}
          className={classNames("flex", "flex-row", "justify-center")}
        >
          <Image
            width={3840}
            height={3840}
            alt="Silhouette"
            src="/images/silhouette.png"
            className={classNames("w-3/12", "aspect-square", "object-contain")}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate={controls}
          custom={4}
          variants={fadeInUp}
          className={classNames("text-neutral-600", "text-center", "text-2xl")}
        >
          Tuliskan nama kotamu dan kami akan <br />
          merekomendasikan agen terdekat kami di kotamu.
        </motion.p>
      </div>
    </div>
  );
};

export default Agent;
