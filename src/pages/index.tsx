
import React from 'react';
import ChristmasCat from '@/components/ChrismasCcat'
import Snow from '@/components/Snow';

export default function Home() {
  return (
    <Snow>
      <div className='bg-slate-700'>
        <ChristmasCat />
      </div>
    </Snow>
  );
}
