import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { BlogSection } from "./sections/BlogSection";
import { ContactSection } from "./sections/ContactSection";
import { FAQSection } from "./sections/FAQSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { LocationSection } from "./sections/LocationSection/LocationSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MapSection } from "./sections/MapSection/MapSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PricingSection } from "./sections/PricingSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const PdpNew = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    "Calculator",
    "Main Shop",
    "Accessories",
    "Product Videos",
    "Become A Dealer",
    "Reviews",
    "Support Links",
    "Contact Us",
  ];

  // Feature items that appear in both top and bottom feature bars
  const featureItems = [
    {
      icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/security-1.svg",
      text: "Secure Your Property",
    },
    {
      icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-538.svg",
      text: "Deploy In Under 5 minutes",
    },
    {
      icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/group.png",
      text: "Worldwide Shipping!",
      isBackgroundImage: true,
    },
    {
      icon: "https://c.animaapp.com/m8fm62nptWwCJ9/img/star-1-9.svg",
      text: "Award Winning Innovation",
    },
  ];

  // Partner logos
  const partnerLogos = [
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/image-16-1.png",
      width: "190.04px",
      height: "46.71px",
      alt: "Partner logo 1",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/image-22.png",
      width: "113.6px",
      height: "47.78px",
      alt: "Partner logo 2",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/image-28.png",
      width: "94.49px",
      height: "59.46px",
      alt: "Partner logo 3",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/image-30.png",
      width: "127.4px",
      height: "55.21px",
      alt: "Partner logo 4",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/image-31.png",
      width: "84px",
      height: "71px",
      alt: "Partner logo 5",
    },
  ];

  return (
    <div className="flex flex-col items-center relative bg-white">
      {/* Promotional banner */}
      <div className="flex w-full max-w-[1500px] items-center justify-center gap-2.5 p-2.5 relative bg-yellow">
        <div className="relative w-fit mt-[-1.00px] font-['Poppins',Helvetica] font-bold text-[#264775] text-base text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
          Limited time offer – Save $100 on Dam Easy Flood Barriers when you
          order today
        </div>
      </div>

      {/* Header navigation */}
      <div className="flex w-full max-w-[1500px] items-center justify-center gap-[60px] px-0 py-[15px] relative">
        <img
          className="relative w-[216px] h-[49px] object-cover"
          alt="Company logo"
          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/image-16-2.png"
        />

        <nav className="flex w-[924px] items-start gap-[30px] relative">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="relative w-fit mt-[-1.00px] font-['Poppins',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-[18.2px] whitespace-nowrap hover:text-[#264775] transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <ShoppingCartIcon className="relative w-[25px] h-[25px]" />
      </div>

      {/* Feature bar - top */}
      <div className="flex w-full max-w-[1500px] items-center justify-center gap-[93px] px-0 py-2.5 relative bg-[#264775]">
        {featureItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center gap-[15px] relative flex-[0_0_auto]"
          >
            {item.isBackgroundImage ? (
              <div
                className="relative w-[30px] h-[30px]"
                style={{
                  backgroundImage: `url(${item.icon})`,
                  backgroundSize: "100% 100%",
                }}
              />
            ) : (
              <img
                className="relative w-[30px] h-[30px]"
                alt={`Feature icon ${index + 1}`}
                src={item.icon}
              />
            )}
            <div className="relative w-fit font-['Poppins',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* Main content sections */}
      <HeroSection />

      {/* Partners section */}
      <div className="flex flex-col w-full max-w-[1500px] items-center gap-[30px] px-0 py-[60px] relative bg-[#f6f6f6]">
        <h2 className="relative w-fit mt-[-1.00px] font-['Ubuntu',Helvetica] font-bold text-black text-[22px] text-center tracking-[0] leading-[28.6px] whitespace-nowrap">
          Protecting Homes And Businesses Across Florida, Including…
        </h2>

        <div className="flex w-[1046px] items-center justify-between relative">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              className="relative"
              style={{ width: logo.width, height: logo.height }}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>

      {/* All other sections in order */}
      <PricingSection />
      <MainContentSection />
      <TestimonialsSection />
      <FeaturesSection />
      <NavigationSection />
      <ServicesSection />
      <LocationSection />
      <MapSection />
      <GallerySection />
      <AboutUsSection />
      <ContactSection />
      <BlogSection />
      <FAQSection />
      <TeamSection />

      {/* Feature bar - bottom (white background) */}
      <div className="w-full max-w-[1500px] items-center justify-center gap-[93px] px-0 py-2.5 bg-white flex relative">
        {featureItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center gap-[15px] relative flex-[0_0_auto]"
          >
            {item.isBackgroundImage ? (
              <div
                className="relative w-[30px] h-[30px]"
                style={{
                  backgroundImage:
                    index === 2
                      ? "url(https://c.animaapp.com/m8fm62nptWwCJ9/img/group-189.png)"
                      : `url(${item.icon})`,
                  backgroundSize: "100% 100%",
                }}
              />
            ) : (
              <img
                className="relative w-[30px] h-[30px]"
                alt={`Feature icon ${index + 1}`}
                src={item.icon}
              />
            )}
            <div
              className={`relative font-['Poppins',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[22.4px] ${index === 1 ? "w-[222px]" : "w-fit whitespace-nowrap"}`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* Footer image */}
      <img
        className="relative w-full max-w-[1500px] h-[454px] object-cover"
        alt="Footer image"
        src="https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2025-01-02-at-4-15-38-pm-1.png"
      />
    </div>
  );
};
