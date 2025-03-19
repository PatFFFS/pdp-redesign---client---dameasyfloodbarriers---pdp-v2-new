import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for statistics to enable mapping
const statistics = [
  {
    icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/agreement-02.svg",
    value: "21+",
    label: "Official Partners",
  },
  {
    icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/happy.svg",
    value: "1000+",
    label: "Happy Customers",
  },
  {
    icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/maps-global-02.svg",
    value: "30+",
    label: "Countries",
  },
];

// Data for certification points to enable mapping
const certificationPoints = [
  "Verified To Comply With Europe's Toughest Flood Protection Requirements.",
  "Engineered To Handle Extreme Water Pressure And Prolonged Exposure To Flooding.",
];

export const MapSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[60px] py-[100px] bg-[#264775]">
      <div className="flex flex-wrap items-center justify-center gap-20 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-[28.35px]">
          <div className="relative w-[354.41px] h-[347.75px] bg-[url(https://c.animaapp.com/m8fm62nptWwCJ9/img/image-33.png)] bg-cover bg-[50%_50%]" />
        </div>

        <div className="flex flex-col items-start gap-10 max-w-xl">
          <div className="flex flex-col items-start gap-8">
            <h2 className="w-full font-['Ubuntu',Helvetica] font-bold text-[35px] leading-[45.5px]">
              <span className="text-white">
                Certified to Protect—Tested for{" "}
              </span>
              <span className="text-[#ffeb3d]">Reliability</span>
            </h2>

            <p className="font-['Poppins',Helvetica] font-normal text-white text-base leading-[20.8px]">
              When it comes to protecting your home, there&apos;s no margin for
              error.
            </p>

            <div className="flex flex-col items-start gap-5">
              {certificationPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-[15px]">
                  <CheckIcon className="text-yellow text-lg" />
                  <p className="w-[429px] font-['Poppins',Helvetica] font-normal text-white text-base leading-[20.8px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="bg-transparent border-0">
                <CardContent className="flex items-center gap-3 p-0">
                  <img
                    className="w-[52px] h-[52px]"
                    alt={stat.label}
                    src={stat.icon}
                  />
                  <div className="flex flex-col w-[127px] items-start gap-4">
                    <div className="self-stretch font-['Poppins',Helvetica] font-semibold text-white text-2xl leading-[31.2px]">
                      {stat.value}
                    </div>
                    <div className="self-stretch font-['Poppins',Helvetica] font-normal text-white text-base leading-[20.8px]">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
