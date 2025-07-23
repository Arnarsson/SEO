import Link from 'next/link';

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

export function Logo({ className = "", linkClassName = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${linkClassName}`}>
      <div className={`flex items-center ${className}`}>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900 leading-tight">AI Growth</div>
            <div className="text-sm font-medium text-gray-600 -mt-1">Advisors</div>
          </div>
        </div>
      </div>
    </Link>
  );
}