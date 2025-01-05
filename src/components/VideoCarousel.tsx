"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const videos = [
  {
    url: 'https://streamable.com/e/3v6v2k?',
    title: 'Frugal Season Secret: $25 Dewalt Chargers for ONE PENNY!',
    description: 'Learn how I scored $25 Dewalt phone chargers for just $0.01 each thanks to a secret clearance deal at Home Depot.'
  },
  {
    url: 'https://streamable.com/e/llv6gi?',
    title: 'Frugal Season Hack: Penny Deals at Home Depot!',
    description: 'Watch how I snagged $13 worth of goods for just 20 items using this simple trick.'
  },
  {
    url: 'https://streamable.com/e/glxthg?',
    title: 'Frugal Season Alert: $240 Faucets for $0.01 Each!',
    description: 'Watch how I turned $0.03 into $300 by finding Cola Rubicon faucets on penny clearance.'
  },
  {
    url: 'https://streamable.com/e/d7ywlq?',
    title: 'Frugal Season Finds: Fire TV Sticks for $16 at Target!',
    description: 'Fire TV Sticks for just $16 each at Target! Learn how to find hidden clearance items fast.'
  },
  {
    url: 'https://streamable.com/e/721zgw?',
    title: 'Frugal Season Score: $180 TV for Just $50!',
    description: 'I snagged a TCL 43-inch TV for only $50 at Target. Watch now to see how I did it!'
  },
  {
    url: 'https://streamable.com/e/y82h4z?',
    title: 'Frugal Season Hack: Home Depot Tools Up to 98% Off!',
    description: 'Learn how to save thousands on tools by catching website glitches before they disappear.'
  },
  {
    url: 'https://streamable.com/e/kq7gx6?',
    title: 'Frugal Season Goldmine: LED Lights for Just $1!',
    description: '$500 worth of LED lights for only $12! Watch how I found this 98% off clearance deal.'
  },
  {
    url: 'https://streamable.com/e/z9mygn?',
    title: 'Frugal Season Jackpot: FREE Amazon Smart Home Products!',
    description: "Lowe's accidentally marked Amazon smart home products down to $0, and we made thousands in profits!"
  }
];

export default function VideoCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <Card key={index} className="flex flex-col h-full bg-background hover:shadow-xl transition-all duration-300">
            <div className="relative w-full pt-[177.778%] rounded-t-xl overflow-hidden">
              <iframe
                src={video.url}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                allow="autoplay"
                style={{ border: 'none' }}
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-lg font-bold leading-tight">
                {video.title}
              </CardTitle>
              <CardDescription className="mt-2 text-sm">
                {video.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="flex items-center">
                  💰 Potential Profit
                </span>
                <span className="ml-auto text-green-500 font-semibold">
                  {index === 0 ? '$24.99/item' : 
                   index === 1 ? '$12.80/item' :
                   index === 2 ? '$239.99/item' :
                   index === 3 ? '$33.99/item' :
                   index === 4 ? '$130/item' :
                   index === 5 ? '98% off' :
                   index === 6 ? '$488/lot' :
                   'FREE + Profit'}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
