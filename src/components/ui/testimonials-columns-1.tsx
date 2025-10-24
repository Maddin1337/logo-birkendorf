"use client";
import React from "react";
import { motion } from "motion/react";


export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "Dank der einfühlsamen Therapie hat unser Sohn große Fortschritte gemacht. Wir sind sehr dankbar!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Familie Müller",
    role: "Eltern",
  },
  {
    text: "Professionell, herzlich und kompetent. Die Behandlung hat mir sehr geholfen.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Anna Schmidt",
    role: "Patientin",
  },
  {
    text: "Nach meinem Schlaganfall wurde ich hier hervorragend betreut. Sehr empfehlenswert!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Thomas Weber",
    role: "Patient",
  },
  {
    text: "Die Therapie hat unsere Tochter enorm weitergeholfen. Sie spricht jetzt viel freier.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Maria Fischer",
    role: "Mutter",
  },
  {
    text: "Sehr gute Betreuung und spürbare Erfolge nach nur wenigen Wochen.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Michael Bauer",
    role: "Patient",
  },
  {
    text: "Die Praxis ist sehr kinderfreundlich und meine Tochter fühlt sich dort wohl.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    name: "Sabine Klein",
    role: "Mutter",
  },
  {
    text: "Kompetente Beratung und individuelle Therapie, die auf meine Bedürfnisse zugeschnitten ist.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    name: "Robert Wagner",
    role: "Patient",
  },
  {
    text: "Die Behandlung hat meine Lebensqualität deutlich verbessert. Vielen Dank!",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=150&h=150&fit=crop&crop=face",
    name: "Elisabeth Hoffmann",
    role: "Patientin",
  },
  {
    text: "Sehr professionelle und herzliche Atmosphäre. Man fühlt sich von Anfang an gut aufgehoben.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    name: "Stefan Richter",
    role: "Patient",
  },
];

export { testimonials };