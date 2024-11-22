import React from 'react';
import { Cpu } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Cpu className="h-8 w-8 text-indigo-600" />
      <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
        Dravit
      </span>
    </div>
  );
}