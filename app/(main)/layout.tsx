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
          <Link href="/rsvp" className="hover:text-wedding-red">
            RSVP
          </Link>
          <Link href="/about" className="hover:text-wedding-red">
            ABOUT
          </Link>
          <Link href="/faq" className="hover:text-wedding-red">
            FAQ
          </Link>
          <Link href="/registry" className="hover:text-wedding-red">
            REGISTRY
          </Link>

        </div>
      </nav>

      {/* Mobile navbar space - always reserved but no links */}
      <nav className="font-cormorant text-lg border-t-2 px-5 w-full h-16 md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-[750px] mx-auto h-full px-4">
          <div className="font-bold flex flex-row h-full gap-6 text-center items-center justify-center px-10">
            <Link href="/rsvp" className="hover:text-wedding-red">
              RSVP
            </Link>
            <Link href="/about" className="hover:text-wedding-red">
              ABOUT
            </Link>
            <Link href="/faq" className="hover:text-wedding-red">
              FAQ
            </Link>
            <Link href="/registry" className="hover:text-wedding-red">
              REGISTRY
            </Link>
          </div>
        </div>
      </nav>
      <div className="p-4 sm:p-6 mx-auto max-w-[750px] w-full">{children}</div>
    </main>
  );
}
