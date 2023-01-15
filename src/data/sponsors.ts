export interface SponsorI {
  link: string;
  name: string;
  img: string;
}

const sponsors: SponsorI[] = [{ link: "", name: "monketmen#001", img: require("./../assets/img/sponsors/monketmen.png") }];
export default sponsors;
