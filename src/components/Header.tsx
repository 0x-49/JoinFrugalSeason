import { useRouter } from 'next/router';
import Logo from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import Link from "next/link"

const Header = () => {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => router.push("/")}
        >
          <Logo />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Frugal Season
          </span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Reviews
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <Button 
            variant="outline"
            className="hidden sm:flex"
            asChild
          >
            <Link href="#features">Explore Features ✨</Link>
          </Button>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            asChild
          >
            <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">Join Now 🚀</a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;