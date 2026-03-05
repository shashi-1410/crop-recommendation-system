import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-lime-200 flex items-center justify-center text-white px-4 relative overflow-hidden">
      {/* Background image overlay */}
      <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4"
  style={{ backgroundImage: "url('/agriculture.jpg')" }}
>

    
      </div>

      {/* Animated content box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-black/60 backdrop-blur-sm p-10 rounded-3xl max-w-2xl w-full text-center shadow-2xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 leading-tight text-green-100">🌾 Welcome to Smart Crop Advisor</h1>
        <p className="text-lg text-green-200 mb-8">
          Predict the best crop for your farm using real agricultural parameters like temperature, pH, and rainfall.
        </p>
        <Link
          to="/recommend"
          className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-full transition-all shadow-lg"
        >
          🚀 Get Started
        </Link>
      </motion.div>
    </div>
  );
}