export default function ClientFeedback() {
  const feedbackList = [
    {
      name: "Ayesha Khan",
      role: "IT Manager",
      company: "Digitex Solutions",
      message: "SoftSell made it incredibly easy to sell off unused licenses. The process was smooth, and I got paid the same day!",
    },
    {
      name: "Rohan Mehta",
      role: "Startup Founder",
      company: "TechNest",
      message: "Great experience! I really appreciated the quick support and clear communication throughout the sale.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20 text-center transition-colors duration-200">
      <h2 className="text-3xl font-bold mb-12 dark:text-white">What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2">
        {feedbackList.map((feedback, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{feedback.message}"</p>
            <div className="font-semibold dark:text-white">{feedback.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {feedback.role}, {feedback.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}