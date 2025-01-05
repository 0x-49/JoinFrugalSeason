import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="relative w-40 h-12">
      <Image
        src="/images/FrugalSeasonLogo.jpg"
        alt="Frugal Season Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
