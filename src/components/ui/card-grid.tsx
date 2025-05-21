import React from "react";
import { Card, CardContent } from "./card";

interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CardGridProps {
  items: CardItem[];
}

export const CardGrid: React.FC<CardGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {items.map((item) => (
        <Card 
          key={item.id} 
          className="bg-[#1c1c1c] border border-[#ffefd41a] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <div 
            className="h-48 bg-cover bg-center" 
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <CardContent className="p-6">
            <h3 className="font-['Urbanist'] text-[#ffefd4] text-2xl mb-3">
              {item.title}
            </h3>
            <p className="font-['Lexend'] text-[#bcbdbf] text-base">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};