import "./globals.css";
import SaveUserInfo from "./SaveUserInfo";
import { AppProvider } from "./AppProvider";

export const metadata = {
  title: "About - Yeffrey Espinoza",
  description: "I am a software developer, born in Peru, who has a passion for crafting solutions and thrives on the challenges of programming.",
  keywords: "Yeffrey Espinoza, yeffrey espinoza cv, yeffrey,  yeffrey espinoza profile,yeffrey dev, reactjs, nodejs freelancer, yeffrey.dev",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
          <SaveUserInfo />
        </AppProvider>
      </body>
    </html>
  );
}
