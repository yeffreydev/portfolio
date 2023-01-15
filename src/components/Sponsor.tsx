import { SponsorI } from "../data/sponsors";
import styles from "./../assets/css/components/Sponsor.module.css";
export default function Sponsor(p: SponsorI) {
  return (
    <div className={styles.sponsor}>
      {p.link ? (
        <a href={p.link} target={"_blank"} rel="noreferrer">
          <img src={p.img} alt={p.name} />
        </a>
      ) : (
        <img src={p.img} alt={p.name} />
      )}
    </div>
  );
}
