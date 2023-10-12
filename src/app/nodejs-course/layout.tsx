import ContentContainer from "@/ui/ContentContainer";
import Header from "@/ui/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso de NodeJS - version 1.0 por Yeffrey Espinoza",
  description: "Me complace dar este Curso de NodeJS, donde aprenderás los conceptos de backend con NodeJS con clases 100% en vivo",
  keywords: ["Yeffrey Espinoza", "yeffreydev", "curso de NodeJS", "nodejs", "curso"],
};
const NodejsCourseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <Header />
        <ContentContainer>{children}</ContentContainer>
      </body>
    </html>
  );
};

export default NodejsCourseLayout;
