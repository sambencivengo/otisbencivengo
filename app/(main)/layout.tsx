import { cn } from "~/lib/utils";
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
        <div className="font-cormorant font-bold flex flex-row text-xl h-full gap-8 text-center items-center justify-center">
          <Link href="/" className="hover:text-wedding-red">
            HOME
          </Link>
          <Link href="/rsvp" className="hover:text-wedding-red">
            RSVP
          </Link>
          <Link href="/about" className="hover:text-wedding-red">
            ABOUT
          </Link>
          <Link href="/faq" className="hover:text-wedding-red">
            FAQ
          </Link>
        </div>
      </nav>

      {/* Mobile navbar space - always reserved but no links */}
      <nav className="font-cormorant text-2xl border-t-2 h-16 md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white">
        <div className="font-bold flex flex-row  h-full gap-4 text-center items-center justify-around px-4 border-black">
          <Link href="/" className="hover:text-wedding-red">
            HOME
          </Link>
          <Link href="/rsvp" className="hover:text-wedding-red">
            RSVP
          </Link>
          <Link href="/about" className="hover:text-wedding-red">
            ABOUT
          </Link>
          <Link href="/faq" className="hover:text-wedding-red">
            FAQ
          </Link>
        </div>
      </nav>

      <div className="p-4 sm:p-6 mx-auto max-w-[750px] w-full">{children}</div>
    </main>
  );
}
