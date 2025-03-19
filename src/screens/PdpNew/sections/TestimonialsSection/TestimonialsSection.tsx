import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const TestimonialsSection = (): JSX.Element => {
  // Carousel data
  const carouselItems = [
    {
      id: 1,
      image:
        "https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2024-03-08-at-2-49-1-1.png",
      active: false,
    },
    {
      id: 2,
      image:
        "https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2024-03-08-at-2-49-1-1.png",
      active: false,
    },
    {
      id: 3,
      image:
        "https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2024-03-13-at-9-23-1-1.png",
      active: true,
    },
    {
      id: 4,
      image:
        "https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2024-03-08-at-2-49-1-1.png",
      active: false,
    },
    {
      id: 5,
      image:
        "https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2024-03-08-at-2-49-1-1.png",
      active: false,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[70px] py-[100px] w-full bg-white">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-[30px] max-w-[740px]">
        <Badge className="px-[23px] py-3 bg-[#ffeb3d] text-black rounded-[64px] border border-solid border-[#ffbd3d]">
          <span className="[font-family:'Poppins',Helvetica] font-normal text-xl leading-[26px]">
            See For Yourself!
          </span>
        </Badge>

        <h2 className="[font-family:'Ubuntu',Helvetica] font-bold text-black text-[35px] text-center leading-[45.5px] w-full">
          Yes, It Really Is That Dam Easy!
        </h2>

        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl text-center leading-[26px] w-full">
          Watch The Video For A Step-by-step Guide To Deploying Our Flood
          Barrier.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.id} className="flex justify-center">
                <Card className="border-none">
                  <CardContent className="relative p-0 h-[449px] w-full max-w-[806px]">
                    <div
                      className={`w-full h-full ${item.id === 3 ? "bg-cover bg-center" : ""}`}
                      style={
                        item.id === 3
                          ? { backgroundImage: `url(${item.image})` }
                          : {}
                      }
                    >
                      {item.id !== 3 && (
                        <img
                          className="w-full h-full object-cover"
                          alt="Video thumbnail"
                          src={item.image}
                        />
                      )}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[87px] h-[62px]">
                        <div className="absolute w-[55px] h-11 top-[9px] left-4 bg-white" />
                        <img
                          className="absolute w-[87px] h-[62px] top-0 left-0"
                          alt="Play button"
                          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/xmlid-823-.svg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-[70px] h-[70px] bg-white rounded-[1000px] border-2 border-solid border-[#264775]">
            <img
              className="w-[17px] h-[12.9px] rotate-180"
              alt="Previous arrow"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/fluent-arrow-right-12-regular.svg"
            />
          </CarouselPrevious>

          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-[70px] h-[70px] bg-[#ffeb3d] rounded-[1000px] border border-solid border-[#264775]">
            <img
              className="w-[17px] h-[12.9px]"
              alt="Next arrow"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/fluent-arrow-right-12-regular-1.svg"
            />
          </CarouselNext>
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex items-start gap-2.5 justify-center mt-10">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`w-[15.15px] h-[15.15px] rounded-[7.57px] ${item.active ? "bg-[#1a638f]" : "bg-[#d9d9d9]"}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center gap-5">
        <Button className="flex w-[490px] h-[57px] justify-center items-center gap-4 px-8 py-[22px] bg-[#11d047] rounded-[100px] hover:bg-[#0fb83e]">
          <span className="whitespace-nowrap [font-family:'Urbane-DemiBold',Helvetica] font-bold text-white text-lg text-center leading-[41.8px]">
            STOP YOUR HOUSE FROM FLOODING NOW
          </span>
          <img
            className="object-cover"
            alt="Arrow"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/frame-1000004672.svg"
          />
        </Button>

        <div className="flex items-center gap-[5px]">
          <div className="relative w-[95.22px] h-[16.65px]">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                className={`absolute w-4 h-[15px] top-0 left-[${index * 20}px]`}
                alt="Star"
                src="https://c.animaapp.com/m8fm62nptWwCJ9/img/star-3.svg"
              />
            ))}
          </div>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-base leading-[22.4px] whitespace-nowrap">
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
