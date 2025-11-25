
import { Link, Testimonial } from './types';

export const LINKS: Link[] = [
  {
    id: 1,
    url: 'https://www.youtube.com/@raquelrosa.emagrecimento',
    imageUrl: 'https://i.imgur.com/fKQgjEX.png',
    borderColor: '#A88BD4', // Roxo suave
    pulse: true,
  },
  {
    id: 2,
    url: 'https://www.tiktok.com/@raquelrosa.emagrecimento',
    imageUrl: 'https://i.imgur.com/YfuQXTn.png',
    borderColor: '#CBB7F6', // Lilás
  },
  {
    id: 3,
    url: 'https://www.instagram.com/raquelrosa.emagrecimento',
    imageUrl: 'https://i.imgur.com/ZTKAbEV.png',
    borderColor: '#A88BD4', // Roxo suave (ajustado conforme pedido #A88BD4 na lista, embora antes fosse cinza)
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, text: "Perdi 8kg sem passar fome!" },
  { id: 2, text: "Me livrei da compulsão depois de 12 anos!" },
  { id: 3, text: "Voltei a caber nas minhas roupas preferidas!" },
  { id: 4, text: "A melhor decisão que tomei pela minha saúde." },
];

export const MAIN_CONTENT_LINKS = [
  {
    id: 1,
    title: "📘 Como vencer a compulsão alimentar",
    url: "https://www.instagram.com/reel/DRajs94jIAy/?igsh=MXdmMXF1andpYmJtMA=="
  },
  {
    id: 2,
    title: "🥗 Receita simples para controlar a fome",
    url: "https://www.instagram.com/reel/DRPf6kQEQuj/?igsh=OWk0cmNqbnRzbmRy"
  },
  {
    id: 3,
    title: "🧠 Hábitos simples",
    url: "https://www.instagram.com/reel/DRRtK9OjrEe/?igsh=eDV6YmNqeGVmbW9p"
  }
];

export const VIRAL_LINKS = [
  {
    id: 1,
    title: "O vídeo que viralizou essa semana",
    url: "https://www.instagram.com/reel/DRW5PD2kZrI/?igsh=MTZpOWhtcDF5N2d5bg=="
  },
  {
    id: 2,
    title: "A dica que mais ajudou minhas seguidoras",
    url: "https://www.instagram.com/reel/DRRtK9OjrEe/?igsh=eDV6YmNqeGVmbW9p"
  },
  {
    id: 3,
    title: "O método que tirou da compulsão em 3 passos",
    url: "https://www.instagram.com/reel/DRPf6kQEQuj/?igsh=OWk0cmNqbnRzbmRy"
  }
];
