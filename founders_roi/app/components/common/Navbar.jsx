import Link from "next/link";
import { Button } from "../ui/Button";
import { NAV_LINKS } from "@/constants/navigation";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900/10 bg-slate-950/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg tracking-tight text-white flex items-center gap-2"
        >
          FOUNDERS <span className="text-indigo-500 font-medium">ROI</span>
        </Link>

        {/* Navigation Link list */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <Button variant="secondary" className="hidden sm:inline-block">
            Sign In
          </Button>
          <Button variant="primary">Let's Talk</Button>
        </div>
      </div>
    </header>
  );
};
