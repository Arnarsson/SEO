'use client';

import Link from 'next/link';
import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCustomer } from '@/hooks/useAutumnCustomer';
import { Logo } from './logo';

// Separate component that only renders when Autumn is available
function UserCredits() {
  const { customer } = useCustomer();
  const messageUsage = customer?.features?.messages;
  const remainingMessages = messageUsage ? (messageUsage.balance || 0) : 0;
  
  return (
    <div className="flex items-center text-sm font-medium text-gray-700">
      <span>{remainingMessages}</span>
      <span className="ml-1">credits</span>
    </div>
  );
}

export function Navbar() {
  const { data: session, isPending } = useSession();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut();
      // Small delay to ensure the session is cleared
      setTimeout(() => {
        router.refresh();
        setIsLoggingOut(false);
      }, 100);
    } catch (error) {
      console.error('Logout error:', error);
      setIsLoggingOut(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex items-center space-x-4">
            {session && (
              <>
                <Link
                  href="/services"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Services
                </Link>
                <Link
                  href="/case-studies"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Case Studies
                </Link>
                <Link
                  href="/resources"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Resources
                </Link>
              </>
            )}
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              About
            </Link>
            {session && (
              <UserCredits />
            )}
            {isPending ? (
              <div className="text-sm text-gray-400">Loading...</div>
            ) : session ? (
              <>
                <Link
                  href="/dashboard"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-all duration-200 h-8 px-3 shadow-sm hover:shadow-md"
                >
                  Client Portal
                </Link>
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="btn-firecrawl-default inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 h-8 px-3"
                >
                  {isLoggingOut ? 'Logging out...' : 'Logout'}
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login"
                  className="bg-black text-white hover:bg-gray-800 inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-all duration-200 h-8 px-3 shadow-sm hover:shadow-md"
                >
                  Login
                </Link>
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-all duration-200 h-8 px-3 shadow-sm hover:shadow-md"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}