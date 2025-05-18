import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  react_native: {
    title: "React Native",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  resume?: string;
};
const projects: Project[] = [
  {
    id: "meals-mitra",
    category: "Food Sharing Platform",
    title: "Meals Mitra App",
    src: "/assets/projects-screenshots/meals-mitra/MEALSMITRA.jpg",
    screenshots: [
      "/assets/projects-screenshots/meals-mitra/MEALSMITRA.jpg",
      "/assets/projects-screenshots/meals-mitra/homescreen.jpg",
      "/assets/projects-screenshots/meals-mitra/food donate screen.jpg",
      "/assets/projects-screenshots/meals-mitra/food request screen.jpg",
      "/assets/projects-screenshots/meals-mitra/profile screen.jpg",
      "/assets/projects-screenshots/meals-mitra/app drawer.jpg"
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react_native],
      backend: [PROJECT_SKILLS.firebase],
    },
    github: "https://github.com/satish024-024/meals-mitra",
    live: "https://meals-mitra.app",
    resume: "https://drive.google.com/file/d/1--atfi8oaUfkmqYMyPxQUFTwcY2ic9FS/view?usp=drivesdk",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Meals Mitra – Food Sharing Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            Meals Mitra is an AI-powered food redistribution platform that connects donors and volunteers to deliver leftover food to people in need. The app streamlines the process of donating and requesting food, making it easy for anyone to contribute to the community and reduce food waste.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Onboarding & Mission</TypographyH3>
          <p className="font-mono mb-2">
            The onboarding screen welcomes users and introduces the mission of Meals Mitra: to make food sharing simple, impactful, and accessible for everyone.
          </p>
          <SlideShow images={["/assets/projects-screenshots/meals-mitra/MEALSMITRA.jpg"]} />
          <TypographyH3 className="my-4 mt-8">Home & Community Impact</TypographyH3>
          <p className="font-mono mb-2">
            The home screen provides quick access to key actions like donating food, requesting food, viewing the map, and managing your profile. It also highlights urgent community needs and shows real-time impact statistics such as meals donated and people helped.
          </p>
          <SlideShow images={["/assets/projects-screenshots/meals-mitra/homescreen.jpg"]} />
          <TypographyH3 className="my-4 mt-8">Donating Food</TypographyH3>
          <p className="font-mono mb-2">
            Donors can easily submit food donations by specifying the food type, quantity, description, and pickup location. The app encourages community participation and tracks the positive impact of each donation.
          </p>
          <SlideShow images={["/assets/projects-screenshots/meals-mitra/food donate screen.jpg"]} />
          <TypographyH3 className="my-4 mt-8">Requesting Food</TypographyH3>
          <p className="font-mono mb-2">
            Individuals or organizations in need can request food by providing details such as title, description, quantity, and location. The process is simple and transparent, ensuring help reaches those who need it most.
          </p>
          <SlideShow images={["/assets/projects-screenshots/meals-mitra/food request screen.jpg"]} />
          <TypographyH3 className="my-4 mt-8">User Profile</TypographyH3>
          <p className="font-mono mb-2">
            Each user has a profile section displaying their contact information, address, gender, and recent donation activity. Users can easily update their details and track their contributions.
          </p>
          <SlideShow images={["/assets/projects-screenshots/meals-mitra/profile screen.jpg"]} />
          <TypographyH3 className="my-4 mt-8">App Navigation & Features</TypographyH3>
          <p className="font-mono mb-2">
            The app drawer provides access to all major features, including donation tracking, volunteer dashboard, NGO bulk requests, volunteer pickup, request status tracking, and community engagement. Dark mode support ensures a comfortable experience for all users.
          </p>
          <SlideShow images={["/assets/projects-screenshots/meals-mitra/app drawer.jpg"]} />
        </div>
      );
    },
  },
  {
    id: "couponluxury",
    category: "Coupon site",
    title: "Coupon Luxury",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.couponluxury.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    resume: "https://drive.google.com/file/d/1--atfi8oaUfkmqYMyPxQUFTwcY2ic9FS/view?usp=drivesdk",
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            CouponLuxury is your go-to destination for snagging the best deals
            without lifting a finger. Whether you&apos;re hunting for the latest
            discounts or trying to save a buck at your favorite stores,
            CouponLuxury&apos;s got you covered.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            As soon as you land, boom! You&apos;re greeted with the freshest
            coupons and top-tier deals that&apos;ll make your wallet happy.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
          <TypographyH3 className="my-4 ">Stores</TypographyH3>
          <p className="font-mono mb-2">
            Dive into a comprehensive list of stores, each packed with exclusive
            deals and discounts. It&apos;s like having a VIP pass to every sale
            in town.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/stores.png`,
              `${BASE_PATH}/couponluxury/store.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

          <p className="font-mono mb-2">
            Whatever you&apos;re into—fashion, tech, food—you&apos;ll find it
            neatly organized here. No more endless scrolling; just pick a
            category and get the best offers instantly.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />
          <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
          <p className="font-mono mb-2">
            Powered by Vue.js, this bad boy allows us to keep the content
            dynamic and up-to-date. From flash sales to limited-time offers, my
            CMS ensures everything&apos;s live and relevant.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/cms-1.png`,
              `${BASE_PATH}/couponluxury/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            Plus, I&apos;ve sprinkled in some extra magic like personalized
            deal recommendations, user-friendly search features, and a sleek,
            responsive design that works like a charm on any device.
          </p>
          <p className="font-mono mb-2">
            CouponLuxury isn&apos;t just a website; it&apos;s your personal deal-hunting
            assistant, ensuring you never miss out on a bargain!
          </p>
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "the-booking-desk",
    category: "Travel",
    title: "The Booking Desk",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "https://thebookingdesk.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    resume: "https://drive.google.com/file/d/1--atfi8oaUfkmqYMyPxQUFTwcY2ic9FS/view?usp=drivesdk",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The Booking Desk is your ultimate travel consultation hub, designed
            to turn your wanderlust dreams into reality. With a focus on smooth
            and visually captivating animations, navigating the site feels like
            a breeze—it&apos;s almost as if the destinations are calling you.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            A sleek, modern interface greets you, featuring the latest travel
            tips, deals, and must-visit spots around the globe.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
          <p className="font-mono mb-2">
            Dive into the curated articles written by travel experts. Whether
            you&apos;re looking for hidden gems or travel hacks, our blog section has
            you covered.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/blogs.png`,
              `${BASE_PATH}/the-booking-desk/blog.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

          <p className="font-mono mb-2">
            Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity CMS
            to manage all the content with ease, ensuring you always get the
            latest and greatest information.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/cms-1.png`,
              `${BASE_PATH}/the-booking-desk/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            With a stunning 100% score on Lighthouse, The Booking Desk isn&apos;t
            just beautiful—it&apos;s built to perform. Whether you&apos;re planning your
            next adventure or just daydreaming, our site delivers a top-notch
            experience that&apos;s both informative and enjoyable.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/my portfolio.png",
    screenshots: ["/assets/projects-screenshots/portfolio/my portfolio.png"],
    live: "http://nareshkhatri.vercel.app",
    github: "https://github.com/Naresh-Khatri/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    resume: "https://drive.google.com/file/d/1--atfi8oaUfkmqYMyPxQUFTwcY2ic9FS/view?usp=drivesdk",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            This is my personal portfolio website, designed to showcase my skills, projects, and experience in a visually engaging and interactive way. The site features a modern UI, smooth animations, and a responsive layout, making it easy for visitors to explore my work and get in touch.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Portfolio Overview</TypographyH3>
          <p className="font-mono mb-2">
            The screenshot below highlights the main landing page of my portfolio, featuring a clean design, easy navigation, and quick access to my top projects and contact information.
          </p>
          <SlideShow images={["/assets/projects-screenshots/portfolio/my portfolio.png"]} />
        </div>
      );
    },
  },
  {
    id: "ghostchat",
    category: "Anonymous chat",
    title: "GhostChat",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://ghostchat.vercel.app",
    github:"https://github.com/Naresh-Khatri/GhostChat",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.supabase],
    },
    resume: "https://drive.google.com/file/d/1--atfi8oaUfkmqYMyPxQUFTwcY2ic9FS/view?usp=drivesdk",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ghostchat is your go-to spot for sending anonymous messages without
            leaving a trace. Powered by Supabase, it&apos;s all about keeping things
            low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
            or just having some fun, Ghostchat ensures your identity stays
            hidden, while your voice is heard. Say what you want, without the
            worry.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
              `${BASE_PATH}/ghostchat/3.png`,
              `${BASE_PATH}/ghostchat/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "jra",
    category: "Result analyzer",
    title: "JNTUA Results Analyzer",
    src: "/assets/projects-screenshots/jra/1.png",
    screenshots: ["1.png"],
    live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    resume: "https://drive.google.com/file/d/1--atfi8oaUfkmqYMyPxQUFTwcY2ic9FS/view?usp=drivesdk",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JNTUA Results Analyzer was a revolutionary tool designed to simplify
            and enhance the experience of accessing academic results. It served
            as a powerful proxy between the JNTUA university results website and
            its users, offering a range of features that made result analysis
            faster and more efficient. Here&apos;s what made it stand out:
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Effortless Results Retrieval
          </TypographyH3>
          {/* Effortless Results Retrieval: */}
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Search all your results using a single roll number, eliminating
              the tedious task of sifting through thousands of rows on the
              official site.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              class-wise results effortlessly by entering a roll number range.
              No more manual searches or filtering.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Faculty members could download batch results in Excel format,
              making administrative tasks a breeze.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Enhanced Data Insights:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Each result came with additional features including:
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong>CGPA Calculations: </strong>Easily track your
                  cumulative grade point average.
                </li>
                <li>
                  <strong>Charts:</strong> Visualize your academic performance
                  with comprehensive charts.
                </li>
                <li>
                  <strong>Future Projections:</strong> Get insights into
                  potential future outcomes based on current performance.
                </li>
                <li>
                  <strong> Backlog Counts: </strong>Keep track of your backlog
                  subjects at a glance.
                </li>
              </ul>
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              The application was significantly faster and more efficient than
              the official site, providing a smoother user experience.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Unfortunately, as of May 2022, the tool stopped working due to the
              introduction of CAPTCHA on the official JNTUA results site, which
              disrupted the seamless functionality of the app. JNTUA Results
              Analyzer transformed the way students and faculty interacted with
              academic results, making it a must-have tool until its unexpected
              shutdown.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
