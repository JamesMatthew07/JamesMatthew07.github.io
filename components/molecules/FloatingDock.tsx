"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin, IconHome, IconTerminal2 } from "@tabler/icons-react";
import { useEffect, useState } from 'react';

export default function FloatingDockk() {
  const [isVisible, setIsVisible] = useState(true);
  let scrollTimeout: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      
      // Clear the previous timeout
      clearTimeout(scrollTimeout);
      
      // Set a new timeout to show the dock after scrolling stops
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 150); // Adjust this value to change how long after scrolling stops before showing the dock
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className={`transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <FloatingDock items={links} />
    </div>
  );
}
