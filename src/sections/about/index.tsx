/* eslint-disable react-hooks/exhaustive-deps */
"use client";

// Deps
import Image from "next/image";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { easeOut, useInView, motion, useAnimation } from "framer-motion";

// Components
import Card from "@/components/card";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <div className={classNames("bg-gray-100", "scroll-mt-24")} id="about">
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
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className={classNames("flex", "flex-row")}
        >
          <motion.h1
            className={classNames(
              "pb-1",
              "text-2xl",
              "font-bold",
              "border-b-4",
              "text-stone-900",
              "border-orange-600"
            )}
            variants={fadeUp}
          >
            Tentang Kami
          </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className={classNames("relative")}
        >
          <Card
            className={classNames(
              "flex",
              "gap-y-5",
              "text-2xl",
              "flex-col",
              "text-neutral-600"
            )}
          >
            <motion.h1
              className={classNames(
                "text-4xl",
                "text-center",
                "font-semibold",
                "text-stone-900"
              )}
              variants={fadeUp}
            >
              PT. EMPS
            </motion.h1>

            <motion.p variants={fadeUp}>
              PT. Eka Mira Prima Sentosa (EMPS) berdiri sejak tahun 1971, yang
              memiliki rute favorit Surabaya - Solo, dan berkembang sampai
              Yogyakarta, dan kini PT. Eka Mira Prima Sentosa memiliki berbagai
              macam jurusan ke Jawa Tengah dan juga Jawa Barat.
            </motion.p>

            <motion.p className={classNames("pb-10")} variants={fadeUp}>
              Untuk kelas Eksekutif, EMPS menyediakan Hino RN 285 dengan air
              suspension yang dapat memberikan nilai plus bagi kenyamanan
              penumpang dalam perjalanan.
            </motion.p>
          </Card>

          <Image
            src="/images/bus-transparent.png"
            alt="Bus Transparent"
            className={classNames(
              "z-10",
              "w-1/5",
              "hidden",
              "absolute",
              "lg:block",
              "aspect-video",
              "-right-[50px]",
              "object-contain",
              "-bottom-[50px]"
            )}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
