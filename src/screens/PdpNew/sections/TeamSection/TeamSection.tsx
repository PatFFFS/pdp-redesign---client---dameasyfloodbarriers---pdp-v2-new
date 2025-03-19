import { ArrowRightIcon, HomeIcon, UsersIcon, WalletIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const TeamSection = (): JSX.Element => {
  const benefitItems = [
    {
      icon: <HomeIcon className="w-6 h-6 text-white" />,
      boldText: "Safeguard your home",
      text: " in just 5 minutes—no tools, no hassle.",
    },
    {
      icon: <WalletIcon className="w-6 h-6 text-white" />,
      boldText: "Avoid costly flood",
      text: " damage with a reusable, reliable solution.",
    },
    {
      icon: <UsersIcon className="w-6 h-6 text-white" />,
      boldText: "Join thousands of families",
      text: " worldwide who trust Dam Easy to keep their homes safe and dry.",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-between bg-[#264775]">
        <div className="flex flex-col w-full lg:w-[590px] items-start gap-[29px] p-8 lg:pl-[106px]">
          <h2 className="font-['Ubuntu',Helvetica] font-bold text-[35px] leading-[38.5px] tracking-[0]">
            <span className="text-white">Take Control—</span>
            <span className="text-[#ffeb3d]">Protect Your HomeIcon Now</span>
          </h2>

          <div className="flex flex-col items-start gap-[11px] w-full">
            <p className="font-['Poppins',Helvetica] font-normal text-white text-[22px] leading-[28.6px] tracking-[0]">
              Floods Don&apos;t Wait, And Neither Should You. Take The First
              Step Toward Total Flood Protection With Dam Easy And Enjoy The
              Peace Of Mind You Deserve.
            </p>

            <div className="flex items-start w-full">
              <div className="flex flex-col items-start gap-[23px]">
                {benefitItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {item.icon}
                    <div className="font-['Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[20.8px]">
                      <span className="font-bold">{item.boldText}</span>
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button className="h-[57px] px-8 py-[22px] bg-[#11d047] rounded-[100px] hover:bg-[#0fb83e]">
            <span className="font-['Urbane-DemiBold',Helvetica] font-bold text-white text-lg text-center tracking-[0] leading-[41.8px] whitespace-nowrap">
              ORDER NOW AND BE READY BEFORE THE NEXT STORM
            </span>
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex items-center gap-[5px]">
            <div className="relative w-[95.22px] h-[16.65px]">
              {[0, 20, 40, 59, 79].map((left, index) => (
                <img
                  key={index}
                  className={`w-4 h-[15px] absolute top-0 left-[${left}px]`}
                  alt="Star"
                  src="https://c.animaapp.com/m8fm62nptWwCJ9/img/star-3.svg"
                />
              ))}
            </div>
            <div className="text-white font-['Poppins',Helvetica] font-normal text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
              <span>Rated 4.8/5 by </span>
              <span className="font-bold">100+ Florida homeowners</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto">
          <img
            className="w-full lg:w-[689px] h-auto lg:h-[772px] object-cover"
            alt="Dam Easy Flood Protection"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-1377.png"
          />
        </div>
      </div>
    </div>
  );
};
