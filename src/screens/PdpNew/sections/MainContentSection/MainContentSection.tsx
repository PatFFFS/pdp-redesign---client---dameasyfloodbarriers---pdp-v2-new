import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    title: "Quick And Simple Setup:",
    icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/timer-1.png",
    points: [
      {
        heading: "Rapid Deployment:",
        text: " Set up Dam Easy barriers in minutes – no heavy lifting required, unlike traditional sandbags.",
      },
      {
        heading: "Effortless Installation:",
        text: " Skip the back-breaking work! Installation of our barriers is straightforward and user-friendly.",
      },
    ],
  },
  {
    title: "Advanced Protection:",
    icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/group-6.png",
    isImage: false,
    points: [
      {
        heading: "Superior Sealing:",
        text: " Our patented seal technology outperforms leaky traditional methods so every inch of your property stays dry.",
      },
      {
        heading: "Flexible Coverage:",
        text: "Seamlessly connect multiple barriers to fit any space to get more flexible protection than rigid and impractical flood panels.",
      },
    ],
  },
  {
    title: "Discreet And Practical:",
    icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/settings-1.svg",
    isImage: true,
    points: [
      {
        heading: "Unobtrusive Storage:",
        text: "Store easily without permanently altering your home's appearance and turning it into an eyesore.",
      },
      {
        heading: "Fast Deployment:",
        text: " Flood waters rising fast? Dam Easy barriers take only a few minutes to deploy.",
      },
    ],
  },
  {
    title: "Economical And Sustainable:",
    icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/group-1484580500-1.png",
    isImage: true,
    points: [
      {
        heading: "Reusable and Durable:",
        text: " Use Dam Easy season after season, reducing waste and costs associated with single-use alternatives.",
      },
      {
        heading: "Low Maintenance:",
        text: " Forget the upkeep of pumps or drains—set up Dam Easy and relax, with no additional costs involved.",
      },
    ],
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[50px] py-[90px] bg-[#264775] w-full">
      <h2 className="w-full max-w-[912px] font-['Ubuntu',Helvetica] font-bold text-[35px] text-center leading-[45.5px]">
        <span className="text-white">See Dam Easy in Action-</span>{" "}
        <span className="text-[#ffeb3d]">Proof You Can Trust</span>
      </h2>

      <div className="flex items-center justify-center w-full">
        <div className="flex flex-wrap max-w-[1200px] gap-[45px]">
          <div className="flex flex-col gap-[45px] max-w-[773px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px]">
              {features.slice(0, 2).map((feature, index) => (
                <Card
                  key={index}
                  className="bg-transparent border-none shadow-none"
                >
                  <CardContent className="p-0 flex flex-col gap-[15px]">
                    <div className="flex items-center gap-3.5">
                      {feature.isImage ? (
                        <img
                          className="w-10 h-[47.6px]"
                          alt={feature.title}
                          src={feature.icon}
                        />
                      ) : (
                        <div
                          className="w-[50px] h-[49.9px] bg-cover bg-center"
                          style={{ backgroundImage: `url(${feature.icon})` }}
                        />
                      )}
                      <h3 className="font-['Ubuntu',Helvetica] font-bold text-white text-[22px] leading-[24.2px] whitespace-nowrap">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-5">
                      {feature.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="w-[350px] font-['Poppins',Helvetica] text-sm"
                        >
                          <span className="font-bold text-white leading-[21px]">
                            {point.heading}
                          </span>
                          <span className="text-white leading-[21px]">
                            {point.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[70px] max-w-[364px]">
            {features.slice(2, 4).map((feature, index) => (
              <Card
                key={index}
                className="bg-transparent border-none shadow-none"
              >
                <CardContent className="p-0 flex flex-col gap-[15px]">
                  <div className="flex items-center gap-3.5">
                    <img
                      className="w-11 h-11"
                      alt={feature.title}
                      src={feature.icon}
                    />
                    <h3 className="font-['Ubuntu',Helvetica] font-bold text-white text-[22px] leading-[24.2px] whitespace-nowrap">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5">
                    {feature.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="w-full max-w-[400px] font-['Poppins',Helvetica] text-sm"
                      >
                        <span className="font-bold text-white leading-[21px]">
                          {point.heading}
                        </span>
                        <span className="text-white leading-[21px]">
                          {point.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div
          className="hidden lg:flex flex-col items-center justify-center h-[446px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://c.animaapp.com/m8fm62nptWwCJ9/img/frame-1484580501.png)",
          }}
        >
          <div className="relative w-[167.44px] h-[152px] overflow-hidden">
            <div className="relative w-[167px] h-[152px]">
              <div className="absolute w-[167px] h-[152px] top-0 left-0">
                <div className="h-[152px]">
                  <div className="w-[167px] h-[152px]">
                    <div className="relative h-[152px]">
                      <div className="absolute w-[167px] h-[31px] top-[89px] left-0">
                        <img
                          className="absolute w-7 h-[31px] top-0 left-[140px]"
                          alt="Group"
                          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-8.png"
                        />
                        <img
                          className="absolute w-7 h-[31px] top-0 left-0"
                          alt="Group"
                          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-9.png"
                        />
                      </div>
                      <div
                        className="absolute w-[126px] h-[152px] top-0 left-[21px] bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url(https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-2.svg)",
                        }}
                      >
                        <div
                          className="relative w-[115px] h-[140px] top-1.5 left-[5px] bg-cover bg-center"
                          style={{
                            backgroundImage:
                              "url(https://c.animaapp.com/m8fm62nptWwCJ9/img/group-10.png)",
                          }}
                        >
                          <img
                            className="absolute w-[111px] h-[136px] top-0.5 left-0.5"
                            alt="Vector"
                            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-8.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="absolute w-[140px] h-[33px] top-[81px] left-3.5"
                        alt="Vector"
                        src="https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-9.svg"
                      />
                      <img
                        className="absolute w-[51px] h-[7px] top-5 left-[58px]"
                        alt="Group"
                        src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-7.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute w-[98px] h-[23px] top-[46px] left-[35px] object-cover"
                alt="Image"
                src="https://c.animaapp.com/m8fm62nptWwCJ9/img/image-16-2.png"
              />
              <div className="absolute top-[84px] left-[22px] font-['Koulen',Helvetica] font-normal text-white text-[32.3px] leading-[35.5px] whitespace-nowrap">
                Innovation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
