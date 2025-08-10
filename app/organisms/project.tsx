'use client'
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import images from "../assets/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project = [
  {
    id: 1,
    title: "Jalan.ify",
    image: images.project1,
    about: 'Travel Agency',
    deskription:
      "Jalan.ify adalah platform travel agency modern yang menyediakan layanan pemesanan tiket, hotel, dan tur dalam satu aplikasi dengan antarmuka yang ramah pengguna.",
  },
  {
    id: 2,
    title: "Auto Hunt",
    image: images.project2,
    about: 'Rent Car',
    deskription:
      "Auto Hunt adalah solusi pemesanan mobil sewa berbasis web yang memudahkan pengguna menemukan kendaraan yang sesuai kebutuhan mereka dengan sistem pemesanan yang efisien.",
  },
  {
    id: 3,
    title: "Meta Mask Sign Flow",
    image: images.project3,
    about: 'Web3 Sign',
    deskription:
      "Proyek ini mengintegrasikan alur login dan autentikasi menggunakan MetaMask untuk aplikasi Web3, memudahkan user mengakses fitur berbasis blockchain secara aman dan cepat.",
  },
  {
    id: 4,
    title: "Loker Sync",
    image: images.project4,
    about: 'Job Portal',
    deskription:
      "Loker Sync adalah platform portal pekerjaan yang dirancang untuk perusahaan dan pencari kerja, dengan fitur manajemen lamaran, filtering pekerjaan, dan tampilan UI modern.",
  },
  {
    id: 5,
    title: "Ezy Nft",
    image: images.projetc5,
    about: 'NFT Base Terminal Simulation',
    deskription:
      "Ezy NFT mensimulasikan aktivitas investasi NFT berbasis terminal, termasuk fitur jual-beli, fluktuasi harga, dan analisis portofolio, cocok untuk edukasi dan eksperimen awal.",
  },
  {
    id: 6,
    title: "Global Landing Page",
    image: images.projetc6,
    about: 'Travel Web',
    deskription:
      "Landing page elegan untuk perusahaan travel global, dilengkapi animasi scroll, responsif di semua perangkat, dan optimasi SEO untuk promosi destinasi internasional.",
  },
  {
    id: 8,
    title: "Jajan Yuk",
    image: images.projetc7,
    about: 'E-commerce',
    deskription:
      "Jajan Yuk adalah platform e-commerce makanan lokal, memungkinkan pengguna memesan berbagai jajanan khas daerah dengan sistem pembayaran online dan pengiriman cepat.",
  },
  {
    id: 9,
    title: "Simple Calculator",
    image: images.projetc8,
    about: 'Kalkulator',
    deskription:
      "Kalkulator sederhana berbasis web dengan antarmuka bersih dan fungsi dasar matematika seperti penjumlahan, pengurangan, perkalian, dan pembagian.",
  },
  {
    id: 10,
    title: "Drum Machine",
    image: images.project9,
    about: 'Digital Drum',
    deskription:
      "Aplikasi drum digital berbasis web yang memungkinkan pengguna membuat ritme dan beat secara interaktif dengan suara drum yang realistis.",
  },
  {
    id: 11,
    title: "Random Quote",
    image: images.project10,
    about: 'Quote Generator',
    deskription:
      "Aplikasi web yang menampilkan kutipan inspiratif secara acak, cocok untuk motivasi harian dan refleksi singkat.",
  },
  {
    id: 12,
    title: "Kerjago",
    image: images.project11,
    about: 'Modern Job Portal',
    deskription:
      "Platform pencarian kerja modern yang membantu pencari kerja menemukan lowongan sesuai minat dan kualifikasi dengan antarmuka yang user-friendly.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? Project : Project.slice(0, 5);

  return (
    <div className="w-full lg:px-12 px-4 py-8 flex flex-col items-center">
      <div className="w-full lg:max-w-[75%]">
        <h1 className="text-xl text-white mb-8">Featured Projects</h1>

        <div className="grid grid-cols-1 gap-y-6">
          <AnimatePresence>
            {displayedProjects.map((item) => (
              <motion.div
                key={item.id}
                className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl ${
                  item.id % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                    {item.title} |{" "}
                    <span className="text-purple-300">{item.about}</span>
                  </h3>
                  <p className="text-sm md:text-base text-white/80 mb-4 max-w-xl">
                    {item.deskription}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a
                      href="#"
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[#3b31d1] text-white hover:bg-[#5045d5] transition"
                    >
                      Full project
                      <ArrowUpRight size={16} />
                    </a>
                    <button className="px-4 py-2 text-sm font-medium rounded-lg border border-white/10 text-white/80 hover:bg-white/10 transition">
                      UI UX Redesign
                    </button>
                    <button className="px-4 py-2 text-sm font-medium rounded-lg border border-white/10 text-white/80 hover:bg-white/10 transition">
                      App Design
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-shrink-0 w-full md:w-[280px]">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt="Project mockup"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show All / Show Less Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center px-6 py-2 bg-neutral-950 rounded-md hover:bg-neutral-800 transition"
          >
            <p className="text-xs text-white">
              {showAll ? "Show Less" : "All Projects"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
