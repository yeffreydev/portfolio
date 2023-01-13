import { IconType } from "react-icons";
import * as aiIcons from "react-icons/ai";
import * as siIcons from "react-icons/si";
import * as bsIcons from "react-icons/bs";

interface LinkI {
  path: string;
  name: string;
  icon: IconType;
}
const links: LinkI[] = [
  { path: "/", name: "Home", icon: aiIcons.AiOutlineHome },
  { path: "/projects", name: "Projects", icon: aiIcons.AiOutlineFundProjectionScreen },
  { path: "/contact", name: "Contact", icon: aiIcons.AiOutlineUser },
  { path: "/sponsors", name: "Sponsors", icon: siIcons.SiGithubsponsors },
  { path: "/posts", name: "posts", icon: bsIcons.BsFileEarmarkPostFill },
];
export const moreLinks: LinkI[] = [
  {
    path: "/sponsors",
    name: "Sponsors",
    icon: siIcons.SiGithubsponsors,
  },
  { path: "/posts", name: "posts", icon: bsIcons.BsFileEarmarkPostFill },
];

export default links;
