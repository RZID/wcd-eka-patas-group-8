"use client";

// Deps
import {
  MdOutlineCalendarToday,
  MdOutlineConfirmationNumber,
} from "react-icons/md";
import Image from "next/image";
import classNames from "classnames";
import { PiGpsFix } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { easeOut, motion } from "framer-motion";

// Components
import Card from "@/components/card";
import Input from "@/components/input";
import Button from "@/components/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

const Home = () => {
  return (
    <div
      id="home"
      className={classNames("h-screen", "relative", "overflow-hidden")}
    >
      {/* Background Image */}
      <div className={classNames("absolute", "inset-0", "z-0")}>
        <Image
          src="/images/hero-background.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div
        className={classNames("absolute", "inset-0", "bg-black/40", "z-10")}
      />

      {/* Content */}
      <div className={classNames("relative", "z-20", "pb-20", "h-full")}>
        <div
          className={classNames(
            "mx-5",
            "flex",
            "h-full",
            "flex-col",
            "lg:mx-auto",
            "justify-end",
            "lg:container"
          )}
        >
          {/* Judul */}
          <motion.div
            custom={0}
            initial="hidden"
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true }}
            className={classNames("flex", "flex-col", "gap-y-2", "pb-10")}
          >
            <h1 className={classNames("text-3xl", "text-white", "font-bold")}>
              Perjalanan Nyaman & Aman
            </h1>
            <p className={classNames("text-white")}>
              Nikmati perjalanan antarkota dengan armada terbaik, layanan
              <br />
              profesional, dan fasilitas modern.
            </p>
          </motion.div>

          {/* Label */}
          <motion.div
            custom={1}
            initial="hidden"
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true }}
            className={classNames("flex", "flex-row", "justify-end")}
          >
            <div
              className={classNames(
                "py-2",
                "px-5",
                "flex",
                "gap-x-2",
                "flex-row",
                "text-white",
                "items-center",
                "bg-black/75",
                "rounded-tr-2xl"
              )}
            >
              <MdOutlineConfirmationNumber />
              <h1>Cari tiket dan cek tarif</h1>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            custom={2}
            initial="hidden"
            variants={fadeInUp}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card
              excludeRounded={["top-right"]}
              className={classNames("flex", "flex-col", "gap-y-5")}
            >
              <Input
                label="Asal"
                icon={<GrLocation />}
                placeholder="Pilih asal keberangkatan"
              />

              <Input
                label="Tujuan"
                icon={<PiGpsFix />}
                placeholder="Pilih tujuan"
              />

              <div
                className={classNames(
                  "flex",
                  "gap-5",
                  "flex-col",
                  "lg:flex-row"
                )}
              >
                <div className={classNames("flex-1")}>
                  <Input
                    label="Pergi"
                    icon={<MdOutlineCalendarToday />}
                    placeholder="Pilih Tanggal keberangkatan"
                  />
                </div>
                <div className={classNames("flex-1")}>
                  <Button variant="outline-primary">Cek Tarif Saja</Button>
                </div>
                <div className={classNames("flex-1")}>
                  <Button variant="primary">Cari Tiket</Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
