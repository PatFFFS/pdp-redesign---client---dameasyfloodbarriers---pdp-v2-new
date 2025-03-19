import React from "react";
import { AspectRatio } from "../../../../components/ui/aspect-ratio";
import { Card, CardContent } from "../../../../components/ui/card";

export const FAQSection = (): JSX.Element => {
  // Image gallery data
  const galleryImages = [
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1401.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1402.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1403-1.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1404-1.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1405-1.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1406-1.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1417.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1407.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1408.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1413.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1415.png",
    "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1416.png",
  ];

  return (
    <section className="flex flex-col items-center gap-[70px] py-[100px] w-full">
      <Card className="border-none shadow-none">
        <CardContent className="flex flex-col items-center gap-[30px] p-0">
          <h2 className="max-w-[781px] [font-family:'Ubuntu',Helvetica] font-bold text-black text-[35px] text-center tracking-[0] leading-[49px]">
            Keep The Water At Bay
          </h2>
          <p className="max-w-[712px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[26px]">
            Flooding Is A Real Threat That Strikes When You Least Expect It.
            With Dam Easy, You Can Be Confident Your Property Won&apos;t Be
            Devastated By Flood Waters. Join Thousands Of Protected Families
            Today.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[21px] w-full">
        {galleryImages.map((src, index) => (
          <div key={index} className="w-[200px] h-[199.32px]">
            <AspectRatio ratio={1}>
              <img
                className="w-full h-full object-cover"
                alt={`Flood protection image ${index + 1}`}
                src={src}
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </section>
  );
};
