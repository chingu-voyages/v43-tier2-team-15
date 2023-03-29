import { useState } from "react";

const languages = [
  { label: "EN", flagURL: "/flags/EN-small.png" },
  { label: "FR", flagURL: "/flags/FR-small.png" },
  { label: "DE", flagURL: "/flags/DE-small.png" },
  { label: "SP", flagURL: "/flags/SP-small.png" },
  { label: "KO", flagURL: "/flags/KO-small.png" },
];

function LanguageMenu() {
  const [selected, setSelected] = useState("EN");
  const { flagURL } = languages.find((lng) => lng.label === selected);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex gap-4">
      <img
        className="w-10 h-10 border-2 rounded-full border-white"
        src={flagURL}
        alt=""
      />

      <label className="hidden" htmlFor="language">
        Choose a language
      </label>

      <select
        className="bg-transparent text-white text-2xl  outline-none focus:ring-0"
        name="language"
        id="language"
        value={selected}
        onChange={handleChange}
      >
        {languages.map((lang) => (
          <option
            className="text-gray-700 p-2"
            key={lang.label}
            value={lang.label}
          >
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageMenu;
