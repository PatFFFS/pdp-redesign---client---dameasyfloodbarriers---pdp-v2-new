import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const GallerySection = (): JSX.Element => {
  // Data for the check points
  const checkPoints = [
    {
      title: "Independent Laboratory Tests:",
      description:
        "Dam Easy barriers are tested for strength, durability, and watertight performance under real-world flood conditions.",
    },
    {
      title: "Customer Validation:",
      description:
        "Thousands of homes across the globe have been protected during severe storms, hurricanes, and flash floods.",
    },
  ];

  // Data for the gallery images
  const galleryImages = [
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/image.png",
      alt: "Image",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/image-1.png",
      alt: "Image",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/image-3.png",
      alt: "Image",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/image-4.png",
      alt: "Image",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-[60px] py-[100px] bg-[#f6f6f6]">
      <div className="flex flex-col items-start gap-[30px] max-w-[587px]">
        <h2 className="font-['Ubuntu',Helvetica] font-bold text-black text-[35px] leading-[45.5px]">
          How We Prove Our Performance
        </h2>

        <div className="flex flex-col items-start gap-[30px]">
          {checkPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-[15px]">
              <CheckIcon className="text-black text-lg mt-1" />
              <p className="font-['Poppins',Helvetica] text-black text-xl leading-[26px]">
                <span className={index === 0 ? "font-semibold" : "font-bold"}>
                  {point.title}
                </span>{" "}
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <Separator className="w-[580px] bg-black" />

        <div className="flex flex-col items-start gap-[30px]">
          <h3 className="font-['Ubuntu',Helvetica] font-bold text-black text-[22px] leading-[28.6px]">
            Proof You Can See
          </h3>

          <p className="font-['Poppins',Helvetica] text-black text-base leading-[20.8px] max-w-[587px]">
            Our Barriers Have Been Put To The Test In Regions Prone To Heavy
            Flooding, From Coastal Hurricanes To Flash Floods In Urban Settings.
            The Results? A Consistent Record Of Keeping Homes Dry And Safe.
          </p>
        </div>
      </div>

      <Card className="bg-transparent border-0 shadow-none">
        <CardContent className="p-0">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-[30px]">
              {galleryImages.slice(0, 2).map((image, index) => (
                <img
                  key={index}
                  className="w-[281px] h-[317px] object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>
            <div className="flex flex-col gap-[30px]">
              {galleryImages.slice(2, 4).map((image, index) => (
                <img
                  key={index}
                  className="w-[282px] h-[317px] object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
