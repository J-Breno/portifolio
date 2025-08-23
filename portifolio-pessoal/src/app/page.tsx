import { About } from "../../components/About";
import { Banner } from "../../components/Banner";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
    <div className="w-full bg-gradient-to-b from-[#323B45] to-[#101623] pt-[60px] pb-[45px]">
      <main className="mb-[60px] mx-[150px] w-[1280px] min-h-[3000px] bg-[rgba(30,31,36,1)] rounded-lg shadow-[-10px_10px_40px_0px_rgba(0,0,0,1)]">
        <Header />
        <Banner />
        <About />
      </main>
    </div>
    </>
  );
}
