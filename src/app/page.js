import { Landing } from "@/components/landing";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full h-[100vh] overflow-y-scroll">
      <Navbar />
      <Landing />
    </div>
  );
}
