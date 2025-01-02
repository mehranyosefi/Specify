import { ReactElement } from "react";

export type DesignTokenMovies = {
  unified: boolean;
  effortless: boolean;
  customizabl: boolean;
};
export type PropsButton = {
  prepend?: string | ReactElement;
  content: string | ReactElement;
  append?: string | ReactElement;
  styles?: object;
  to?: string;
  className?: string;
};

export type PropsSpecifyLove = {
  settings: object;
  style: object;
  className: string;
};

//TODO define types for cases items
export const studyCasesItems = [
  {
    id: 1,
    title: "Carrefour",
    apps: ["figma", "github", "code", "dollar"],
    person: {
      name: "Jeremy Dahan",
      role: "Design System Designer",
      description:
        '"Specify brought us confidence and ease of mind. Before, we used to be cautious and hesitant before updating our design tokens. We are now confident about updating a token, rolling back to a previous version, or even trying new ones."',
    },
    radiantColor: "#1D58C0",
  },
  {
    id: 2,
    title: "Nortal",
    apps: ["figma", "code"],
    person: {
      name: "Andrew Smith",
      role: "Head of Design Systems",
      description:
        '"Thanks to Specify, the mindset of the whole team has evolved, and it is really changed how everybody thinks about how they approach component design and development."',
    },
    radiantColor: "#009639",
  },
  {
    id: 3,
    title: "Pitch",
    apps: ["figma", "github", "code", "dollar"],
    person: {
      name: "Roy Van Rooijen",
      role: "Product designer",
      description:
        '"The automation from design to code with Specify is incredibly powerful. The ability to reference the same tokens and assets in Figma — and in our codebase — saves us an incredible amount of time, while reducing manual, error-prone work."',
    },
    radiantColor: "#8D4AF7",
  },
];

//TODO define types for parserItems
export const parserItems = {
  firstRow: [
    {
      id: 1,
      text: "to-flutter",
      icon: "settings",
      to: "#flutter",
      background: "rgb(150, 199, 242)" /* blue */,
    },
    {
      id: 2,
      text: "camelcasify",
      icon: "A",
      to: "/camelcasify",
      background: "rgb(255, 211, 135)" /* yellow */,
    },
    {
      id: 3,
      text: "replace-string",
      icon: "raad",
      to: "#replace-strin",
      background: "rgb(145, 207, 172)" /* green */,
    },
    {
      id: 4,
      text: "to-css-custome-properties",
      icon: "settings",
      to: "#to-css",
      background: "rgb(150, 199, 242)" /* blue */,
    },
    {
      id: 5,
      text: "omit",
      icon: "raad",
      to: "#omit",
      background: "rgb(145, 207, 172)" /* green */,
    },
    {
      id: 6,
      text: "snakecasify",
      icon: "A",
      to: "/snakecasify",
      background: "rgb(255, 211, 135)" /* yellow */,
    },
  ],
  secondRow: [
    {
      id: 1,
      text: "to-tailwind",
      icon: "settings",
      to: "#tailwind",
      background: "rgb(150, 199, 242)" /* blue */,
    },
    {
      id: 2,
      text: "prefix-by",
      icon: "raad",
      to: "#prefix-by",
      background: "rgb(145, 207, 172)" /* green */,
    },
    {
      id: 3,
      text: "filter",
      icon: "raad",
      to: "#filter",
      background: "rgb(145, 207, 172)" /* green */,
    },
    {
      id: 4,
      text: "to-css-text-file",
      icon: "settings",
      to: "#to-css-text-file",
      background: "rgb(150, 199, 242)" /* blue */,
    },
    {
      id: 5,
      text: "kebabcasify",
      icon: "A",
      to: "/kebabcasify",
      background: "rgb(255, 211, 135)" /* yellow */,
    },
    {
      id: 6,
      text: "convert-font",
      icon: "raad",
      to: "#convert-font",
      background: "rgb(145, 207, 172)" /* green */,
    },
  ],
  thirdRow: [
    {
      id: 1,
      text: "to-react-native",
      icon: "settings",
      to: "#react-native",
      background: "rgb(150, 199, 242)" /* blue */,
    },
    {
      id: 2,
      text: "pascalcasify",
      icon: "A",
      to: "/pascalcasify",
      background: "rgb(255, 211, 135)" /* yellow */,
    },
    {
      id: 3,
      text: "px-to-rem",
      icon: "raad",
      to: "#px-to-rem",
      background: "rgb(145, 207, 172)" /* green */,
    },
    {
      id: 4,
      text: "to-dsp",
      icon: "settings",
      to: "#to-dsp",
      background: "rgb(150, 199, 242)" /* blue */,
    },
    {
      id: 5,
      text: "round-number",
      icon: "raad",
      to: "#round-number",
      background: "rgb(145, 207, 172)" /* green */,
    },
  ],
  fourRow: [
    {
      id: 1,
      text: "to-typescript-defination",
      icon: "settings",
      to: "#react-typescript",
      background: "rgb(150, 199, 242)" /* blue */,
    },
    {
      id: 2,
      text: "to-css-font-import",
      icon: "settings",
      to: "#css-import",
      background: "rgb(150, 199, 242)" /* blue */,
    },
    {
      id: 3,
      text: "svgo",
      icon: "raad",
      to: "#svgo",
      background: "rgb(145, 207, 172)" /* green */,
    },
    {
      id: 4,
      text: "svg-to-jsx",
      icon: "settings",
      to: "#svg-to-jsx",
      background: "rgb(150, 199, 242)" /* blue */,
    },
    {
      id: 5,
      text: "sort-by",
      icon: "raad",
      to: "#sort-by",
      background: "rgb(145, 207, 172)" /* green */,
    },
  ],
};

