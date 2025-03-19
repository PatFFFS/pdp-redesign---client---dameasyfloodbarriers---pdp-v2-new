import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Location data for mapping
const locationData = [
  { id: 1, name: "North America", top: "25px", left: "115px" },
  { id: 2, name: "Usa", top: "161px", left: "59px" },
  { id: 3, name: "Canada", top: "89px", left: "76px" },
  { id: 4, name: "South America", top: "314px", left: "187px" },
  { id: 5, name: "Brazil", top: "378px", left: "240px" },
  { id: 6, name: "Barcelona", top: "197px", left: "484px" },
  { id: 7, name: "Asia", top: "164px", left: "971px" },
  { id: 8, name: "Uk", top: "107px", left: "527px" },
  { id: 9, name: "Europe", top: "52px", left: "631px" },
  { id: 10, name: "India", top: "383px", left: "914px" },
  { id: 11, name: "Australia", top: "511px", left: "1030px" },
  { id: 12, name: "Manila", top: "260px", left: "1239px" },
];

// Heart icon positions for mapping
const heartPositions = [
  { top: "118px", left: "296px" },
  { top: "202px", left: "325px" },
  { top: "233px", left: "286px" },
  { top: "152px", left: "412px" },
  { top: "195px", left: "368px" },
  { top: "343px", left: "473px" },
  { top: "329px", left: "532px" },
  { top: "272px", left: "395px" },
  { top: "424px", left: "432px" },
  { top: "223px", left: "972px" },
  { top: "246px", left: "883px" },
  { top: "206px", left: "783px" },
  { top: "173px", left: "760px" },
  { top: "238px", left: "1026px" },
  { top: "174px", left: "1184px" },
  { top: "188px", left: "1239px" },
  { top: "282px", left: "1092px" },
  { top: "334px", left: "1129px" },
  { top: "337px", left: "1081px" },
  { top: "271px", left: "1069px" },
  { top: "262px", left: "1160px" },
  { top: "304px", left: "1179px" },
  { top: "425px", left: "1212px" },
  { top: "471px", left: "1378px" },
  { top: "225px", left: "1122px" },
  { top: "117px", left: "680px" },
  { top: "172px", left: "629px" },
  { top: "174px", left: "595px" },
  { top: "152px", left: "657px" },
  { top: "167px", left: "704px" },
  { top: "107px", left: "641px" },
  { top: "101px", left: "611px" },
  { top: "180px", left: "276px" },
];

// Vector paths for decorative elements
const vectorPaths = [
  {
    path: "https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-26-1.svg",
    width: "138px",
    height: "7px",
    top: "383px",
    left: "376px",
  },
  {
    path: "https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-31.svg",
    width: "104px",
    height: "23px",
    top: "334px",
    left: "382px",
  },
  {
    path: "https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-27.svg",
    width: "57px",
    height: "25px",
    top: "279px",
    left: "1181px",
  },
  {
    path: "https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-28.svg",
    width: "93px",
    height: "53px",
    top: "466px",
    left: "1122px",
  },
  {
    path: "https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-29.svg",
    width: "27px",
    height: "107px",
    top: "269px",
    left: "964px",
  },
  {
    path: "https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-30-1.svg",
    width: "60px",
    height: "30px",
    top: "147px",
    left: "589px",
  },
  {
    path: "https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-32.svg",
    width: "60px",
    height: "45px",
    top: "194px",
    left: "603px",
  },
  {
    path: "https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-26-2.svg",
    width: "78px",
    height: "25px",
    top: "108px",
    left: "216px",
  },
  {
    path: "https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-27-1.svg",
    width: "81px",
    height: "25px",
    top: "178px",
    left: "173px",
  },
];

// Rectangle images for the map
const rectangleImages = [
  {
    src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1406.png",
    width: "302px",
    height: "389px",
    top: "194px",
    left: "1198px",
  },
  {
    src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1377.png",
    width: "448px",
    height: "530px",
    top: "461px",
    left: "0",
  },
  {
    src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1401.png",
    width: "425px",
    height: "448px",
    top: "452px",
    left: "403px",
  },
  {
    src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1415.png",
    width: "322px",
    height: "404px",
    top: "210px",
    left: "0",
  },
];

