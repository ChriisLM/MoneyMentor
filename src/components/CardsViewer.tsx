import { useState } from "react";
import { BankCard } from "./cards/BankCard";
import { useFinanceData } from "../hooks/useFinanceData";

export function CardsViewer() {
  const { accounts } = useFinanceData();
  const filteredAccountsCards = accounts.filter(
    (account) => account.type === "card"
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardType = (index: number) => {
    return index % 2 === 0 ? "visa" : "mastercard";
  };

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % filteredAccountsCards.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredAccountsCards.length) %
        filteredAccountsCards.length
    );
  };

  if (filteredAccountsCards.length === 0) {
    return (
      <div className="w-full max-w-md mx-auto border rounded-lg p-6 text-center">
        No cards available
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md ml-auto border rounded-lg bg-white dark:bg-neutral-700 dark:border-neutral-500 dark:shadow-neutral-500">
      {filteredAccountsCards.length > 1 && (
        <button
          className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 pb-1 px-2 rounded-lg text-2xl hover:bg-gray-200 hover:dark:bg-zinc-800 dark:text-gray-200"
          onClick={prevSlide}
        >
          &#8592;
        </button>
      )}
      <div className="overflow-hidden rounded-lg shadow-lg py-8 px-14">
        <BankCard
          key={filteredAccountsCards[currentIndex].id}
          styleType={getCardType(currentIndex)}
          cardInfo={filteredAccountsCards[currentIndex]}
        />
      </div>
      {filteredAccountsCards.length > 1 && (
        <button
          className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 pb-1 px-2 rounded-lg text-2xl hover:bg-gray-200 hover:dark:bg-zinc-800 dark:text-gray-200"
          onClick={nextSlide}
        >
          &#8594;
        </button>
      )}
    </div>
  );
}
