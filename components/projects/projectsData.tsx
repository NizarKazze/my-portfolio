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
    ],  
  },
  {
    id: 3,
    title: "AeonTech",
    img: "aeonTech.png",
    url: "https://aeon-tech-xi.vercel.app/",
    githubUrl: "https://github.com/NizarKazze/aeon-tech",
    liveUrl: "https://aeon-tech-xi.vercel.app/",
    className: "md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-5",
    mobileClassName: "col-span-1",
    description:
      "Web ficticia de presentación para unos auriculares inalámbricos llamados AeonTech. Desarrollada con Next.js y Three.js, incluye modelos 3D interactivos para una experiencia inmersiva de producto.",

    tecnologias: [
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs",
        texture: "/ballsTexture/Next_BallTexture.png",
        percentage: 89.1
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript",
        texture: "/ballsTexture/TypeScript_BallTexture.png",
        percentage: 89.1
      },
      {
        name: "CSS",
        icon: "https://cdn.simpleicons.org/css",
        texture: "/ballsTexture/CSS_BallTexture.png",
        percentage: 9.2
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript",
        texture: "/ballsTexture/JavaScript_BallTexture.png",
        percentage: 1.7
      },
      {
        name: "Three.js",
        icon: "https://cdn.simpleicons.org/threedotjs",
        texture: "/ballsTexture/Three_BallTexture.png",
        percentage: 0
      }
    ]
  },
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