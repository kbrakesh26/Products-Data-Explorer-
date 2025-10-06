'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import type { Navigation } from '@/types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Navigation[];
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <Fragment>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-900"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/"
                className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={onClose}
              >
                Home
              </Link>
            </li>
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/categories?nav=${item.id}`}
                  className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/products"
                className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={onClose}
              >
                All Products
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={onClose}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className="block text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}