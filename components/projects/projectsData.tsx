import React from "react";

export type Technology = {
  name: string;
  icon: string;
  percentage: number;
};

export type GridItem = {
  id: number;
  title: string;
  img: string;
  className: string;
  description: string;
  tecnologias: Technology[];
  url: string;
  githubUrl: string;
  liveUrl: string;
};

const projectitems: GridItem[] = [
  {
    id: 1,
    title: "Acoso Escolar Ibiza y Formentera",
    img: "/acosoEscolar.png",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/torvalds/linux",
    liveUrl: "https://www.acoso-escolar.com/",
    className: "col-span-2 row-span-7",
    description: "Desarrollo de una plataforma web para una asociación contra el acoso escolar en Ibiza y Formentera, orientada a ofrecer información, recursos y contacto para personas afectadas. La aplicación cuenta con un backend en PHP para la gestión de datos y un frontend moderno desarrollado con React (Vite), utilizando Tailwind CSS para un diseño responsive y accesible. El proyecto combina rendimiento, usabilidad y compromiso social, facilitando el acceso a ayuda y concienciación sobre el acoso escolar.",
    tecnologias: [
      { name: "React", icon: "/py-background.png", percentage: 70 },
      { name: "Vite", icon: "/vite-backgound.png", percentage: 30 },
      { name: "Php", icon: "/vite-backgound.png", percentage: 30 },
      { name: "Tailwind css", icon: "/Tailwind-css.png", percentage: 30 },
    ],
  },
  {
    id: 2,
    title: "Playa",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/facebook/react",
    liveUrl: "https://react.dev",
    className: "col-span-4 row-span-4 col-start-3",
    description: "Proyecto de ejemplo sobre playa.",
    tecnologias: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs", percentage: 85 },
      { name: "React", icon: "https://cdn.simpleicons.org/react", percentage: 15 },
    ],
  },
  {
    id: 3,
    title: "Bosque",
    img: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/tailwindlabs/tailwindcss",
    liveUrl: "https://tailwindcss.com",
    className: "col-span-2 row-span-3 col-start-3 row-start-5",
    description: "Proyecto sobre naturaleza.",
    tecnologias: [
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss", percentage: 60 },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css3", percentage: 40 },
    ],
  },
  {
    id: 4,
    title: "Ciudad",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/expressjs/express",
    liveUrl: "https://expressjs.com",
    className: "col-span-2 row-span-3 col-start-5 row-start-5",
    description: "Proyecto urbano.",
    tecnologias: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/node.js", percentage: 75 },
      { name: "Express", icon: "https://cdn.simpleicons.org/express", percentage: 25 },
    ],
  },
  {
    id: 5,
    title: "Desierto",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/mongodb/mongo",
    liveUrl: "https://www.mongodb.com",
    className: "col-span-3 row-span-3 row-start-8",
    description: "Proyecto en ambiente árido.",
    tecnologias: [
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb", percentage: 65 },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/node.js", percentage: 35 },
    ],
  },
  {
    id: 6,
    title: "Lago",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/firebase/firebase-js-sdk",
    liveUrl: "https://firebase.google.com",
    className: "col-span-3 row-span-3 col-start-4 row-start-8",
    description: "Proyecto acuático.",
    tecnologias: [
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase", percentage: 80 },
      { name: "React", icon: "https://cdn.simpleicons.org/react", percentage: 20 },
    ],
  },
];

export default projectitems;