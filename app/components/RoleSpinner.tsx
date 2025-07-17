'use client';

import { useState, useEffect, useRef } from 'react';
import roles from '../../data/roles.json';

type SpinnerState = 'idle' | 'spinning' | 'slowing' | 'finished';

export default function RoleSpinner() {
  const [currentRole, setCurrentRole] = useState('Ready to discover your role?');
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinnerState, setSpinnerState] = useState<SpinnerState>('idle');
  const [finalRole, setFinalRole] = useState<string | null>(null);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomRole = () => {
    return roles[Math.floor(Math.random() * roles.length)];
  };

  const startSpinner = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setSpinnerState('spinning');
    setFinalRole(null);
    
    // Fast spinning phase (100ms intervals)
    intervalRef.current = setInterval(() => {
      setCurrentRole(getRandomRole());
    }, 100);

    // After 2 seconds, start slowing down
    timeoutRef.current = setTimeout(() => {
      setSpinnerState('slowing');
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // Slowing down phase - increasing intervals
      let interval = 150;
      const slowDown = () => {
        setCurrentRole(getRandomRole());
        interval += 50; // Increase interval each time to slow down
        
        if (interval <= 800) {
          setTimeout(slowDown, interval);
        } else {
          // Final selection
          const selected = getRandomRole();
          setCurrentRole(selected);
          setFinalRole(selected);
          setSpinnerState('finished');
          setIsSpinning(false);
        }
      };
      
      slowDown();
    }, 2000);
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
    setCurrentRole('Ready to discover your role?');
    setFinalRole(null);
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
            <div 
              className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                spinnerState === 'spinning' 
                  ? 'text-indigo-600 dark:text-indigo-400 animate-pulse' 
                  : spinnerState === 'finished' && finalRole
                  ? 'text-green-600 dark:text-green-400 transform scale-110'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {currentRole}
            </div>
            {spinnerState === 'finished' && finalRole && (
              <div className="mt-2">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                  🎉 Your Role!
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
            {spinnerState === 'finished' ? 'Spin Again' : 'Discover Your Role'}
          </button>
        ) : (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 dark:border-indigo-400 mb-4"></div>
            <span className="text-gray-600 dark:text-gray-400 font-medium">
              {spinnerState === 'spinning' ? 'Spinning...' : 'Finalizing...'}
            </span>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Choose from {roles.length} exciting tech roles</p>
      </div>
    </div>
  );
}