export const LocationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[60px] py-[100px] relative w-full bg-[#f6f6f6]">
      <h2 className="text-[35px] font-bold text-black text-center tracking-[0] leading-[45.5px] font-['Ubuntu',Helvetica]">
        Trusted Worldwide: Dam Easy Saves Homes Everywhere
      </h2>

      <p className="w-full max-w-[901px] font-['Poppins',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[26px]">
        Flooding Knows No Borders, And Neither Do We. From Hurricanes In The
        U.s. To Flash Floods In Europe And Asia, Dam Easy Is Trusted By Families
        Around The Globe.
      </p>

      <div className="relative w-full max-w-[1330px] h-[751px]">
        <div className="relative w-full h-full">
          {/* World Map Background */}
          <div className="absolute inset-0">
            <div className="relative h-full">
              {/* Main map container with all the SVG elements */}
              <div className="relative w-full h-full">
                {/* Map background images */}
                <img
                  className="absolute w-[703px] h-[441px] top-0 left-0"
                  alt="World map background"
                  src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-13.png"
                />

                {/* Additional map elements */}
                <img
                  className="absolute w-[742px] h-[307px] top-0 left-0"
                  alt="Map overlay"
                  src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-57.png"
                />

                <img
                  className="absolute w-[677px] h-[360px] top-0 left-0"
                  alt="Map details"
                  src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-99.png"
                />

                {/* Rectangle images for different regions */}
                {rectangleImages.map((img, index) => (
                  <img
                    key={index}
                    className="absolute object-cover"
                    style={{
                      width: img.width,
                      height: img.height,
                      top: img.top,
                      left: img.left,
                    }}
                    alt="Map region"
                    src={img.src}
                  />
                ))}

                {/* Vector decorative elements */}
                {vectorPaths.map((vector, index) => (
                  <img
                    key={index}
                    className="absolute"
                    style={{
                      width: vector.width,
                      height: vector.height,
                      top: vector.top,
                      left: vector.left,
                    }}
                    alt="Vector decoration"
                    src={vector.path}
                  />
                ))}

                {/* Heart icons scattered across the map */}
                {heartPositions.map((pos, index) => (
                  <img
                    key={index}
                    className="absolute w-[41px] h-[41px]"
                    style={{ top: pos.top, left: pos.left }}
                    alt="Love"
                    src="https://c.animaapp.com/m8fm62nptWwCJ9/img/love-20.svg"
                  />
                ))}

                {/* Location tags */}
                {locationData.map((location) => (
                  <div
                    key={location.id}
                    className="inline-flex items-center justify-center gap-2 px-[23px] py-3 absolute bg-[#fff9cc] rounded-[64px] border border-solid border-[#ffbd3d]"
                    style={{ top: location.top, left: location.left }}
                  >
                    <div className="relative w-5 h-5">
                      <div className="relative w-3.5 h-5 left-[3px]">
                        <div className="relative h-5">
                          {/* Location pin icon elements */}
                          <img
                            className="absolute w-[7px] h-[7px] top-0 left-1.5"
                            alt="Vector"
                            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-444.svg"
                          />
                          <img
                            className="absolute w-[7px] h-[7px] top-0 left-[7px]"
                            alt="Vector"
                            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-453.svg"
                          />
                          <img
                            className="absolute w-[7px] h-[5px] top-0 left-0.5"
                            alt="Vector"
                            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-474.svg"
                          />
                          <img
                            className="absolute w-0.5 h-[3px] top-0 left-[7px]"
                            alt="Vector"
                            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-457.svg"
                          />
                          <img
                            className="absolute w-[5px] h-2 top-0.5 left-0"
                            alt="Vector"
                            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-447.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="font-['Ubuntu',Helvetica] font-normal text-[#264775] text-lg tracking-[0] leading-[19.8px] whitespace-nowrap">
                      {location.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="flex flex-col w-full max-w-[867px] items-center gap-[30px] border-none bg-transparent">
        <CardContent className="p-0 flex flex-col items-center gap-[30px]">
          <div className="inline-flex items-center gap-[5px]">
            <div className="relative w-[95.22px] h-[16.65px]">
              {[0, 1, 2, 3, 4].map((index) => (
                <img
                  key={index}
                  className="absolute w-4 h-[15px] top-0"
                  style={{ left: `${index * 20}px` }}
                  alt="Star"
                  src="https://c.animaapp.com/m8fm62nptWwCJ9/img/star-3.svg"
                />
              ))}
            </div>
            <p className="font-['Poppins',Helvetica] font-normal text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
              <span className="text-black">Rated 4.8/5 by </span>
              <span className="font-bold text-black">
                100+ Florida homeowners
              </span>
            </p>
          </div>

          <Button className="w-[490px] h-[57px] justify-center gap-4 px-8 py-[22px] bg-[#11d047] rounded-[100px] text-lg font-bold text-white font-['Urbane-DemiBold',Helvetica] hover:bg-[#0fb83e]">
            STOP YOUR HOUSE FROM FLOODING NOW
            <img
              className="object-cover"
              alt="Arrow"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/frame-1000004672.svg"
            />
          </Button>

          <p className="w-full max-w-[728px] font-['Poppins',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[23.4px]">
            Join a global community of homeowners who refuse to let rising water
            win.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
