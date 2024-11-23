import Link from "next/link";
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div 
        className="max-w-2xl mx-auto p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-6">Portfolio Builder</h1>
        <p className="text-gray-600 mb-8">
          Create your professional portfolio with our easy-to-use builder
        </p>
        
        <div className="space-x-4">
          <Link 
            href="/portfolioBuilder/builder"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Start Building
          </Link>
          
          <Link
            href="/portfolioBuilder"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View Templates
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
