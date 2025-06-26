import {cn} from "~/lib/utils";
import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cn("w-full h-full mx-auto")}>
      {/* Desktop navbar space - only reserved on desktop */}
      <nav className="h-16 hidden md:block">
        <div className="font-bold flex flex-row text-xl h-full gap-8 text-center items-center justify-center">
          <Link href="/" className="hover:text-[#e60000]">
            HOME
          </Link>
          <Link href="/rsvp" className="hover:text-[#e60000]">
            RSVP
          </Link>
          <Link href="/info" className="hover:text-[#e60000]">
            INFO
          </Link>
          <Link href="/faq" className="hover:text-[#e60000]">
            FAQ
          </Link>
        </div>
      </nav>

      {/* Mobile navbar space - always reserved but no links */}
      <nav className="h-12 md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white">
        <div className="font-bold flex flex-row text-lg h-full gap-4 text-center items-center justify-around px-4">
          <Link href="/" className="hover:text-[#e60000]">
            HOME
          </Link>
          <Link href="/rsvp" className="hover:text-[#e60000]">
            RSVP
          </Link>
          <Link href="/info" className="hover:text-[#e60000]">
            INFO
          </Link>
          <Link href="/faq" className="hover:text-[#e60000]">
            FAQ
          </Link>
        </div>
      </nav>

      <div className="p-4 sm:p-6 md:p-8 lg:p-15">{children}</div>
    </main>
  );
}
