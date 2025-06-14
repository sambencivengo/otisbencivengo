import { Password } from "./components/password";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-4 mx-auto font-jules font-bold text-center p-4 sm:p-6 md:p-8 lg:p-10 h-full">
      <p className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Bekah & Sam</p>
      <p className="text-3xl sm:text-3xl md:text-4xl tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em]">10 | 10 | 2025</p>

      <p className="text-3xl sm:text-3xl md:text-4xl tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em]">NY | NY</p>
      {/* this is a paceholder div for an image, it needs to be about a quarter of the hight of the page and centered */}
      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] bg-red-500"></div>
    </main>
  );
}
