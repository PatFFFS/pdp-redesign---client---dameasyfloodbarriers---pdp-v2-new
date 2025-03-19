import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Separator } from "../../../../components/ui/separator";

export const BlogSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "Will this work for uneven surfaces?",
      answer:
        "Yes! Our patented seal adjusts to fit uneven doorways perfectly, creating a watertight barrier.",
      defaultOpen: true,
    },
    {
      question: "What about larger openings like garages?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How durable is it?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Can I reuse it?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "What if I need replacement parts?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How long will shipping take?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Can I get help with installation?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How does it perform in extreme weather conditions?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Is it eco-friendly?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center py-[100px] bg-[#264775]">
      <div className="flex flex-col w-full max-w-[760px] items-center justify-center gap-[60px]">
        <div className="flex flex-col items-center gap-[30px] w-full">
          <h2 className="font-['Ubuntu',Helvetica] font-bold text-[35px] text-center leading-[45.5px]">
            <span className="text-white">
              Everything You&apos;ve Ever Wondered About DamEasy—
            </span>
            <span className="text-[#ffeb3d]">Answered Here.</span>
          </h2>

          <p className="font-['Poppins',Helvetica] font-normal text-white text-xl leading-[26px]">
            We&apos;ve Got You Covered With All The Details:
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {faqItems.map((item, index) => (
            <React.Fragment key={`faq-${index}`}>
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="flex justify-between py-5 px-0 hover:no-underline">
                  <span className="font-['Poppins',Helvetica] font-semibold text-white text-base leading-[22.4px] text-left">
                    {item.question}
                  </span>
                  {index === 0 ? (
                    <MinusIcon className="h-6 w-6 text-white shrink-0" />
                  ) : (
                    <PlusIcon className="h-6 w-6 text-white shrink-0" />
                  )}
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-5">
                  <p className="font-['Poppins',Helvetica] font-normal text-white text-sm leading-[19.6px]">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
              {index < faqItems.length - 1 && (
                <Separator className="bg-white/20 h-px w-full" />
              )}
            </React.Fragment>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
