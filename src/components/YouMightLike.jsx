import Card from "./card/Card";

export default function Like() {
  return (
    <div className="popular-items mt-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="title-name font-sans not-italic font-bold text-4xl leading-10 flex mb-12 mt-[170px] sm:mb-10 lg:mb-14 text-black">
        You might like
      </h1>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14 lg:gap-20 xl:gap-28 mb-10">
        <Card id={8} />
        <Card id={15} />
        <Card id={4} />
        <Card id={19} />
      </div>
    </div>
  );
}
