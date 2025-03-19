import { CheckCircleIcon, StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const NavigationSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      title: "A Christmas Miracle",
      content:
        "\"This thing is excellent and the company has the best support. Last year Poseidon thought it would be funny to flood our home in the NY hudson valley with a 5.5' tidal surge on Christmas eve. Fortunately I had been following the forecast and had purchased the Dam Easy barrier a month prior.\nI had installed the barrier the night before in preparation and awoke to find 18\"+ of water up the side of my house and the barrier. Over the next 2-3 hours the the Dam Easy barrier worked perfectly in keeping the water from our basement and saved our Christmas. A true miracle!\nAs the tide subsided and our Dam Easy-less neighbors were pumped dry, a member of our local fire department asked if we needed our basement pumped out. I'm pretty sure he didn't believe me when I told him we were fine (likely thinking we were hiding a meth lab or something).\nI now keep my barrier ready with spare seals on hand just in case we experience a similar surge. Top marks Dam Easy!\"",
      author: "Gareth Smith",
      image: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-300-2.png",
      active: true,
    },
    {
      id: 2,
      title: "A Christmas Miracle",
      content:
        "\"This thing is excellent and the company has the best support. Last year Poseidon thought it would be funny to flood our home in the NY hudson valley with a 5.5' tidal surge on Christmas eve. Fortunately I had been following the forecast and had purchased the Dam Easy barrier a month prior.\nI had installed the barrier the night before in preparation and awoke to find 18\"+ of water up the side of my house and the barrier. Over the next 2-3 hours the the Dam Easy barrier worked perfectly in keeping the water from our basement and saved our Christmas. A true miracle!\nAs the tide subsided and our Dam Easy-less neighbors were pumped dry, a member of our local fire department asked if we needed our basement pumped out. I'm pretty sure he didn't believe me when I told him we were fine (likely thinking we were hiding a meth lab or something).\"",
      author: "Gareth Smith",
      image: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-300-1.png",
      active: false,
    },
    {
      id: 3,
      title: "A Christmas Miracle",
      content:
        "\"This thing is excellent and the company has the best support. Last year Poseidon thought it would be funny to flood our home in the NY hudson valley with a 5.5' tidal surge on Christmas eve. Fortunately I had been following the forecast and had purchased the Dam Easy barrier a month prior.\nI had installed the barrier the night before in preparation and awoke to find 18\"+ of water up the side of my house and the barrier. Over the next 2-3 hours the the Dam Easy barrier worked perfectly in keeping the water from our basement and saved our Christmas. A true miracle!\nAs the tide subsided and our Dam Easy-less neighbors were pumped dry, a member of our local fire department asked if we needed our basement pumped out. I'm pretty sure he didn't believe me when I told him we were fine (likely thinking we were hiding a meth lab or something).\nI now keep my barrier ready with spare seals on hand just in case we experience a similar surge. Top marks Dam Easy!\"",
      author: "Gareth Smith",
      image: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-300-3.png",
      active: false,
    },
  ];

  // Pagination dots data
  const paginationDots = [
    { active: false },
    { active: false },
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] py-[100px] bg-white w-full">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-[31px] max-w-[1044px]">
        {/* Rating */}
        <div className="inline-flex items-center gap-[5px]">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <StarIcon
                key={index}
                className="w-4 h-[15px] text-yellow fill-yellow"
                strokeWidth={0}
              />
            ))}
          </div>
          <p className="font-normal text-base leading-[22.4px] [font-family:'Poppins',Helvetica]">
            <span>Rated 4.8/5 by </span>
            <span className="font-bold">100+ Florida homeowners</span>
          </p>
        </div>

        {/* Title */}
        <h2 className="text-[35px] font-bold text-center leading-[38.5px] [font-family:'Ubuntu',Helvetica]">
          Real Stories: How Dam Easy Saved Homes Worldwide
        </h2>

        {/* Subtitle */}
        <p className="max-w-[908px] text-xl text-center leading-[26px] [font-family:'Poppins',Helvetica]">
          Flooding knows no borders, and neither do we. From Florida hurricanes
          to European floods, Dam Easy is trusted to protect homes around the
          globe.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="flex flex-col items-center gap-10 w-full">
        <Carousel className="w-full max-w-[1093px]">
          <CarouselContent className="flex items-center">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="flex justify-center"
              >
                <Card
                  className={`inline-flex items-center gap-[30px] p-[30px] rounded-[10px] border border-solid border-[#0000001a] ${!testimonial.active ? "opacity-40" : ""}`}
                >
                  <img
                    className="h-[458px] w-auto object-cover"
                    alt="Customer home"
                    src={testimonial.image}
                  />
                  <CardContent className="flex flex-col w-[472px] items-start gap-5 p-0">
                    {/* StarIcon Rating */}
                    <div className="flex gap-[3px]">
                      {[1, 2, 3, 4, 5].map((_, index) => (
                        <StarIcon
                          key={index}
                          className="w-3 h-[11px] text-yellow fill-yellow"
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <div className="[font-family:'Poppins',Helvetica] font-normal text-[21px] leading-[29.4px]">
                      <span className="font-bold text-black block">
                        {testimonial.title}
                      </span>
                      <span className="text-black text-sm leading-[19.6px] block whitespace-pre-line">
                        {testimonial.content}
                      </span>
                    </div>

                    {/* Author and Verification */}
                    <div className="flex items-center justify-between w-full">
                      <div className="font-semibold text-sm [font-family:'Poppins',Helvetica]">
                        {testimonial.author}
                      </div>
                      <div className="flex items-center gap-[5px]">
                        <CheckCircleIcon className="w-3 h-3 text-[#11d047]" />
                        <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xs leading-[15.6px]">
                          Verified Customers
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="w-[70px] h-[70px] rounded-full border-2 border-solid border-[#264775] bg-white absolute left-0 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="w-[70px] h-[70px] rounded-full border border-solid border-[#264775] bg-yellow absolute right-0 top-1/2 transform -translate-y-1/2" />
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2.5">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`w-[15.15px] h-[15.15px] rounded-[7.57px] ${dot.active ? "bg-[#1a638f]" : "bg-[#d9d9d9]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
