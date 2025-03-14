import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sun as Gun, Heart } from 'lucide-react';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<'yes' | 'no' | null>(null);

  const handleAnswer = (answer: 'yes' | 'no') => {
    setResult(answer);
    setShowResult(true);

    if (answer === 'no') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setTimeout(() => {
        window.location.href = 'https://www.xvideos.com';
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center">
        {!showResult ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Você é o Rhanderson?
            </h1>
            <div className="space-x-4">
              <button
                onClick={() => handleAnswer('yes')}
                className="px-8 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-colors"
              >
                Sim
              </button>
              <button
                onClick={() => handleAnswer('no')}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Não
              </button>
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            {result === 'yes' ? (
              <div className="text-2xl font-bold text-pink-500 flex items-center justify-center gap-3">
                <Heart className="animate-bounce" />
                Você é viado
                <Heart className="animate-bounce" />
              </div>
            ) : (
              <div className="space-y-4">
                <Gun className="w-16 h-16 text-blue-500 mx-auto" />
                <p className="text-2xl font-bold text-blue-500">
                  Vamos jogar Valorant agora galera, hoje o imt vem
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;