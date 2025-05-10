import { FaShieldAlt, FaRocket, FaHandsHelping, FaThumbsUp } from "react-icons/fa";

export default function TrustHighlights() {
  const highlights = [
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500 dark:text-blue-400 mb-3" />,
      heading: "Safe & Secure",
      info: "All transactions are protected with top-tier security standards.",
    },
    {
      icon: <FaRocket className="text-4xl text-red-500 dark:text-red-400 mb-3" />,
      heading: "Lightning Fast",
      info: "Complete your sale and receive payment in less than 24 hours.",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-green-500 dark:text-green-400 mb-3" />,
      heading: "Friendly Support",
      info: "Our team is always here to help you every step of the way.",
    },
    {
      icon: <FaThumbsUp className="text-4xl text-yellow-500 dark:text-yellow-400 mb-3" />,
      heading: "Trusted by Many",
      info: "Over 10,000 sellers have used our platform with great success.",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20 text-center transition-colors duration-200">
      <h2 className="text-3xl font-bold mb-12 dark:text-white">Why People Trust Us</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            {item.icon}
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.heading}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
}