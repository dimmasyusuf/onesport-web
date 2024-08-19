'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Button} from './ui/button';
import {VisuallyHidden} from '@radix-ui/react-visually-hidden';
import {RiArrowRightSLine} from 'react-icons/ri';
import {Cross2Icon} from '@radix-ui/react-icons';
import AuthDialog from './AuthDialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export default function NavbarMobileMenu() {
  return (
    <Drawer>
      <DrawerTrigger className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground md:hidden">
        <Image src="/images/icons/menu.svg" height={24} width={24} alt="Menu Icon" />
      </DrawerTrigger>
      <DrawerContent>
        <section className="flex flex-col gap-4">
          <MobileMenuHeader />

          <div className="flex flex-col gap-6 px-6 pb-6">
            <MobileMenu />
            <MobileMenuFooter />
          </div>
        </section>
      </DrawerContent>
    </Drawer>
  );
}

function MobileMenuHeader() {
  return (
    <div className="relative flex items-center justify-between border-b px-6">
      <DrawerHeader className="w-full px-0">
        <DrawerTitle className="text-left">Menu</DrawerTitle>
        <VisuallyHidden>
          <DrawerDescription>
            Jelajahi opsi untuk menjadi mitra OneSport, sewa lapangan, cek pesanan, atau ganti
            bahasa.
          </DrawerDescription>
        </VisuallyHidden>
      </DrawerHeader>
      <DrawerClose className="absolute right-6 top-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <Cross2Icon className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </DrawerClose>
    </div>
  );
}

function MobileMenu() {
  const menuItems = [
    {name: 'Jadi Partner OneSport', path: '#'},
    {name: 'Sewa Lapangan', path: '#'},
    {name: 'Cek Pesanan', path: '#'},
    {name: 'Bahasa', path: '#'},
  ];

  return (
    <div className="flex flex-col gap-2">
      {menuItems.map(menu => (
        <Button
          key={menu.name}
          asChild
          size="lg"
          variant="ghost"
          className="flex justify-between rounded-none px-0 font-normal hover:bg-background hover:text-muted-foreground"
        >
          <Link href={menu.path}>
            {menu.name} <RiArrowRightSLine className="h-6 w-6" />
          </Link>
        </Button>
      ))}
    </div>
  );
}

function MobileMenuFooter() {
  const [authVariant, setAuthVariant] = useState<string>('login');
  const [showAuthDialog, setShowAuthDialog] = useState<boolean>(false);

  const handleAuthVariant = (variant: string) => {
    setAuthVariant(variant);
    setShowAuthDialog(true);
  };

  return (
    <DrawerFooter className="flex flex-row items-center gap-2 p-0">
      {showAuthDialog && (
        <AuthDialog
          authVariant={authVariant}
          showAuth={showAuthDialog}
          setShowAuth={setShowAuthDialog}
        />
      )}

      <Button
        variant="outline"
        size="lg"
        className="w-full px-4"
        onClick={() => handleAuthVariant('login')}
      >
        Masuk
      </Button>
      <Button size="lg" className="w-full px-4" onClick={() => handleAuthVariant('email')}>
        Daftar
      </Button>
    </DrawerFooter>
  );
}
