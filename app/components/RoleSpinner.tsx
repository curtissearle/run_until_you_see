'use client';

import { useState, useEffect, useRef } from 'react';
import items from '../../data/items.json';

type SpinnerState = 'idle' | 'spinning' | 'slowing' | 'finished';

export default function RoleSpinner() {
  const [currentItem, setCurrentItem] = useState('Ready to start your run?');
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinnerState, setSpinnerState] = useState<SpinnerState>('idle');
  const [finalItem, setFinalItem] = useState<string | null>(null);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomItem = () => {
    return items[Math.floor(Math.random() * items.length)];
  };

  const startSpinner = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setSpinnerState('spinning');
    setFinalItem(null);
    
    // Fast spinning phase (100ms intervals)
    intervalRef.current = setInterval(() => {
      setCurrentItem(getRandomItem());
    }, 100);

    // After 0.5 seconds, start slowing down (reduced from 2 seconds)
    timeoutRef.current = setTimeout(() => {
      setSpinnerState('slowing');
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // Slowing down phase - increasing intervals (faster progression)
      let interval = 120;
      const slowDown = () => {
        setCurrentItem(getRandomItem());
        interval += 40; // Increase interval each time to slow down (reduced from 50)
        
        if (interval <= 500) { // Stop earlier (reduced from 800)
          setTimeout(slowDown, interval);
        } else {
          // Final selection
          const selected = getRandomItem();
          setCurrentItem(selected);
          setFinalItem(selected);
          setSpinnerState('finished');
          setIsSpinning(false);
        }
      };
      
      slowDown();
    }, 500); // Reduced from 2000ms to 500ms
  };

  const resetSpinner = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setIsSpinning(false);
    setSpinnerState('idle');
    setCurrentItem('Ready to start your run?');
    setFinalItem(null);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
      {/* Display Area */}
      <div className="mb-8">
        <div className="h-32 md:h-40 flex items-center justify-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-dashed border-indigo-200 dark:border-gray-500">
          <div className="text-center px-4">
            {spinnerState === 'idle' ? (
              <div className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                {currentItem}
              </div>
            ) : spinnerState === 'finished' && finalItem ? (
              <div>
                <div className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
                  Run until you see a:
                </div>
                <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 transform scale-110">
                  {finalItem}
                </div>
              </div>
            ) : (
              <div>
                <div className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
                  Run until you see a:
                </div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 animate-pulse">
                  {currentItem}
                </div>
              </div>
            )}
            {spinnerState === 'finished' && finalItem && (
              <div className="mt-2">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                  🎉 Start Running!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        {spinnerState === 'idle' || spinnerState === 'finished' ? (
          <button
            onClick={spinnerState === 'finished' ? resetSpinner : startSpinner}
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            {spinnerState === 'finished' ? 'Roll Again' : 'Roll'}
          </button>
        ) : (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 dark:border-indigo-400 mb-4"></div>
            <span className="text-gray-600 dark:text-gray-400 font-medium">
              {spinnerState === 'spinning' ? 'Rolling...' : 'Finalizing...'}
            </span>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Choose from {items.length} things to see on your run</p>
      </div>
    </div>
  );
}