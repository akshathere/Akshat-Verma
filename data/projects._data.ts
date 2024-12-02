//Project Preview Images
import covid from "../public/img/projects-preview/covid-19.png";
import instagram from "../public/img/projects-preview/instagram-clone.png";
import ment from "../public/img/projects-preview/ment-ally.png";
import shrinkit from "../public/img/projects-preview/shrinkit.png";
import svaasthy from "../public/img/projects-preview/svaasthy.png";
import whatsapp from "../public/img/projects-preview/whatsapp-clone.png";
import weather from "../public/img/projects-preview/weather.png";
import chess_app from "../public/img/projects-preview/Chess.png";

interface projects_data_type {
  name: string;
  tags: string[];
  description: string;
  github: string;
  demo: string;
  link: any;
}

export const projects_data: projects_data_type[] = [
  {
    name: "Chess App",
    tags: ["React.js", "Node.js", "Typescript", "Websocket", "Express.js"],
    description:
      "Chess.com type of platform where users from anywhere in the world can connect and play with each other seamlessly",
    github: "https://github.com/Pavitra554/IOT_App/",
    demo: "https://freechess-com.vercel.app/",
    link: chess_app,
  }
];
