// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import sd from "../assets/sd9.jpg";
import smp from "../assets/smp.jpg";
import osis from "../assets/sd9.jpg";

import ig from "../assets/ig.png";

import php from "../assets/tech/php.png"
import laravel from "../assets/tech/laravel.jpg"

import webpkl from "../assets/webpkl.png";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "Tentang",
    link: null,
  },
  {
    id: "work",
    title: "Riwayat Hidup",
    link: null,
  },

  {
    id: "projects",
    title: "Project",
    link: null,
  },
  {
    id: "skills",
    title: "Kemampuan",
    link: null,
  },
  {
    id: "contact",
    title: "Kontak",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Laravel Developer",
    icon: web, // kalau ada icon khusus Laravel, nanti bisa ganti
  },
  {
    title: "UI Designer (Figma)",
    icon: creator, // icon desain/UI
  },

] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "laravel",
    icon: laravel,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "SDN 3 Lumbung Sari",
    company_name: "Sekolah Dasar",
    icon: sd,
    iconBg: "#FEEBE7",
    date: "Juli 2014 - Juni 2020",
    points: [
      " Aktif mengikuti kegiatan belajar di kelas dengan semangat dan rasa ingin tahu yang tinggi.",
      " Sering dipercaya untuk bekerja sama dalam kelompok dan membantu teman yang kesulitan belajar.",
      " Berpartisipasi dalam kegiatan sekolah seperti lomba, upacara, dan kerja bakti dengan penuh tanggung jawab.",
      " Belajar menumbuhkan sikap disiplin, jujur, dan menghargai guru serta teman sebaya."

    ],
  },
  {
    title: "SMP T Manahijul Huda",
    company_name: "Sekolah Mnengah Pertama",
    icon: smp,
    iconBg: "#E6DEDD",
    date: "Juli 2020 - Juni 2023",
    points: [
      " Aktif mengikuti kegiatan belajar di sekolah dan selalu berusaha memahami setiap pelajaran dengan baik.",
      " Terlibat dalam berbagai kegiatan ekstrakurikuler untuk mengembangkan minat dan bakat di luar kelas.",
      " Sering berpartisipasi dalam kegiatan sekolah seperti lomba, acara peringatan, dan kegiatan sosial.",
      " Menjaga sikap disiplin, sopan, serta bekerja sama dengan teman dan guru dengan baik."
    ],
  },
  {
    title: "SMKN 1 Kawali",
    company_name: "Sekolah Menengah Kejuruan",
    icon: shopify,
    iconBg: "#383E56",
    date: "Juli 2023 - Sekarang",
    points: [
      " Mulai mendalami dunia pemrograman dan memahami dasar-dasar pembuatan aplikasi serta website.",
      " Bersungguh-sungguh dalam belajar koding dan terus mengembangkan kemampuan di bidang teknologi informasi.",
      " Diberi kepercayaan untuk membuat dan mengelola website PKL SMKN 1 Kawali sebagai bagian dari proyek sekolah.",
      " Belajar bekerja secara mandiri maupun berkolaborasi dengan teman untuk menyelesaikan proyek dengan hasil terbaik."

    ],
  },
] as const;


export const ORGANIZATIONS = [
  {
    name: "OSIS SMKN 1 Kawali",
    role: "Anggota Sie Teknologi Informasi",
    icon: osis,
    iconBg: "#E6DEDD",
    date: "2023 - Sekarang",
    points: [
      "Bertanggung jawab dalam pengelolaan sistem informasi kegiatan sekolah.",
      "Membantu membuat desain publikasi acara OSIS menggunakan Canva dan Figma.",
      "Berkoordinasi dengan tim lain untuk menyebarkan informasi melalui media sosial sekolah.",
    ],
  },
  {
    name: "Pramuka SMKN 1 Kawali",
    role: "Anggota Aktif",
    icon: osis,
    iconBg: "#FEEBE7",
    date: "2023 - Sekarang",
    points: [
      "Berpartisipasi aktif dalam kegiatan latihan dan perkemahan.",
      "Mempelajari kepemimpinan, kedisiplinan, dan kerja sama tim.",
    ],
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Saya memiliki pemahaman yang kuat dalam pengembangan web menggunakan HTML, CSS, dan PHP. Saya dapat membuat website yang responsif dan interaktif.",
    name: "Web Development",
    designation: "Skill",
    company: "Frontend & Backend",
    image: web, // ganti dengan icon yang sesuai
  },
  {
    testimonial:
      "Saya menguasai framework Laravel untuk membangun aplikasi web yang kompleks dengan arsitektur MVC. Mampu membuat fitur CRUD dan autentikasi.",
    name: "Laravel",
    designation: "Framework",
    company: "PHP",
    image: laravel, // ganti dengan icon laravel
  },
  {
    testimonial:
      "Saya bisa menggunakan Figma untuk membuat desain UI/UX yang menarik dan user-friendly. Memahami prinsip desain dan layout yang baik.",
    name: "UI Design",
    designation: "Design",
    company: "Figma",
    image: figma, // ganti dengan icon figma
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Web Pkl Smkn 1 Kawali",
    description:
      "Website ini membantu proses Praktik Kerja Lapangan di SMKN 1 Kawali agar lebih mudah dan terorganisir. Siswa dapat mengisi laporan, melihat data perusahaan, dan memantau kegiatan PKL secara online.",
    tags: [
      {
        name: "Blade",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: webpkl,
    live_site_link: "https://pkl.smkn1kawali.sch.id/",
  },

] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: ig,
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ade-fikri-a335632b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanidhyy",
  },
] as const;
