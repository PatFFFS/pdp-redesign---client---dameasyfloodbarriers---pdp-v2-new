import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PricingSection = (): JSX.Element => {
  // Data for the steps to make the code more maintainable
  const steps = [
    {
      id: 1,
      title: "Position The Barrier",
      description: "Place it in your doorway or window-no tools are needed.",
      image:
        "https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2024-03-15-at-3-08-1.png",
    },
    {
      id: 2,
      title: "Extend The Panels",
      description: "Adjust the sides to fit your opening perfectly.",
      image: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1385.png",
    },
    {
      id: 3,
      title: "Seal It Tight",
      description: "Inflate the patented seal for a watertight grip.",
      image: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1386.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[70px] py-[100px] w-full">
      <div className="flex flex-col items-center gap-[30px]">
        <h2 className="font-['Ubuntu',Helvetica] font-bold text-black text-[35px] leading-[45.5px] text-center">
          Protect Your Home In 3 Simple Steps
        </h2>
        <p className="w-[876px] font-['Poppins',Helvetica] font-normal text-black text-xl text-center leading-[26px]">
          Floodwater doesn&#39;t wait, but with Dam Easy, you&#39;re ready in
          minutes:
        </p>
      </div>

      <div className="relative w-full max-w-[1246px]">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <Card
              key={step.id}
              className="w-[349px] border-none bg-transparent"
            >
              <CardContent className="p-0">
                <div className="relative flex flex-col items-center">
                  <div className="relative w-[211px] h-[171px]">
                    <img
                      className="w-[211px] h-[155px] object-cover"
                      alt={`Step ${step.id}`}
                      src={step.image}
                    />
                    <div className="absolute w-[35px] h-[33px] top-[138px] left-[89px]">
                      <div className="relative w-[33px] h-[33px] bg-yellow rounded-[16.5px] flex items-center justify-center">
                        <span className="font-['Poppins',Helvetica] font-bold text-black text-lg">
                          {step.id}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-[20px] font-['Poppins',Helvetica] font-bold text-black text-lg text-center leading-[23.4px]">
                    {step.title}
                  </h3>
                  <p className="mt-[9px] w-[345px] font-['Poppins',Helvetica] font-normal text-black text-base text-center leading-[20.8px]">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Connecting arrows between steps */}
          <img
            className="absolute w-[272px] h-[42px] top-14 left-[266px]"
            alt="Arrow right"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-1-1.svg"
          />
          <img
            className="absolute w-[272px] h-[42px] top-14 left-[723px]"
            alt="Arrow right"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-6-1.svg"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        <p className="w-[876px] font-['Poppins',Helvetica] font-normal text-black text-xl text-center leading-[26px]">
          That&#39;s it. No heavy lifting. No hassle. Just reliable protection
          when you need it most.
        </p>

        <Button className="w-[490px] px-8 py-[22px] bg-[#11d047] rounded-[100px] flex items-center justify-center gap-4 hover:bg-[#0fb83e]">
          <span className="font-['Urbane-DemiBold',Helvetica] font-bold text-white text-lg text-center leading-[41.8px]">
            STOP YOUR HOUSE FROM FLOODING NOW
          </span>
          <ArrowRightIcon className="h-5 w-5 text-white" />
        </Button>

        <div className="flex items-center gap-[5px] mt-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                className="w-4 h-[15px]"
                alt="Star"
                src="https://c.animaapp.com/m8fm62nptWwCJ9/img/star-3.svg"
              />
            ))}
          </div>
          <p className="font-['Poppins',Helvetica] font-normal text-base leading-[22.4px]">
            <span className="text-black">Rated 4.8/5 by </span>
            <span className="font-bold text-black">
              100+ Florida homeowners
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
