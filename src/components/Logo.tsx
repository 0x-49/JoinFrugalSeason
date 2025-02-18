import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[30px]">
      <Image
        src="/images/FrugalSeasonLogo.jpg"
        alt="Frugal Season Logo"
        fill
        className="object-contain"
        priority
        sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 160px"
      />
    </div>
  );
};

export default Logo;
