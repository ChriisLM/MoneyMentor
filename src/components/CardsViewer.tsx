import { useState } from "react";
import { BankCard } from "./cards/BankCard";

export function CardsViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    <BankCard key="visa" styleType="visa" />,
    <BankCard key="mastercard" styleType="mastercard" />,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto border rounded-lg">
      <button
        className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 pb-1 px-2 rounded-lg text-2xl hover:bg-gray-300"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <div className="overflow-hidden rounded-lg shadow-lg py-6 px-14">
        {cards[currentIndex]}
      </div>
      <button
        className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 pb-1 px-2 rounded-lg text-2xl hover:bg-gray-300"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  );
}
