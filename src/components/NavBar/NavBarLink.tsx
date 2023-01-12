import { Link } from "react-router-dom";
import { ReactElement } from "react";
export default function NavBarLink({ Icon, path, cPath, text, onclick }: { Icon: ReactElement; path: string; cPath: string; text: string; onclick: () => void }) {
  return (
    <li>
      <Link
        className={cPath.replace(/\/\d+$/, "") === path ? "active" : ""}
        onClick={() => {
          onclick();
        }}
        to={path}
      >
        <span>
          {Icon}
          {text}
        </span>
      </Link>
    </li>
  );
}
