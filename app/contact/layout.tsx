import Navbar from "../ui/navbar";

 export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <Navbar />
      {children}
    </div>
  );
}