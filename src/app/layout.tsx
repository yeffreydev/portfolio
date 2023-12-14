import "./globals.css";
import SaveUserInfo from "./SaveUserInfo";
import { AppProvider } from "./AppProvider";

export const metadata = {
  title: "Main - Yeffrey Espinoza",
  description: "Software Developer, Entrepreneur & Programing Coach.",
  keywords: "Yeffrey Espinoza, yeffrey,  yeffrey espinoza profile,yeffrey dev, Programing Coach.",
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
