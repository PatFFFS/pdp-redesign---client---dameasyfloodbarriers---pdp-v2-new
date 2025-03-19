import React from "react";
import { Button } from "../../../../components/ui/button";

export const FeaturesSection = (): JSX.Element => {
  // Feature points data
  const featurePoints = [
    {
      title: "Single Door?",
      description: " One barrier does the job.",
    },
    {
      title: "Larger Openings?  ",
      description:
        "Combine multiple barriers with extension poles for seamless protection.",
    },
    {
      description:
        "From front doors to garages, patios to shop entrances—Dam Easy has every corner of your home covered.",
    },
  ];

  // Gallery images data
  const galleryImages = [
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1389.png",
      alt: "Rectangle",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1405-1.png",
      alt: "Rectangle",
    },
  ];

  return (
    <section className="flex flex-wrap justify-between items-center gap-8 py-[100px] px-5 bg-[#264775] w-full">
      {/* Text content */}
      <div className="flex flex-col w-full max-w-[530px] items-start gap-[34px]">
        <h2 className="font-['Ubuntu',Helvetica] font-bold text-[35px] leading-[38.5px] tracking-[0]">
          <span className="text-white">Fits Any Space, </span>
          <span className="text-[#ffeb3d]">Protects Every Home</span>
        </h2>

        <p className="font-['Poppins',Helvetica] font-normal text-white text-xl leading-[26px] w-full">
          Your home is unique, and Dam Easy adapts to fit:
        </p>

        <div className="flex flex-col items-start gap-[23px] w-full">
          {featurePoints.map((point, index) => (
            <p
              key={index}
              className="font-['Poppins',Helvetica] font-normal text-white text-base leading-[20.8px] w-full"
            >
              {point.title && <span className="font-bold">{point.title}</span>}
              <span>{point.description}</span>
            </p>
          ))}
        </div>

        <Button className="w-[490px] h-[57px] px-8 py-[22px] bg-yellow rounded-[100px] text-black hover:bg-yellow/90">
          <span className="font-['Urbane-DemiBold',Helvetica] font-bold text-lg text-center leading-[41.8px] whitespace-nowrap">
            👉 CALCULATE HOW MANY BARRIERS YOU NEED
          </span>
        </Button>
      </div>

      {/* Image gallery */}
      <div className="flex items-end gap-5">
        <div className="flex flex-col w-[272px] items-start gap-5">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              className="w-full h-[293px] object-cover"
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>

        <img
          className="w-[450px] h-[605px] object-cover"
          alt="Rectangle"
          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1404-1.png"
        />
      </div>
    </section>
  );
};
