import Header from "@/ui/HeaderShop";

export const metadata = {
  title: "yeffreydev shop",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
