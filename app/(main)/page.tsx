import Image from "next/image";
import WeddingTitle from "../components/weddingTitle";

export default function Home() {
  return (
    <main className="flex flex-col">
      <WeddingTitle />
      <div className="mx-auto pt-12">
        <Image src="/boat.png" quality={25} width={800} height={600} alt="Drawing of a boat at sea" />
      </div>
    </main>
  );
}
