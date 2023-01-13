import styles from "./styles.module.css";
import { moreLinks } from "./links";
import NavBarLink from "./NavBarLink";
export default function Dropdown({ cPath, onclick }: { cPath: string; onclick: () => void }) {
  return (
    <div className={styles.dropdown}>
      <button className={styles.more}>More</button>
      <ul className={styles.dropdown_ul}>
        {moreLinks.map((item, index) => {
          return <NavBarLink key={index} onclick={onclick} text={item.name} cPath={cPath} path={item.path} Icon={<item.icon />} />;
        })}
      </ul>
    </div>
  );
}
