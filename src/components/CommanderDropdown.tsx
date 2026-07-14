'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface CommanderDropdownProps {
  title: string;
  kvkCategories: { label: string; href: string }[];
}

export default function CommanderDropdown({ title, kvkCategories }: CommanderDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 underline-expand text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
        {title}
        <ChevronDownIcon className="h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full pt-2 w-48">
          <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {kvkCategories.map((category) => (
                <Link
                  key={category.label}
                  href={category.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
