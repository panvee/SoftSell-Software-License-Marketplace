import { FaUpload, FaSearchDollar, FaMoneyBillWave } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload className="text-4xl text-blue-600 dark:text-blue-400 mb-3" />,
      title: "Upload License",
      description: "Submit your unused software license in just a few clicks.",
    },
    {
      icon: <FaSearchDollar className="text-4xl text-green-600 dark:text-green-400 mb-3" />,
      title: "Get Valuation",
      description: "We evaluate your license and give you a competitive offer.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-yellow-600 dark:text-yellow-400 mb-3" />,
      title: "Get Paid",
      description: "Receive your payment securely via your preferred method.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center transition-colors duration-200">
      <h2 className="text-3xl font-bold mb-12 dark:text-white">How It Works</h2>
      <div className="max-w-5xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-gray-50 dark:bg-gray-800">
            {step.icon}
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}