import Header from "@/ui/Header";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
function ServicesLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="mt-[65px]">{children}</div>
    </>
  );
}

export default ServicesLayout;
