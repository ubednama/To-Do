import { Github } from 'lucide-react';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='text-white py-3 space-y-1'>
      <div className='text-center'>
        Copyright &copy; MyTodoList.
      </div>
      <div className='flex items-center justify-center'>
        Made with ❤️ by <a href="https://github.com/ubednama" className='underline flex items-center justify-center gap-x-2 ml-2' target="_blank" rel="noopener noreferrer"> <Github /> ubednama </a>
    </div>
    </footer >
  );
}
