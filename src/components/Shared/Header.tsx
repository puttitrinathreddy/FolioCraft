import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdDocumentScanner } from "react-icons/md";
export const Header = () => {
  return (
    <motion.header 
      className="border-b border-gray-200 bg-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl">FolioCraft</span>
            </Link>
          </div>
          
          <nav className="flex space-x-8">
            <Link 
              href="/portfolioBuilder/builder"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Builder
            </Link>
            <Link 
              href="/portfolioBuilder"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Templates
            </Link>
            <Link 
              href="/examples"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Examples
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};