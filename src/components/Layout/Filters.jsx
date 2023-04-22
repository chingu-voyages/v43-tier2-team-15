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
    <div className="filters box-border bg-foggy-gray rounded-[10px] flex flex-col gap-4 p-4 md:w-3/5 lg:w-[320px] xl:w-[320px] 2xl:w-[320px]">
      {FILTERS.map(({ title, options }) => (
        <div key={title}>
          <h2 className="title text-[#19191d] text-xl md:text-2xl leading-[113%] font-bold tracking-[0.5px]">
            {title}
          </h2>
          <div className="expended-filters flex flex-col gap-2.5 py-4 md:pl-4 md:pr-0">
            {options.map(({ id, name }) => (
              <div key={id} className="criteria flex flex-row items-center">
                <input
                  className="checkbox"
                  type="checkbox"
                  id={id}
                  name={id}
                  onChange={handleCheckboxChange}
                />
                <h4 className="caption text-[#2e2d2d] text-base md:text-lg leading-[150%] font-normal tracking-[0.5px] pl-2">
                  {name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="apply">
        <button className="w-full md:w-[200px] h-10 text-base md:text-lg font-bold leading-[21px] tracking-normal text-center bg-bonfire text-[white] cursor-pointer ease-[ease] mt-5 mb-10 px-4 py-0 rounded-[10px] hover:scale-105 transition duration-500 font-family-[Roboto]">
          Apply
        </button>
      </div>
    </div>
  );
}

export default Filters;
