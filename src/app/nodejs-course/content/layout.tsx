import { Provider } from "./Provider";
import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
