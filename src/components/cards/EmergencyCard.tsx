export function EmergencyCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Emergency Fund
      </h2>
      <p className="text-gray-600 text-sm mb-2">Current Balance: $5,000</p>
      <p className="text-gray-600 text-sm">Goal: $10,000</p>
      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: "50%" }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2 text-right font-medium">
        50% of goal reached
      </p>
    </div>
  );
}
