import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const licenseOptions = [
    "Windows",
    "Office 365",
    "Adobe Creative Cloud",
    "Other",
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required.";
    if (!formData.companyName.trim()) newErrors.companyName = "Company is required.";
    if (!formData.licenseType) newErrors.licenseType = "Select a license type.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully! (Dummy behavior)");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-blue-50 dark:bg-gray-800 py-20 px-4 transition-colors duration-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Get in Touch</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label className="block text-left font-semibold mb-1 dark:text-white">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.fullName && <p className="text-red-500 dark:text-red-400 text-sm">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-left font-semibold mb-1 dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.email && <p className="text-red-500 dark:text-red-400 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-left font-semibold mb-1 dark:text-white">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.companyName && <p className="text-red-500 dark:text-red-400 text-sm">{errors.companyName}</p>}
          </div>

          <div>
            <label className="block text-left font-semibold mb-1 dark:text-white">License Type</label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="" className="dark:bg-gray-800">Select a license</option>
              {licenseOptions.map((option, idx) => (
                <option key={idx} value={option} className="dark:bg-gray-800">{option}</option>
              ))}
            </select>
            {errors.licenseType && <p className="text-red-500 dark:text-red-400 text-sm">{errors.licenseType}</p>}
          </div>

          <div>
            <label className="block text-left font-semibold mb-1 dark:text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.message && <p className="text-red-500 dark:text-red-400 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}