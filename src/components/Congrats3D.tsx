import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Send, RotateCcw } from 'lucide-react';
import Scene3D from './Scene3D';

type Mode = 'form' | 'celebration';

const formVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: -30, scale: 0.9, transition: { duration: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const congratsVariants = {
  hidden: { opacity: 0, scale: 0.5, rotateX: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
};

const confettiVariants = {
  animate: {
    y: [0, -100, 0],
    x: [0, 50, -50, 0],
    rotate: [0, 360],
    scale: [0.5, 1, 0.5],
    opacity: [0, 1, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

function ConfettiPiece({ delay }: { delay: number }) {
  const colors = ['#ffd700', '#ff6b8b', '#00ffff', '#ff00ff', '#76c47a', '#ff8ba7'];
  return (
    <motion.div
      className="absolute w-3 h-3 rounded-full"
      style={{
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      variants={confettiVariants}
      initial={{ opacity: 0 }}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.random() * 100 - 50, 0],
        rotate: [0, 360, 720],
        scale: [0.5, 1, 0.5],
        opacity: [0, 1, 0],
        transition: {
          duration: 2 + Math.random() * 2,
          delay,
          repeat: Infinity,
          ease: 'linear',
        },
      }}
    />
  );
}

export default function Congrats3D() {
  const [mode, setMode] = useState<Mode>('form');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    localStorage.setItem('userName', name);
    localStorage.setItem('userAge', age);
    setMode('celebration');
  };

  const handleReset = () => {
    setName('');
    setAge('');
    setMode('form');
  };

  const celebrationMessage = age
    ? `Congratulations, ${name}! You are ${age} years young and absolutely fantastic!`
    : `Congratulations, ${name}! Way to go!`;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D mode={mode} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {mode === 'celebration' &&
          Array.from({ length: 60 }).map((_, i) => (
            <ConfettiPiece key={i} delay={Math.random() * 3} />
          ))}
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto px-4">
        <AnimatePresence mode="wait">
          {mode === 'form' && (
            <motion.div
              key="form"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl"
            >
              <motion.div
                variants={itemVariants}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-4 shadow-lg shadow-primary/30">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-extrabold text-white">
                  3D Celebration App
                </h1>
                <p className="text-gray-300 text-sm mt-2">
                  Enter your details and get celebrated in 3D!
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 focus:border-primary focus:outline-none text-white text-sm placeholder-gray-400 transition-colors"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Age
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="120"
                    placeholder="e.g. 25"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 focus:border-primary focus:outline-none text-white text-sm placeholder-gray-400 transition-colors"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(118, 196, 122, 0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  Get 3D Congratulated
                </motion.button>
              </form>
            </motion.div>
          )}

          {mode === 'celebration' && (
            <motion.div
              key="celebration"
              variants={congratsVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-2xl text-center"
            >
              <motion.div
                variants={itemVariants}
                className="mb-6 flex justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-14 h-14 text-yellow-300 fill-yellow-300" />
                </motion.div>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-primary to-secondary mb-4"
              >
                🎉 Congratulations! 🎉
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-200 leading-relaxed mb-8"
              >
                {celebrationMessage}
              </motion.p>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Congratulations Someone Else
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
