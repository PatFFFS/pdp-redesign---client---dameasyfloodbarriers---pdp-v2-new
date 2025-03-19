import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      title: "Single garage",
      features: [
        "2 barriers, 2 poles & 1 mini",
        "Quick & Easy Installation",
        "Scalable Protection",
        "Cost-Effective & Convenient",
      ],
      originalPrice: "$899.99",
      discountedPrice: "$699.99",
      savings: "$200",
      image: (
        <div className="relative w-56 h-[114px] mx-auto">
          <div className="relative h-[114px]">
            <img
              className="absolute w-[106px] h-[102px] top-[3px] left-[13px]"
              alt="Untitleddesign"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/untitleddesign-25-photoroom-4-2.png"
            />
            <img
              className="absolute w-[106px] h-[102px] top-[3px] left-[107px]"
              alt="Untitleddesign"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/untitleddesign-25-photoroom-5-2.png"
            />
            <img
              className="absolute w-[22px] h-[107px] top-0.5 left-[202px]"
              alt="Image"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/image-42-1.png"
            />
            <img
              className="absolute w-[22px] h-[107px] top-0.5 left-0"
              alt="Image"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/image-43-1.png"
            />
            <img
              className="w-[21px] h-[114px] left-[101px] absolute top-0"
              alt="Image"
              src="https://c.animaapp.com/m8fm62nptWwCJ9/img/image-41-2.png"
            />
          </div>
        </div>
      ),
      isBestValue: false,
    },
    {
      id: 2,
      title: "Double garage",
      features: [
        "5 barriers 4 poles",
        "Quick & Easy Installation",
        "Scalable Protection",
        "Cost-Effective & Convenient",
      ],
      originalPrice: "$899.99",
      discountedPrice: "$699.99",
      savings: "$200",
      image: (
        <img
          className="w-[276.95px] h-[173.6px] mx-auto"
          alt="Group"
          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/group-1484580555-1.png"
        />
      ),
      isBestValue: true,
    },
    {
      id: 3,
      title: "Double door",
      features: [
        "2 barriers 1 pole",
        "Quick & Easy Installation",
        "Scalable Protection",
        "Cost-Effective & Convenient",
      ],
      originalPrice: "$899.99",
      discountedPrice: "$699.99",
      savings: "$200",
      image: (
        <div className="relative w-[254px] h-36 mx-auto">
          <img
            className="absolute w-[134px] h-[129px] top-1 left-0"
            alt="Untitleddesign"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/untitleddesign-25-photoroom-4-3.png"
          />
          <img
            className="absolute w-[134px] h-[129px] top-1 left-[120px]"
            alt="Untitleddesign"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/untitleddesign-25-photoroom-5-3.png"
          />
          <img
            className="w-[27px] h-36 left-28 absolute top-0"
            alt="Image"
            src="https://c.animaapp.com/m8fm62nptWwCJ9/img/image-41-3.png"
          />
        </div>
      ),
      isBestValue: false,
    },
    {
      id: 4,
      title: "1 Flood Barrier",
      features: [
        "Only 1 Barrier",
        "Quick & Easy Installation",
        "Scalable Protection",
        "Cost-Effective & Convenient",
      ],
      price: "$699.99",
      image: (
        <img
          className="w-[172px] h-[165.47px] mx-auto"
          alt="Untitleddesign"
          src="https://c.animaapp.com/m8fm62nptWwCJ9/img/untitleddesign-25-photoroom-2-1.png"
        />
      ),
      isBestValue: false,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] py-[100px] bg-[#264775] w-full">
      <div className="flex flex-col items-center gap-[25px] max-w-4xl">
        <div className="flex items-center gap-[5px]">
          <div className="relative w-[95.22px] h-[16.65px]">
            {[0, 5, 10, 59, 79].map((left, index) => (
              <img
                key={index}
                className={`absolute w-4 h-[15px] top-0 left-[${left}px]`}
                alt="Star"
                src="https://c.animaapp.com/m8fm62nptWwCJ9/img/star-3.svg"
              />
            ))}
          </div>
          <p className="font-['Poppins',Helvetica] text-base">
            <span className="text-white">Rated 4.8/5 by </span>
            <span className="font-bold text-white">
              100+ Florida homeowners
            </span>
          </p>
        </div>

        <h2 className="font-['Ubuntu',Helvetica] font-bold text-[35px] text-center leading-[45.5px] max-w-[902px]">
          <span className="text-white">Know what you need? </span>
          <span className="text-[#ffeb3d]">Choose your bundle</span>
        </h2>

        <p className="font-['Ubuntu',Helvetica] font-normal text-white text-xl text-center leading-[26px]">
          Pick One Of Our Most Popular Bundles To Protect Your Home Today!
        </p>
      </div>

      <div className="flex items-end gap-4 flex-wrap justify-center">
        {products.map((product) => (
          <Card
            key={product.id}
            className="w-[302px] rounded-[6.4px] border-[0.75px] border-[#e3e3e3] bg-white relative"
          >
            <div className="w-full h-[34px] flex items-center justify-center absolute -top-px -left-px rounded-t-[6.4px] bg-[#deeafb]">
              <p className="font-['Poppins',Helvetica] font-semibold text-[#263070] text-xs text-center">
                DISCOUNTED BUNDLES
              </p>
            </div>

            {product.isBestValue && (
              <div className="w-full h-[34px] flex items-center justify-center absolute -top-px -left-px rounded-t-[6.4px] bg-[#ffeb3d]">
                <p className="font-['Poppins',Helvetica] font-semibold text-[#263070] text-xs text-center">
                  BEST VALUE
                </p>
              </div>
            )}

            <CardContent className="pt-14 pb-6 px-[13px] flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col items-center gap-4">
                  <h3 className="font-['Ubuntu',Helvetica] font-bold text-black text-2xl text-center leading-[31.2px]">
                    {product.title}
                  </h3>

                  {product.image}

                  <div className="flex flex-col items-start gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-[-1.00px] font-normal text-black text-base text-center leading-[20.8px]">
                          <CheckIcon size={20} />
                        </div>
                        <p className="font-['Poppins',Helvetica] font-medium text-black text-sm leading-[18.2px]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {product.originalPrice ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="font-['Poppins',Helvetica] text-base text-right leading-[20.8px]">
                      <span className="text-[#949494] line-through">
                        {product.originalPrice}
                      </span>{" "}
                      <span className="font-bold text-black">
                        {product.discountedPrice}
                      </span>
                    </div>
                    <Badge className="bg-[#de2929] text-white rounded-[100px] h-[30px] px-2.5 py-2.5">
                      <span className="font-['Poppins',Helvetica] font-normal text-[13px]">
                        Save {product.savings}
                      </span>
                    </Badge>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <p className="font-['Poppins',Helvetica] font-bold text-black text-base text-right leading-[20.8px]">
                      {product.price}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                <Button className="w-[280px] h-[52px] bg-[#11d047] rounded-[100px] gap-4 px-8 py-[22px] hover:bg-[#0fb83e]">
                  <span className="font-['Urbane-DemiBold',Helvetica] font-bold text-white text-lg text-center leading-[41.8px]">
                    ADD TO CART
                  </span>
                  <img
                    className="object-cover"
                    alt="Frame"
                    src="https://c.animaapp.com/m8fm62nptWwCJ9/img/frame-1000004672.svg"
                  />
                </Button>

                <div className="flex items-center justify-center gap-2">
                  <img
                    className="w-4 h-4"
                    alt="Checkmark circle"
                    src="https://c.animaapp.com/m8fm62nptWwCJ9/img/checkmark-circle-02.svg"
                  />
                  <p className="font-['Ubuntu',Helvetica] font-normal text-black text-xs text-center leading-[15.6px]">
                    Easy 30-day Return Policy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
