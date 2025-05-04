import { Password } from "./components/password";

export default function Home() {
  return (
    //    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="w-full mx-auto bg-amber-500" >
      <div className="text-white  mx-auto bg-red-800 w-4/12 justify-center items-center italic font-semibold text-xl">
        <p>Rebekah & Sam</p>
        <p>10/10/2025</p>

        <Password />
      </div>
    </main>
    //   </div>
  );
}
