export interface Project {
    name: string;
    type: 'Personal' | 'Empresarial';
    image: string;
    link: string;
    github: string;
    technologies: string[];
    purpose: string;
    description: string;
    completionDate?: string; // Opcional: Fecha de finalización
    role?: string; // Opcional: Rol en el proyecto, si es parte de un equipo
    collaborators?: string[]; // Opcional: Colaboradores si aplica
  }
  
  export const projects: Project[] = [
    {
      name: "Mi Portafolio",
      type: "Personal",
      image: "/public/images/project1.png",
      link: "https://miportafolio.com",
      github: "https://github.com/miusuario/miportafolio",
      technologies: ["Astro", "Tailwind CSS", "JavaScript"],
      purpose: "Crear un portafolio personal para mostrar mis habilidades y proyectos.",
      description: "Este es un portafolio personal donde muestro mis proyectos, habilidades y experiencia en desarrollo web, UI/UX y otras áreas técnicas.",
      completionDate: "Julio 2024",
    },
    {
      name: "Sistema de Gestión Empresarial",
      type: "Empresarial",
      image: "/path/to/business-system-image.jpg",
      link: "https://empresa.com/gestion",
      github: "https://github.com/empresa/gestion-sistema",
      technologies: [".NET", "C#", "SQL Server", "Bootstrap"],
      purpose: "Desarrollar un sistema integral para la gestión de clientes y recursos dentro de la empresa.",
      description: "Un sistema empresarial utilizado para la gestión de clientes, inventario y recursos humanos, desarrollado para mejorar la eficiencia operativa de la empresa.",
      role: "Desarrollador Full-Stack",
      collaborators: ["Juan Pérez", "Ana Gómez"],
      completionDate: "Marzo 2023",
    },
    {
      name: "Aplicación de Tareas",
      type: "Personal",
      image: "/path/to/todo-app-image.jpg",
      link: "https://miappdetareas.com",
      github: "https://github.com/miusuario/todoapp",
      technologies: ["React", "Node.js", "MongoDB"],
      purpose: "Crear una aplicación sencilla para gestionar tareas y mejorar la productividad personal.",
      description: "Una aplicación web que permite a los usuarios crear, editar y gestionar tareas diarias de forma sencilla y eficaz.",
      completionDate: "Enero 2024",
    },
    {
      name: "E-commerce",
      type: "Empresarial",
      image: "/path/to/ecommerce-image.jpg",
      link: "https://ecommerce.com",
      github: "https://github.com/empresa/ecommerce",
      technologies: ["React", "Spring Boot", "MySQL", "Stripe API"],
      purpose: "Desarrollar una plataforma de comercio electrónico para la venta de productos en línea.",
      description: "Una plataforma completa de e-commerce que incluye gestión de productos, carrito de compras, pagos seguros y soporte para múltiples idiomas.",
      role: "Líder de Proyecto",
      collaborators: ["Luis Martínez", "Sofía Rodríguez"],
    }
  ];
  