import React from "react";
import "./Filters.css";

const FILTERS = [
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
      { id: "cu-poche", name: "Cu-Poche" },
      { id: "dorbz", name: "Dorbz" },
      { id: "pop-funko", name: "Pop! Funko" },
      { id: "pullip", name: "Pullip" },
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
            {options.map(({ id, name }) => (
              <div key={id} className="criteria">
                <input
                  className="checkbox"
                  type="checkbox"
                  id={id}
                  name={id}
                  onChange={handleCheckboxChange}
                />
                <h4 className="caption">{name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="apply">
        <button className="h-10 w-full md:w-[200px] text-lg font-bold leading-[21px] tracking-normal text-center bg-bonfire text-[white] cursor-pointer ease-[ease] px-[2rem] py-0 rounded-[10px] hover:scale-105 transition duration-500 font-family-[Roboto]">
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filters;
