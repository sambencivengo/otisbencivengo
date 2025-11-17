import WeddingTitle from "../components/weddingTitle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <WeddingTitle />
      <div className="text-black mx-auto pt-8 text-2xl md:text-3xl flex flex-col max-w-2xl px-4 text-center prose prose-lg">
        <p>Thank you so much for attending our wedding. It was a perfect day.</p>

        <p className="mt-4 md:mt-10">If you would like to see photos of the event, you can {" "}
          <Link className="text-wedding-red hover:text-wedding-red underline" href="https://annamarialopez.pixieset.com/bekahandsam/">click here</Link>
          .</p>
        {
          /*
        <Image src="/boat.png" quality={25} width={800} height={600} alt="Drawing of a boat at sea" />
           */
        }

      </div>
    </main>
  );
}
