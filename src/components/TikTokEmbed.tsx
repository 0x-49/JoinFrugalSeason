'use client';

import React, { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface TikTokEmbedProps {
  videoId: string;
  className?: string;
}

const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ videoId, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  if (!isMounted) {
    return (
      <div className="relative w-full" style={{ paddingBottom: '177.77%' }}>
        <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="relative w-full rounded-lg bg-muted p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Unable to load TikTok video. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: '177.77%' }}>
      {isLoading && (
        <div className="absolute inset-0 w-full h-full">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      )}
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}`}
        className={`absolute top-0 left-0 w-full h-full rounded-lg transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
      />
    </div>
  );
};

export default TikTokEmbed;