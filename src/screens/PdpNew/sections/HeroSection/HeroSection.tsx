import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  LockIcon,
  MinusIcon,
  PlusIcon,
  SettingsIcon,
  TimerIcon,
  TruckIcon,
} from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const HeroSection = (): JSX.Element => {
  // Product features data
  const productFeatures = [
    {
      icon: <SettingsIcon className="w-[50px] h-[50px] text-[#264775]" />,
      title: "Discreet\n& Practical",
    },
    {
      icon: <TimerIcon className="w-[50px] h-[50px] text-[#264775]" />,
      title: "Quick &\nsimple Setup",
    },
    {
      icon: (
        <img
          className="w-[50.5px] h-[50.5px]"
          alt="Economical & Sustainable"
          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-1484580500.png"
        />
      ),
      title: "Economical\n& Sustainable",
    },
    {
      icon: (
        <div className="relative w-[42.01px] h-[50px] bg-[url(https://c.animaapp.com/m8fm62nptWwCJ9/img/group-5.png)] bg-[100%_100%]" />
      ),
      title: "Advanced\nprotection",
    },
  ];

  // Shipping features data
  const shippingFeatures = [
    {
      icon: <TruckIcon className="w-[54.66px] h-[54.66px] text-[#264775]" />,
      title: "Ships in 24 Hours",
    },
    {
      icon: (
        <img
          className="w-[54.66px] h-[54.66px]"
          alt="Configuration"
          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/configuration-01.svg"
        />
      ),
      title: "Full setup Assistance",
    },
    {
      icon: <LockIcon className="w-[54.66px] h-[54.66px] text-[#264775]" />,
      title: "Secure checkout",
    },
  ];

  // Frequently bought together items
  const frequentlyBoughtItems = [
    {
      image:
        "https://c.animaapp.com/m8fm62nptWwCJ9/img/dam-easy-replacement-seal-05-min-100x1002-1.png",
      title: "Replacement Seal",
      price: "$10",
    },
    {
      image:
        "https://c.animaapp.com/m8fm62nptWwCJ9/img/dam-easy-extension-pole-04-min-100x1002-1.png",
      title: "Extension Seal",
      price: "$350",
    },
  ];

  // Popular bundles data
  const popularBundles = [
    {
      image: (
        <div className="relative w-[103px] h-[53px] top-2">
          <div className="relative h-[53px]">
            <img
              className="absolute w-[49px] h-[47px] top-px left-1.5"
              alt="Untitleddesign"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/untitleddesign-25-photoroom-4.png"
            />
            <img
              className="absolute w-[49px] h-[47px] top-px left-[49px]"
              alt="Untitleddesign"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/untitleddesign-25-photoroom-5.png"
            />
            <img
              className="absolute w-2.5 h-[49px] top-px left-[93px]"
              alt="Image"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/image-42.png"
            />
            <img
              className="absolute w-2.5 h-[49px] top-px left-0"
              alt="Image"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/image-43.png"
            />
            <img
              className="absolute w-2.5 h-[53px] top-0 left-[47px]"
              alt="Image"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/image-41.png"
            />
          </div>
        </div>
      ),
      title: "Single garage",
      description: "2 barriers, 2 poles & 1 mini",
      regularPrice: "$899.99",
      salePrice: "$699.99",
      badge: "DISCOUNTED BUNDLES",
      badgeColor: "bg-[#deeafb]",
    },
    {
      image: (
        <img
          className="w-[105.38px] h-[66.9px]"
          alt="Group"
          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-1484580555.png"
        />
      ),
      title: "Double garage",
      description: "5 barriers 4 poles",
      regularPrice: "$899.99",
      salePrice: "$699.99",
      badge: "BEST VALUE",
      badgeColor: "bg-[#ffeb3d]",
    },
    {
      image: (
        <div className="relative w-[103px] h-[59px]">
          <img
            className="absolute w-[55px] h-[53px] top-0.5 left-0"
            alt="Untitleddesign"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/untitleddesign-25-photoroom-4-1.png"
          />
          <img
            className="absolute w-[55px] h-[53px] top-0.5 left-[49px]"
            alt="Untitleddesign"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/untitleddesign-25-photoroom-5-1.png"
          />
          <img
            className="w-[11px] h-[59px] left-[46px] absolute top-0"
            alt="Image"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/image-41-1.png"
          />
        </div>
      ),
      title: "Double door",
      description: "2 barriers 1 pole",
      regularPrice: "$899.99",
      salePrice: "$699.99",
      badge: "DISCOUNTED BUNDLES",
      badgeColor: "bg-[#deeafb]",
    },
    {
      image: (
        <img
          className="w-24 h-[61px]"
          alt="Untitleddesign"
          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/untitleddesign-25-photoroom-2.png"
        />
      ),
      title: "1 Flood Barrier",
      description: "Only 1 Barrier",
      regularPrice: "$899.99",
      salePrice: "$699.99",
      badge: "",
      badgeColor: "",
    },
  ];

  // Thumbnail images
  const thumbnailImages = [
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/dam-easy-flood-barrier-05-min2.png",
      alt: "Dam easy flood barrier thumbnail",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/dam-easy-flood-barrier-12-min.png",
      alt: "Dam easy flood barrier thumbnail",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/dam-easy-flood-barrier-01-min.png",
      alt: "Dam easy flood barrier thumbnail",
    },
    {
      src: "https://c.animaapp.com/m8fm62nptWwCJ9/img/dam-easy-flood-barrier-02-min2.png",
      alt: "Dam easy flood barrier thumbnail",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-[100px] py-[60px] px-4 md:px-0 w-full bg-white">
      {/* Left Column - Product Images and Features */}
      <div className="flex flex-col items-start gap-4 w-full md:w-[610px]">
        {/* Main Product Image */}
        <div className="relative w-full h-[600px] bg-[url(https://c.animaapp.com/m8fm62nptWwCJ9/img/dam-easy-flood-barrier-04-min-grande.svg)] bg-cover bg-center">
          <div className="relative h-full bg-[url(https://c.animaapp.com/m8fm62nptWwCJ9/img/dam-easy-flood-barrier-04-min-grande-1.svg)] bg-cover">
            {/* Innovation Badge */}
            <div className="absolute w-[167px] h-[152px] top-12 left-[55px] overflow-hidden">
              <div className="relative h-[152px]">
                <div className="absolute w-[167px] h-[152px] top-0 left-0">
                  <div className="h-[152px]">
                    <div className="w-[167px] h-[152px]">
                      <div className="relative h-[152px]">
                        <div className="absolute w-[167px] h-[31px] top-[89px] left-0">
                          <img
                            className="absolute w-7 h-[31px] top-0 left-[140px]"
                            alt="Group"
                            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-2.png"
                          />
                          <img
                            className="absolute w-7 h-[31px] top-0 left-0"
                            alt="Group"
                            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-3.png"
                          />
                        </div>
                        <div className="absolute w-[126px] h-[152px] top-0 left-[21px] bg-[url(https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-2.svg)] bg-[100%_100%]">
                          <div className="relative w-[115px] h-[140px] top-1.5 left-[5px] bg-[url(https://c.animaapp.com/m8fm62nptWwCJ9/img/group-4.png)] bg-[100%_100%]">
                            <img
                              className="absolute w-[111px] h-[136px] top-0.5 left-0.5"
                              alt="Vector"
                              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/vector-1.svg"
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
                          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-1.png"
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
                <div className="absolute top-[84px] left-[22px] [font-family:'Koulen',Helvetica] font-normal text-white text-[32.3px] tracking-[0] leading-[35.5px] whitespace-nowrap">
                  Innovation
                </div>
              </div>
            </div>

            {/* Product Features */}
            <div className="inline-flex items-start gap-10 absolute top-[469px] left-[38px]">
              {productFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col items-center justify-center gap-3.5 relative"
                >
                  {feature.icon}
                  <div className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#264775] text-lg text-center tracking-[0] leading-[19.8px] whitespace-pre-line">
                    {feature.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex w-[568px] items-center justify-between absolute top-[275px] left-[21px]">
              <Button
                variant="outline"
                size="icon"
                className="w-[50px] h-[50px] rounded-full border-2 border-[#264775] bg-white rotate-180"
              >
                <ArrowLeftIcon className="h-[12.9px] w-[17px]" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-[50px] h-[50px] rounded-full border border-[#264775] bg-[#ffeb3d]"
              >
                <ArrowRightIcon className="h-[12.9px] w-[17px]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="flex w-full items-start gap-2.5">
          {thumbnailImages.map((image, index) => (
            <div
              key={index}
              className="relative w-[145px] h-[145px] bg-[#deeafb] rounded-[5px] border border-solid overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                alt={image.alt}
                src={image.src}
              />
            </div>
          ))}
        </div>

        {/* Shipping Features */}
        <div className="inline-flex items-center gap-[21.67px] w-full">
          {shippingFeatures.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="inline-flex flex-col items-center justify-center gap-2">
                {feature.icon}
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-[#264775] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                  {feature.title}
                </div>
              </div>
              {index < shippingFeatures.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-[25.38px] w-[1.06px]"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Customer Review Card */}
        <Card className="w-full bg-[#f6f6f6] rounded-[5px] overflow-hidden">
          <CardContent className="flex gap-[19px] items-center p-6">
            <img
              className="w-[161px] h-[161px]"
              alt="Customer"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/rectangle-300.png"
            />
            <div className="flex flex-col w-full items-start justify-center gap-[21px]">
              <img
                className="relative"
                alt="Rating"
                src="https://c.animaapp.com/m8fm62nptWwCJ9/img/frame-1484580579.svg"
              />
              <div className="flex flex-col w-full items-start justify-center gap-2">
                <p className="[font-family:'Poppins',Helvetica] text-sm leading-[19.6px]">
                  <span className="font-bold text-black">
                    Quick Delivery / Quick Install
                    <br />
                  </span>
                  <span className="text-black">
                    I have installed the new seal on my Barrier. It was
                    extremely easy to install. I...
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-5">
                <div className="[font-family:'Poppins',Helvetica] font-semibold text-black text-sm whitespace-nowrap">
                  Doug Jones
                </div>
                <div className="flex items-center gap-[9px]">
                  <div className="text-[#11d047] text-xs leading-[15.6px] [font-family:'Font_Awesome_6_Free-Solid',Helvetica]">
                    CheckIcon-circle
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] text-black text-xs leading-[15.6px] whitespace-nowrap">
                    Verified Customers
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Frequently Bought Together */}
        <div className="flex flex-col w-full items-start gap-5">
          <h3 className="[font-family:'Ubuntu',Helvetica] font-bold text-black text-lg leading-[19.8px]">
            Frequently bought together with:
          </h3>
          <div className="flex flex-col items-start gap-2.5 w-full">
            {frequentlyBoughtItems.map((item, index) => (
              <Card
                key={index}
                className="flex h-[82px] items-center justify-between px-5 py-0 w-full bg-white rounded-[10px] border border-[#d7dfe6]"
              >
                <CardContent className="flex items-center justify-between w-full p-0">
                  <img
                    className="w-[70px] h-[70px] object-cover"
                    alt={item.title}
                    src={item.image}
                  />
                  <div className="flex w-[248px] items-center justify-between">
                    <div className="[font-family:'Poppins',Helvetica] text-black text-base whitespace-nowrap">
                      {item.title}
                    </div>
                    <div className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base whitespace-nowrap">
                      {item.price}
                    </div>
                  </div>
                  <Button className="w-28 bg-[#264775] rounded-[100px] text-white">
                    +ADD
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Product Information */}
      <div className="flex flex-col w-full md:w-[574px] items-center justify-center gap-6">
        {/* Product Rating and Title */}
        <div className="flex flex-col w-full items-center justify-center gap-5">
          <div className="flex flex-col items-start justify-center gap-6 w-full">
            {/* Rating */}
            <div className="inline-flex items-center gap-[5px]">
              <div className="relative w-[95.22px] h-[16.65px]">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className={`absolute w-4 h-[15px] top-0 left-${i * 5}`}
                    alt="Star"
                    src="https://c.animaapp.com/m8fm62nptWwCJ9/img/star-3.svg"
                  />
                ))}
              </div>
              <div className="[font-family:'Poppins',Helvetica] text-base leading-[22.4px] whitespace-nowrap">
                <span className="text-black">Rated 4.8/5 by </span>
                <span className="font-bold text-black">
                  100+ Florida homeowners
                </span>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="[font-family:'Ubuntu',Helvetica] font-bold text-black text-[32px] leading-[35.2px]">
              Protecting Your Home From Floods Has Never Been So Dam Easy!
            </h1>

            {/* Product Description */}
            <p className="[font-family:'Poppins',Helvetica] text-black text-base leading-[20.8px]">
              Keep calm and stay dry with our 5-minute-deployment flood
              barriers.
            </p>

            {/* Pricing */}
            <div className="flex items-center gap-2.5">
              <span className="[font-family:'Poppins',Helvetica] text-black text-lg line-through">
                $899.99
              </span>
              <span className="[font-family:'Poppins',Helvetica] font-bold text-black text-lg">
                $699.99
              </span>
              <Badge className="w-28 p-2.5 bg-[#de2929] rounded-[100px] text-white font-bold text-sm">
                Save $200
              </Badge>
              <span className="[font-family:'Poppins',Helvetica] text-black text-base whitespace-nowrap">
                As low as $75/mont with [provider]
              </span>
            </div>

            {/* Key Features */}
            <div className="flex flex-col w-full items-start gap-3">
              {[
                {
                  highlight: "Easy installation",
                  text: ", can be installed in under 5 minutes!",
                },
                {
                  text: "Easily secure your home in case of emergency, ",
                  highlight: "peace of mind!",
                },
                {
                  highlight: "Protects the value ",
                  text: "of your Home & Possessions",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 w-full">
                  <CheckIcon className="w-5 h-5 mt-[-1.00px] text-black" />
                  <p className="flex-1 [font-family:'Poppins',Helvetica] text-black text-base leading-[20.8px]">
                    <span className="font-bold">{feature.highlight}</span>
                    <span>{feature.text}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add to Cart Section */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex w-[118px] h-[57px] items-center justify-center gap-6 p-2.5 bg-[#f3f8ff] rounded-[100px] border border-[#264775]">
              <Button
                variant="ghost"
                className="p-0 h-auto [font-family:'Poppins',Helvetica] text-[#264775] text-xl"
              >
                <MinusIcon className="w-5 h-5" />
              </Button>
              <span className="[font-family:'Poppins',Helvetica] text-[#264775] text-xl">
                1
              </span>
              <Button
                variant="ghost"
                className="p-0 h-auto [font-family:'Poppins',Helvetica] text-[#264775] text-xl"
              >
                <PlusIcon className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex w-[447px] items-center justify-center gap-4">
              <Button className="flex-1 px-8 py-[22px] bg-[#11d047] rounded-[100px] [font-family:'Urbane-DemiBold',Helvetica] font-bold text-white text-lg text-center leading-[41.8px]">
                ADD TO CART
                <img
                  className="ml-2"
                  alt="Cart icon"
                  src="https://c.animaapp.com/m8fm62nptWwCJ9/img/frame-1000004672.svg"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Help Sections */}
        <div className="flex items-start gap-5 w-full">
          <Card className="w-[260px] border border-[#264775] rounded-md">
            <CardContent className="flex flex-col items-center gap-[13px] pt-3.5 pb-[18px] px-3.5">
              <p className="[font-family:'Poppins',Helvetica] text-black text-sm text-center leading-[21px]">
                <span className="font-bold">
                  Not sure how many barriers you need?{" "}
                </span>
                <span>Use the calculator first!</span>
              </p>
              <Button className="w-full h-[45px] bg-[#264775] rounded-[100px] [font-family:'Ubuntu',Helvetica] font-bold text-white text-base">
                CALCULATE NOW
              </Button>
            </CardContent>
          </Card>

          <Card className="flex-1 border border-[#264775] rounded-md">
            <CardContent className="flex flex-col items-center gap-[13px] pt-3.5 pb-[18px] px-3.5">
              <p className="[font-family:'Poppins',Helvetica] text-black text-sm text-center leading-[21px]">
                <span className="font-bold">Need Help Choosing? </span>
                <span>Talk to a Flood Protection Expert Now!</span>
              </p>
              <div className="flex items-start gap-[5px] w-full">
                <Button className="flex-1 h-[45px] bg-[#264775] rounded-[100px] [font-family:'Ubuntu',Helvetica] font-bold text-white text-base">
                  CHAT WITH US
                </Button>
                <Button className="flex-1 h-[45px] bg-[#264775] rounded-[100px] [font-family:'Ubuntu',Helvetica] font-bold text-white text-base">
                  CALL US
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col items-start justify-center gap-4 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[22px] leading-[30px]">
                  How It Work In Just 60 Seconds - Watch Now
                </h3>
                <p className="[font-family:'Poppins',Helvetica] text-black text-sm leading-[21px]">
                  Watch our CEO explain how simple it is to secure your home in
                  minutes.
                </p>
              </div>
              <div className="relative w-full h-[319.65px] bg-[url(https://c.animaapp.com/m8fm62nptWwCJ9/img/screenshot-2024-03-13-at-9-23-1-1.png)] bg-cover">
                <div className="absolute w-[57px] h-10 top-[140px] left-[259px]">
                  <div className="relative h-10">
                    <div className="absolute w-9 h-7 top-1.5 left-2.5 bg-white" />
                    <img
                      className="absolute w-[57px] h-10 top-0 left-0"
                      alt="Play button"
                      src="https://c.animaapp.com/m8fm62nptWwCJ9/img/xmlid-823-.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Bundles */}
        <div className="flex flex-col items-start justify-center gap-5 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xl leading-[30px]">
              Most Popular Bundles For Every Home:
            </h3>
            <p className="[font-family:'Poppins',Helvetica] text-black text-sm leading-[21px]">
              Pick one of our most popular bundles to protect your home today!
            </p>
          </div>

          <div className="flex flex-col items-start justify-end gap-3 w-full">
            {popularBundles.map((bundle, index) => (
              <div
                key={index}
                className="relative flex items-start justify-center gap-1.5 px-4 py-5 w-full bg-white rounded-[2.96px] border border-[#e3e3e3]"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="w-[104px] h-[66px]">{bundle.image}</div>
                  <div className="flex flex-col w-[135px] items-start gap-4">
                    <h4 className="[font-family:'Ubuntu',Helvetica] font-bold text-black text-lg text-center leading-[23.4px]">
                      {bundle.title}
                    </h4>
                    <p className="[font-family:'Ubuntu',Helvetica] font-bold text-black text-sm leading-[normal]">
                      {bundle.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-3">
                    <div className="text-right whitespace-nowrap">
                      <span className="[font-family:'Poppins',Helvetica] text-[#949494] text-base leading-[20.8px] line-through">
                        {bundle.regularPrice}
                      </span>
                      <span
                        className="[font-family:'Poppins',Helvetica]
 font-bold text-black text-base leading-[20.8px]"
                      >
                        {bundle.salePrice}
                      </span>
                    </div>
                    <Badge className="w-28 h-[30px] p-2.5 bg-[#de2929] rounded-[100px] text-white text-sm">
                      Save $200
                    </Badge>
                  </div>
                  <Button className="w-28 bg-[#264775] rounded-[100px] text-white font-semibold text-base">
                    +ADD
                  </Button>
                </div>
                {bundle.badge && (
                  <div
                    className={`flex w-auto items-center justify-around gap-[4.63px] px-3 py-1.5 absolute -top-px -left-px ${bundle.badgeColor} rounded-[2.96px_2.96px_0px_0px]`}
                  >
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#263070] text-xs text-center leading-[normal]">
                      {bundle.badge}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Accordion */}
        <div className="flex flex-col items-start justify-center gap-5 w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description" className="border-none">
              <div className="flex items-center justify-between w-full">
                <AccordionTrigger className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base leading-[30px]">
                  Description
                </AccordionTrigger>
              </div>
              <AccordionContent className="flex flex-col gap-4 py-4">
                <p className="[font-family:'Poppins',Helvetica] text-black text-sm leading-[21px]">
                  Floods are becoming more common around the world. What was
                  once a 100-year phenomenon is now a seasonal trend that
                  homeowners must deal with.
                </p>
                <p className="[font-family:'Poppins',Helvetica] text-black text-sm leading-[21px]">
                  That's EXACTLY why you need this Dam Easy Flood Barrier Door
                  Dam!
                </p>
                <p className="[font-family:'Poppins',Helvetica] text-black text-sm leading-[21px]">
                  An excellent alternative to heavy and messy sandbags, this
                  barrier provides the first line of defense to prevent water
                  from entering doors and windows in your home. When flooding
                  happens, the ability to act quickly is critical. This flood
                  protection barrier provides you with reliable flood protection
                  at your fingertips as it can be installed in under 5 minutes!
                </p>
                <p className="[font-family:'Poppins',Helvetica] text-black text-sm leading-[21px]">
                  Don't wait until it's too late. Get this flood gate door dam
                  and protect your house now!
                </p>
              </AccordionContent>
            </AccordionItem>

            <Separator className="w-full h-0.5 bg-[#deeafb]" />

            <AccordionItem value="size-guide" className="border-none">
              <AccordionTrigger className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base leading-[30px]">
                Size Guide
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>

            <Separator className="w-full h-0.5 bg-[#deeafb]" />

            <AccordionItem value="shipping" className="border-none">
              <AccordionTrigger className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base leading-[30px]">
                Shipping
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>

            <Separator className="w-full h-0.5 bg-[#deeafb]" />

            <AccordionItem value="specifications" className="border-none">
              <AccordionTrigger className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base leading-[30px]">
                Product Specifications
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