export const setupt_output_description_items = [
  {
    title: "Stay flexible",
    description: `Sync tokens from multiple sources to one repository, extract them in any structure using our SDK, GitHub integration, or CLI. We got you covered once you want to scale.`,
  },
  {
    title: "Reduce error margins",
    description: `Collaboration has never been easier, resulting in less errors and redundant meetings. Any change made is easily transferred and communicated with other teams.`,
  },
  {
    title: "Automate",
    description: `Automatically sync, convert, and optimize your design tokens and vectors. Set up automated pull request with our Github integration.`,
  },
  {
    title: "Save time",
    description: `Set up once, get benefits instantly. We guarantee time savings for you design and development teams while you keep doing what you’re good at and what you enjoy.`,
  },
  {
    title: "Prioritize quality",
    description: `When you’re able to put quality above anything else, it means your processes are well adopted. We can help you to prioritize the quality of your digital products.`,
  },
  {
    title: "Get the support you need",
    description: `We're here to help you to get the output you need. Feel free to challenge us if you think your output is not possible to generate!`,
  },
];
export const productTeamItems = [
  {
    title: "Pitch",
    description: `"The automation from design to code with Specify is incredibly powerful. The ability to reference the same tokens and assets in Figma — and in our codebase — saves us an incredible amount of time, while reducing manual, error-prone work.”`,
    person: {
      name: "Roy Van Rooijen",
      role: "Product Designer",
    },
    img: "/src/assets/img/product-teams/RoyVanRooijen.avif",
  },
  {
    title: "Strapi",
    description: `"We sync our design tokens and icons to our tools with Specify, and it gives our design and engineering teams peace of mind!”`,
    person: {
      name: "Hicham El Abbassi",
      role: "Front-end Developer",
    },
    img: "/src/assets/img/product-teams/HichamElAbbassi.avif",
  },
  {
    title: "MakeMusic",
    description: `"Specify is the missing link between our design and engineering teams. It definitely helped us integrate design tokens in an automated way very quickly and seamlessly into our codebase.”`,
    person: {
      name: "Gabriel Cousin",
      role: "Front-end Developer",
    },
    img: "/src/assets/img/product-teams/GabrielCousin.avif",
  },
  {
    title: "Poket",
    description: `"Specify helps our designers keep their assets and design decisions in sync with the actual code, avoiding extra development effort and making design implementation much more flexible.”`,
    person: {
      name: "Niels Boey",
      role: "Product Designer",
    },
    img: "/src/assets/img/product-teams/NielsBoey.avif",
  },
  {
    title: "Pelo studio",
    description: `"Specify is the perfect addition to our front-end boilerplate. Tokens, assets, fonts: everything comes straight out from Figma. Less configuration, more creative development. Our team loves it!”`,
    person: {
      name: "Alexis oney",
      role: "Lead Developer",
    },
    img: "/src/assets/img/product-teams/Alexisoney.avif",
  },
];

export const footerMenuItems = [
  {
    category: "Product",
    items: [
      {
        title: "Documentation",
        to: "#documentation",
      },
      {
        title: "Changelog",
        to: "#changelog",
      },
      {
        title: "Pricing",
        to: "#pricing",
      },
      {
        title: "Parsers",
        to: "#parsers",
      },
      {
        title: "STDF",
        to: "#STDF",
      },
      {
        title: "Use Cases",
        to: "#usecases",
      },
      {
        title: "Launch Week",
        to: "#launchWeek",
      },
    ],
  },
  {
    category: "Resources",
    items: [
      {
        title: "Guide",
        to: "#guide",
      },
      {
        title: "Blog",
        to: "#blog",
      },
      {
        title: "Customers",
        to: "#customers",
      },
      {
        title: "Help Center",
        to: "#helpCenter",
      },
    ],
  },
  {
    category: "Company",
    items: [
      {
        title: "Press kit",
        to: "#pressKit",
      },
      {
        title: "Climate",
        to: "#climate",
      },
      {
        title: "Jobs",
        to: "#jobs",
      },
      {
        title: "Contact us",
        to: "#contactUs",
      },
    ],
  },
  {
    category: "Community",
    items: [
      {
        title: "Discord",
        to: "#discord",
      },
      {
        title: "Twitter",
        to: "#twitter",
      },
      {
        title: "Github",
        to: "#G=github",
      },
      {
        title: "Dribble",
        to: "#dribble",
      },
    ],
  },
];
