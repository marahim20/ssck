"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion"

function ImageCard({ src }: { src: string }) {
  return (
    <Image
      priority
      src={src}
      width={400}
      height={400}
      className="rounded-lg"
      alt="alternate"
    />
  )
}

const images2023: string[] = [
  "/assets/2023/1.jpg",
  "/assets/2023/2.jpg",
  "/assets/2023/3.jpg",
  "/assets/2023/4.jpg",
  "/assets/2023/5.jpg",
  "/assets/2023/6.jpg",
  "/assets/2023/7.jpg",
  "/assets/2023/8.jpg",
  "/assets/2023/9.jpg",
  "/assets/2023/10.jpg",
  "/assets/2023/11.jpg",
  "/assets/2023/12.jpg",
]

function Album() {
  return (
    <div className="columns-1 space-y-4 pt-4 sm:columns-2 md:columns-3 lg:columns-4">
      {images2023.map((imagesrc: string, idx) => (
        <ImageCard src={imagesrc} key={idx} />
      ))}
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="w-full px-4 pt-40 text-2xl">
      <Accordion type="single" collapsible className="flex flex-col gap-4">
        <AccordionItem
          value="item-1"
          className="rounded-lg bg-gradient-to-r from-secondary  to-primary p-4"
        >
          <AccordionTrigger className="w-full cursor-pointer text-white">
            2023
          </AccordionTrigger>
          <AccordionContent>
            <Album />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="rounded-lg bg-gradient-to-r from-secondary  to-primary p-4"
        >
          <AccordionTrigger className="w-full cursor-pointer text-white">
            2022
          </AccordionTrigger>
          <AccordionContent>{/* <Album /> */}</AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="rounded-lg bg-gradient-to-r from-secondary  to-primary p-4"
        >
          <AccordionTrigger className="w-full cursor-pointer text-white">
            2021
          </AccordionTrigger>
          <AccordionContent>{/* <Album /> */}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
