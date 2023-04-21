import Card from "./card/Card";
import { Link } from "react-router-dom";

export default function Popular() {
  return (
    <div className="popular-items mt-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="title-name font-sans not-italic font-bold text-4xl leading-10 flex mb-12 mt-[170px] sm:mb-10 lg:mb-14 text-black">
        Popular items
      </h1>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14 lg:gap-20 xl:gap-28 mb-10">
        <Card id={1} />
        <Card id={2} />
        <Link to="/productItem">
          {" "}
          <Card id={13} />
        </Link>
        <Card id={4} />
      </div>
    </div>
  );
}
