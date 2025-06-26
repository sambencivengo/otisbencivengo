import {cn} from "~/lib/utils";
import WeddingTitle from "../components/weddingTitle";
import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cn("w-full h-full mx-auto")}>
      {/* Navbar space - always reserved but no links */}
      <nav className="h-16 hidden md:block">
        <div className="font-bold flex flex-row text-3xl h-full gap-8 text-center items-center justify-center">
          <Link href="/info" className="hover:text-[#e60000]">
            INFO
          </Link>
          <Link href="/rsvp" className="hover:text-[#e60000]">
            RSVP
          </Link>
          <Link href="/faq" className="hover:text-[#e60000]">
            FAQ
          </Link>
        </div>
      </nav>

      {/* Mobile navbar space - always reserved but no links */}
      <nav className=" h-16 md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="font-bold flex flex-row text-2xl h-full gap-4 text-center items-center justify-around">
          <Link href="/info" className="hover:text-[#e60000]">
            INFO
          </Link>
          <Link href="/rsvp" className="hover:text-[#e60000]">
            RSVP
          </Link>
          <Link href="/faq" className="hover:text-[#e60000]">
            FAQ
          </Link>
        </div>
      </nav>

      {/* Spacer for mobile to prevent content from being hidden behind bottom navbar */}
      <div className="h-16 md:hidden"></div>

      <div className="p-4 sm:p-6 md:p-8 lg:p-15">
        <WeddingTitle />
        {children}
      </div>
    </main>
  );
}
