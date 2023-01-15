import Sponsor from "../components/Sponsor";
import sponsors from "../data/sponsors";
import styles from "./../assets/css/Sponsors.module.css";
function Sponsors() {
  return (
    <div className="content-container">
      <div className="content-width">
        <div className={styles.list}>
          {sponsors.map((item, index) => {
            return <Sponsor name={item.name} link={item.link} img={item.img} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
