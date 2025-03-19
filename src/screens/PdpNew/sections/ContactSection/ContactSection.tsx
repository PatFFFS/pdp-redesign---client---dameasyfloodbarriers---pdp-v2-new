import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = (): JSX.Element => {
  // Define review images data for easier mapping
  const reviewImages = [
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2025-01-02-at-1-34-32-pm.png",
      alt: "Customer review screenshot 1",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2025-01-02-at-1-36-02-pm.png",
      alt: "Customer review screenshot 2",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2025-01-02-at-1-36-28-pm.png",
      alt: "Customer review screenshot 3",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2025-01-02-at-1-37-09-pm.png",
      alt: "Customer review screenshot 4",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[70px] py-[100px] px-5 md:px-[150px] w-full">
      <h2 className="font-bold text-[35px] text-center leading-[45.5px] tracking-[0] font-['Ubuntu',Helvetica] text-black">
        These Reviews Speak For Themselves!
      </h2>

      <Card className="w-full border-none shadow-none">
        <CardContent className="flex flex-col p-0 space-y-0">
          {reviewImages.map((image, index) => (
            <img
              key={index}
              className="w-full"
              alt={image.alt}
              src={image.src}
            />
          ))}
        </CardContent>
      </Card>

      <Button className="flex items-center justify-center gap-4 px-8 py-[22px] rounded-[100px] bg-[#11d047] hover:bg-[#0fb83e] h-[57px] w-full max-w-[490px]">
        <span className="font-bold text-lg text-center tracking-[0] leading-[41.8px] font-['Urbane-DemiBold',Helvetica] text-white">
          STOP YOUR HOUSE FROM FLOODING NOW
        </span>
        <ArrowRightIcon className="text-white" />
      </Button>
    </section>
  );
};
