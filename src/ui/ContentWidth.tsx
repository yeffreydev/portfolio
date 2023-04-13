export default function ContenWidth({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full px-2 md:w-9/12 lg:w-8/12">{children}</div>;
}
