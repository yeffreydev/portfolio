import Header from "@/ui/HeaderShop";

export const metadata = {
  title: "Cart",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <Header />
      {children}
    </body>
  );
}
