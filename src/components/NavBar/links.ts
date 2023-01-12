import { IconType } from "react-icons";
import * as aiIcons from "react-icons/ai";
interface LinkI {
  path: string;
  name: string;
  icon: IconType;
}
const links: LinkI[] = [
  { path: "/", name: "Home", icon: aiIcons.AiOutlineHome },
  { path: "/projects", name: "Projects", icon: aiIcons.AiOutlineFundProjectionScreen },
  { path: "/contact", name: "Contact", icon: aiIcons.AiOutlineUser },
  { path: "/sponsors", name: "Sponsors", icon: aiIcons.AiOutlineUser },
];

export default links;
