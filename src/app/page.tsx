import { ClusttrWorks, FirstToKnow, Hero, InfoSection } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <InfoSection />
      <ClusttrWorks />
      <FirstToKnow />
    </main>
  );
}
