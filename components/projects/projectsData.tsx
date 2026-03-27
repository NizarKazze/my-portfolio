import React from "react";

export type Technology = {
  name: string;
  icon: string;
};

export type GridItem = {
  id: number;
  title: string;
  img: string;
  className: string;
  description: string;
  tecnologias: Technology[];
};

const projectitems: GridItem[] = [
  {
    id: 1,
    title: "Montaña",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    className: "col-span-2 row-span-7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tecnologias: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    ],
  },
  {
    id: 2,
    title: "Playa",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    className: "col-span-4 row-span-4 col-start-3",
    description: "Proyecto de ejemplo sobre playa.",
    tecnologias: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
    ],
  },
  {
    id: 3,
    title: "Bosque",
    img: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
    className: "col-span-2 row-span-3 col-start-3 row-start-5",
    description: "Proyecto sobre naturaleza.",
    tecnologias: [
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
    ],
  },
  {
    id: 4,
    title: "Ciudad",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    className: "col-span-2 row-span-3 col-start-5 row-start-5",
    description: "Proyecto urbano.",
    tecnologias: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/node.js" },
    ],
  },
  {
    id: 5,
    title: "Desierto",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    className: "col-span-3 row-span-3 row-start-8",
    description: "Proyecto en ambiente árido.",
    tecnologias: [
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    ],
  },
  {
    id: 6,
    title: "Lago",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    className: "col-span-3 row-span-3 col-start-4 row-start-8",
    description: "Proyecto acuático.",
    tecnologias: [
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
    ],
  },
];

export default projectitems;