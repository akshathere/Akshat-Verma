interface workTypes {
  name: string;
  cer_link: string;
  date: string;
  proj: string;
  proj_link: string;
  description: string;
  tags: string[];
  points: string[];
}

export const work_exp: workTypes[] = [
  {
    name: "Coademy",
    cer_link: "",
    date: "July - Sept, 2024",
    proj: "",
    proj_link: "",
    description: "",
    tags: ["SDE", "Internship"],
    points: [
      "Engineered a high-performance backend using RESTful APIs of Express.js, optimizing user authentication via JWT and achieving seamless external API integration, boosting application efficiency by 30%.",
      "Designed and structured scalable APIs tailored for seamless integration into the web application.",
      "Helped the design team in crafting intuitive and visually engaging app designs in Figma, focusing on user centric interfaces, seamless navigation, and cohesive branding to elevate the overall user experience.",
    ],
  },
  {
    name: "DIC MDART",
    cer_link: "",
    date: "June - July, 2023",
    proj: "",
    proj_link: "",
    description: "",
    tags: ["Artificial Intelligence", "Internship"],
    points: [
      "Developed a machine learning model to detect brain tumors and classify their type and stage using MRI images.",
      "Utilized a dataset of ~10,000 MRI scans for training and testing.",
      "Achieved 70% accuracy, demonstrating potential for diagnostic assistance in medical applications.",
      "Focused on image preprocessing, feature extraction, and classification techniques.",
      "Scope for improvement includes advanced architectures and dataset expansion."
    ],
  },
];
