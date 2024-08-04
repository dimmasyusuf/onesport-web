import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className="bg-background">
        <Navbar />
      </header>
      {children}
      <footer className="mb-[68px] bg-neutral-950 px-6 pt-10 md:mb-0 md:px-8 md:pt-12">
        <Footer />
      </footer>
      <NavbarMobile />
    </>
  );
}
