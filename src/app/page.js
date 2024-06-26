import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Landing } from "@/components/landing";
import { Map } from "@/components/map";
import { Navbar } from "@/components/navbar";
import { Question } from "@/components/question";

export default function Home() {
  return (
    <div className="w-full h-[100vh] overflow-y-scroll">
      <Navbar />
      <Landing />
      <About />
      <Question />
      <Map />
      <Footer />
    </div>
  );
}
