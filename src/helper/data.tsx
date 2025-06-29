import { Code2, Coffee, Globe, Mail, MapPin, Phone, Users } from "lucide-react";

export const NAV_ITMES = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const GITHUB_LINK = "https://github.com/TusharLokhande";

export const LINKDIN_LINK =
  "https://www.linkedin.com/in/tushar-lokhande-a4b85518a/";

export const PHONE_NUMBER = "+919004591662";

export const EMAIL = "tushar.lokhande.work@gmail.com";

export const ABOUT_HIGHLIGHTS = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "3+ Years Experience",
    description: "Building scalable web applications",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "15+ Projects",
    description: "Delivered across various industries",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Collaborated with international teams",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Player",
    description: "Leading and mentoring developers",
  },
];

export const EXPERIENCE_DATA = [
  {
    company: "Prosares Solutions",
    position: "Full-Stack Developer",
    location: "Mumbai, India",
    period: "2022 – Present",
    type: "Full-time",
    description:
      "Contributed to the design and development of scalable enterprise applications across HR, finance, and compliance domains. Collaborated closely with cross-functional teams to deliver secure, modular, and maintainable solutions.",
    achievements: [
      "Developed and maintained multiple enterprise modules used by 100K+ users across India.",
      "Reduced deployment errors and time by 60% through CI/CD pipeline implementation.",
      "Optimized backend queries and APIs, improving response times by 40% on average.",
      "Led automation of recruitment workflows at Welspun, streamlining 50,000+ candidate hires.",
      "Mentored junior developers on best practices and full-stack architecture.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "Redux",
      ".NET Core",
      "SQL Server",
      "Dapper",
      "Docker",
      "GitHub Actions",
    ],
    companyUrl: "https://www.prosares.com",
  },
];

export const SKILLS = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: ".NET Core", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 87 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 82 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Azure", level: 80 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 82 },
      { name: "Kubernetes", level: 75 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Welspun HRMS",
    description:
      "Built a complete hiring platform that automated over 50,000 candidate recruitments. Integrated with MS Teams, Naukri, and LinkedIn. Enabled offer letter generation and multi-level approval workflows.",
    image:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React",
      "Node.js",
      "C#",
      ".NET Core",
      "SQL Server",
      "Azue",
      "MS Graph API",
    ],
    type: "private",
    liveUrl: "private",
    githubUrl: "private",
    featured: true,
    date: "2023 - Present",
  },
  {
    title: "Mahindra & Mahindra (M & M) SF/SP Query Management System ",
    description:
      "Engineered a centralized portal that allowed role-based access, secure file uploads using Azure Blob, and dynamic views based on user type. Built backend APIs and UI components independently.",
    image:
      "https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "Azure",
      "Chart.js",
      "Docker",
      "Express.js",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    date: "2022",
    type: "private",
  },
  {
    title: "Afcons Automation of Invoice Processing",
    description:
      "Orchestrated the development of an Automated Invoice Processing system, employing React.js, C#, Python, and SAP integration, to streamline handling telephone and airline invoices for reimbursement",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "MS Sharepoint",
      "Docker",
      "SQL Server",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    date: "2023",
    type: "private",
  },
  {
    title: "WOW – Internal Workflow Automation Platform",
    description:
      "Designed and developed an internal application for employee task tracking, leave management, and agile workflows, similar to JIRA. Built for Effica Nova to streamline team coordination, approvals, and performance visibility across departments.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", ".NET Core", "SQL Server", "JWT", "Tailwind CSS"],
    liveUrl: "private",
    githubUrl: "private",
    featured: false,
    date: "2024",
    type: "private",
  },
  {
    title: "Investor Communication Portal – Aditya Birla Group",
    description:
      "Built a streamlined platform for ABG to manage investor communications. Enabled creation of investor groups, automated email campaigns to internal business SPOCs and external investors, and ensured secure delivery with role-based access controls.",
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "MySQL", "JWT", "SMTP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    date: "2022",
    type: "private",
  },
];

export const CONTACT_INFO = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER}`,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Mumbai, India",
    href: "#",
  },
];
