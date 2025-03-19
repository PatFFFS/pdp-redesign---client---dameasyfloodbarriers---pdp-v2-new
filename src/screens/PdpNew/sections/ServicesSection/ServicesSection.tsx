import { AwardIcon, ClockIcon, GlobeIcon, SettingsIcon } from "lucide-react";
import React from "react";

export const ServicesSection = (): JSX.Element => {
  // Data for service features to enable mapping
  const features = [
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "5-Minute Setup",
      description:
        ": Protect your home in minutes—no tools, no mess, no stress.",
    },
    {
      icon: <AwardIcon className="w-6 h-6" />,
      title: "Patented Seal Technology",
      description:
        ": Zero seepage, even in the heaviest storms, tested to withstand toughest pressure.",
    },
    {
      icon: <SettingsIcon className="w-6 h-6" />,
      title: "Custom Fit",
      description:
        ": Adjustable for all openings, from doors to garages, no matter the size or shape.",
    },
    {
      icon: <GlobeIcon className="w-6 h-6" />,
      title: "Global Proven Performance",
      description:
        ": Trusted in over 32 countries, protecting homes during hurricanes, flash floods, and prolonged storms.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] py-[100px] w-full bg-[#264775]">
      <div className="flex flex-wrap items-center justify-center gap-[116px] max-w-[1500px]">
        {/* Image gallery */}
        <div className="flex flex-col items-center justify-center gap-5 py-[100px]">
          <div className="flex items-center gap-[30px] mb-5">
            <img
              className="w-[281px] h-[317px]"
              alt="Dam Easy product illustration"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1392.svg"
            />
            <img
              className="w-[282px] h-[317px] object-cover"
              alt="Dam Easy product in use"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1395.png"
            />
          </div>
          <img
            className="w-[587px] h-[329px] object-cover"
            alt="Dam Easy product installation"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1394.png"
          />
        </div>

        {/* Content section */}
        <div className="flex flex-col items-start gap-[37px] max-w-[571px]">
          <h2 className="w-full font-['Ubuntu',Helvetica] font-bold text-[35px] leading-[38.5px]">
            <span className="text-white">Here&apos;s why thousands </span>
            <span className="text-[#ffeb3d]">trust Dam Easy</span>
          </h2>

          <p className="font-['Poppins',Helvetica] font-normal text-white text-base leading-[20.8px] max-w-[527px]">
            When floods threaten your home, you need more than hope. You need a
            proven solution that works—every time.
          </p>

          <div className="flex flex-col items-start gap-[23px]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-[9px]">
                {feature.icon}
                <div className="font-['Poppins',Helvetica] text-base leading-[20.8px] max-w-[525px]">
                  <span className="font-bold text-white">{feature.title}</span>
                  <span className="text-white">{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
