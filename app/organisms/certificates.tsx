"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import images from "../assets/data";

const certificates = [
  images.certifcate1,
  images.certifcate2,
  images.certifcate3,
  images.certifcate4,
  images.certifcate5,
  images.certifcate6,
  images.certifcate7,
  images.certifcate8,
  images.certifcate9,
  images.certifcate10,
];

const Certificate = () => {
  return (
    <div className="w-full py-12 bg-transparent">
      <h1 className="text-3xl font-semibold text-center text-white mb-12">
        Certificates
      </h1>

      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {certificates.map((src, index) => (
          <div
            key={index}
            className="w-60 h-40 relative mx-4 flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-white/10"
          >
            <Image
              src={src}
              alt={`Certificate ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Certificate;
