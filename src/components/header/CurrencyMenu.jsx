import { useState } from "react";

const currencies = [
  { name: "Euros", description: "European Euros", symbol: "€" },
  { name: "USD", description: "United States Dollar", symbol: "$" },
  { name: "Won", description: "Korean Won", symbol: "₩" },
  { name: "Yen", description: "Japanese Yen", symbol: "¥" },
];

function CurrencyMenu() {
  const [selected, setSelected] = useState("Euros");
  const { symbol } = currencies.find((c) => c.name === selected);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex gap-4">
      <span className="font-semibold text-xl text-white w-8 h-8 border-2 rounded-full border-white text-center">
        {symbol}
      </span>

      <label className="hidden" htmlFor="language">
        Choose currency
      </label>

      <select
        className="bg-transparent text-white text-2xl  outline-none focus:ring-0"
        name="currency"
        id="currency"
        value={selected}
        onChange={handleChange}
      >
        {currencies.map((c) => (
          <option className="text-gray-700 p-2" key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyMenu;
