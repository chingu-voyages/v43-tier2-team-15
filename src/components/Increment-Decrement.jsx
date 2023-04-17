export default function IncrementDecrement(){
    return (
      <div className="incDec w-48 h-12 flex justify-around items-center bg-[#D1CEBD] rounded-xl ml-8">
        <button
          type="button"
          className="incDec__minus cursor-pointer not-italic font-normal text-2xl leading-7 text-black"
        >
          -
        </button>
        <div className="h-6 border border-solid border-black"></div>
        <div className="incDec__quantity not-italic font-normal text-2xl leading-7 text-black">
          1
        </div>
        <div className="h-6 border border-solid border-black"></div>
        <button
          type="button"
          className="incDec__plus cursor-pointer not-italic font-normal text-2xl leading-7 text-black"
        >
          +
        </button>
      </div>
    );
}