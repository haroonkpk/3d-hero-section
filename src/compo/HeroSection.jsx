export default function HeroSection({ position }) {
  return (
    <div
      className={`absolute w-fit h-fit z-10 select-none flex items-center justify-center ${position}`}
    >
      <div className="bg-transparent border border-white/30 rounded-2xl shadow-xl p-4 sm:p-8 md:p-10 max-w-xs sm:max-w-md md:max-w-xl text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-white/80 text-xs sm:text-sm md:text-lg mt-3 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, hic!
        </p>
      </div>
    </div>
  );
}
