export default function HeroSection() {
  return (
    <section className="bg-blue-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-20 px-4 text-center transition-colors duration-200">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sell Unused Software Licenses Effortlessly
        </h1>
        <p className="text-lg md:text-xl mb-6 dark:text-gray-300">
          SoftSell helps you turn your unused licenses into instant cash—safe, fast, and easy.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
          Get a Quote
        </button>
      </div>
    </section>
  );
}