import React from "react";
import "./Filters.css";

const FILTERS = [
  {
    title: "Expanded Filters",
    options: [
      { id: "recommended", name: "Recommended" },
      { id: "recently-added", name: "Recently Added" },
      { id: "in-stock", name: "In stock" },
      { id: "most-rated", name: "Most Rated" },
      { id: "price-low-high", name: "Price: Low → High" },
      { id: "price-high-low", name: "Price: High → Low" },
    ],
  },
  {
    title: "Brand",
    options: [
      { id: "banpresto", name: "Banpresto" },
      { id: "taito", name: "Taito" },
      { id: "sega", name: "SEGA" },
      { id: "bandai", name: "Bandai" },
      { id: "furyu", name: "Furyu" },
      { id: "funko", name: "Funko" },
      { id: "bandai-spirits", name: "Bandai Spirits" },
      { id: "han-shan", name: "Han shan" },
      { id: "wonenice", name: "WoneNice" },
    ],
  },
  {
    title: "Type",
    options: [
      { id: "artfx", name: "ARTFX" },
      { id: "azone-bjd", name: "Azone BJD" },
      { id: "figma", name: "Figma" },
      { id: "nendoroid", name: "Nendoroid" },
      { id: "play-arts-kai", name: "Play Arts Kai" },
    ],
  },
];

function Filters(props) {
  function handleCheckboxChange(event) {
    if (props.handleCheckboxChange) {
      props.handleCheckboxChange(event.target.id);
    }
  }

  return (
    <div className="filters">
      {FILTERS.map(({ title, options }) => (
        <div key={title}>
          <h2 className="title">{title}</h2>
          <div className="expended-filters">
            <h3 className="sub-title">Expanded Filters</h3>
            {options.map(({ id, name }) => (
              <div key={id} className="criteria">
                <input
                  className="checkbox"
                  type="checkbox"
                  id={id}
                  name={id}
                  value={1}
                  onChange={handleCheckboxChange}
                />
                <h4 className="caption">{name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filters;
