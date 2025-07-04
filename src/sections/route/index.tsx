"use client";

// Deps
import classNames from "classnames";
import { motion } from "framer-motion";

// Components
import Card from "@/components/card";
import Button from "@/components/button";
import Timeline from "@/components/timeline";

const Route = () => {
  return (
    <div className={classNames("bg-gray-100", "scroll-mt-24")} id="route">
      <div
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
        {/* Judul Section */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={classNames("flex", "flex-row")}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
            Lewat Jalur Tol
          </h1>
        </motion.div>

        {/* Deskripsi Rute */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Card className={classNames("mb-10")}>
            <h1 className={classNames("text-stone-900", "font-bold")}>
              Rute Surabaya - Solo (PP) Full Tol
            </h1>

            <div className={classNames("flex", "flex-col", "text-gray-600")}>
              <p>
                Perjalanan langsung tanpa turun penumpang, kecuali di
                titik-titik berikut:
              </p>

              <ul className={classNames("list-disc", "list-inside")}>
                <li>Terminal Surabaya</li>
                <li>Terminal Solo</li>
                <li>Terminal Yogyakarta</li>
                <li>Terminal Magelang</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Timeline Step */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Timeline />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className={classNames("flex", "flex-row", "justify-center")}
        >
          <div
            className={classNames("flex", "flex-row", "min-h-12", "min-w-24")}
          >
            <Button variant="primary">Selengkapnya</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Route;
