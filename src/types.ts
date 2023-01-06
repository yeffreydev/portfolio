interface TechItemI {
  link: string;
  name: string;
}
export interface ProjectI {
  title: string;
  description: string;
  img?: string;
  id: string | number;
  codeurl?: string;
  imgsProject?: string[];
  stackTech?: TechItemI[];
}
