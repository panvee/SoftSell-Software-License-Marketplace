import { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';

const MOCK_RESPONSES = {
  "how do i sell my license": "To sell your license, simply click the 'Get a Quote' button at the top of the page and fill out the form. We'll evaluate your license and get back to you within 24 hours with an offer.",
  "what types of licenses": "We accept various software licenses including Windows, Office 365, Adobe Creative Cloud, and many enterprise software licenses. You can specify your license type in the contact form.",
  "how long does it take": "The process is quick! Once you submit your license, we typically provide a valuation within 24 hours. After you accept, payment is processed the same day.",
  "is it safe": "Absolutely! We use industry-standard encryption and secure payment processing. All transactions are protected, and we have a proven track record with over 10,000 successful sales."
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    setInput('');

    // Mock AI response
    setTimeout(() => {
      const response = MOCK_RESPONSES[userMessage] || 
        "I'm here to help! You can ask me about selling licenses, our process, or payment methods. For specific questions, please contact our support team.";
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-200"
        >
          <FaComments className="text-2xl" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat Support</h3>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80 transition-opacity">
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.type === 'user' 
                    ? 'ml-auto bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-gray-100' 
                    : 'mr-auto bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                } p-3 rounded-lg max-w-[80%]`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 p-2 border dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}