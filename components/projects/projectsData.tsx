export type Technology = {
  name: string;
  icon: string;
  percentage: number;
  texture: string;
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
  mobileClassName: string;
};

const projectitems: GridItem[] = [
  {
    id: 1,
    title: "Acoso Escolar Ibiza y Formentera",
    img: "/acosoEscolar.png",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/torvalds/linux",
    liveUrl: "https://www.acoso-escolar.com/",
    className: "md:col-span-2 md:row-span-7",
    mobileClassName: "col-span-2",
    description: "Desarrollo de una plataforma web para una asociación contra el acoso escolar...",
    tecnologias: [
      { name: "React", icon: "react.png", texture: "/ballsTexture/Html_BallTexture.png", percentage: 60 },
      { name: "Vite", icon: "vite.png", texture: "/ballsTexture/Vite_BallTexture.png", percentage: 35 },
      { name: "PHP", icon: "php.png", texture: "/ballsTexture/Vite_BallTexture.png", percentage: 5 },
    ],
  },
  {
    id: 2,
    title: "Playa",
    img: "/FlexoApp.png",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/facebook/react",
    liveUrl: "https://react.dev",
    className: "md:col-span-4 md:row-span-4 md:col-start-3",
    mobileClassName: "col-span-2",
    description: "Proyecto de ejemplo sobre playa.",
    tecnologias: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs", texture: "/ballsTexture/Html_BallTexture.png", percentage: 100 },
    ],  },
  {
    id: 3,
    title: "Bosque",
    img: "aeonTech.png",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/tailwindlabs/tailwindcss",
    liveUrl: "https://tailwindcss.com",
    className: "md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-5",
    mobileClassName: "col-span-1",
    description: "Proyecto sobre naturaleza.",
    tecnologias: [
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss", texture: "/ballsTexture/Html_BallTexture.png", percentage: 100 },
    ],  },
  {
    id: 4,
    title: "Ciudad",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/expressjs/express",
    liveUrl: "https://expressjs.com",
    className: "md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-5",
    mobileClassName: "col-span-1",
    description: "Proyecto urbano.",
    tecnologias: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/node.js", texture: "/ballsTexture/Html_BallTexture.png", percentage: 100 },
    ],  },
  {
    id: 5,
    title: "Desierto",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/mongodb/mongo",
    liveUrl: "https://www.mongodb.com",
    className: "md:col-span-3 md:row-span-3 md:row-start-8",
    mobileClassName: "col-span-1",
    description: "Proyecto en ambiente árido.",
    tecnologias: [
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb", texture: "/ballsTexture/Html_BallTexture.png", percentage: 100 },
    ],  },
  {
    id: 6,
    title: "Lago",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    url: "https://www.acoso-escolar.com/",
    githubUrl: "https://github.com/firebase/firebase-js-sdk",
    liveUrl: "https://firebase.google.com",
    className: "md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-8",
    mobileClassName: "col-span-1",
    description: "Proyecto acuático.",
    tecnologias: [
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase", texture: "/ballsTexture/Html_BallTexture.png", percentage: 100 },
    ],  },
];

export default projectitems;