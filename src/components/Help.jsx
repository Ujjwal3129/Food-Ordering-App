import React, { useState } from "react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Browse the menu, select your items, and add them to your cart. When you're ready, proceed to checkout.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept credit/debit cards, UPI, and popular wallets like Paytm and Google Pay.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, go to the 'My Orders' section to track the status of your order.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach us via chat, email, or phone. See the options below.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-md rounded-lg mt-5">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Need Help?</h2>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          className="absolute left-4 top-4 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {filteredFaqs.length > 0 ? (
        <ul className="space-y-6">
          {filteredFaqs.map((faq, index) => (
            <li key={index}>
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No results found for "{searchQuery}".</p>
      )}

      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Still need assistance?
        </h3>
        <p className="text-gray-700 mb-4">
          We're here to help you. Choose one of the following options:
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12.79a9 9 0 11-9-9"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12.79L13.41 5.2M16 2l-3 7H7l-2 9H5.67"
              />
            </svg>
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Chat with us
            </a>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12.79a9 9 0 11-9-9M21 12.79L13.41 5.2M16 2l-3 7H7l-2 9H5.67"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 21v-2a4 4 0 0111-2h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v7H5a2 2 0 00-2 2v4a2 2 0 002 2h1v-3"
              />
            </svg>
            <a
              href="mailto:chauhanujjwal3129@gmail.com"
              className="text-blue-500 font-medium hover:underline"
            >
              Email us
            </a>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.5 11.5L7 15m0-4.5l1.5-1.5L18 3"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 21v-3a4 4 0 10-4 4h1v-4H7a2 2 0 01-2-2v-2a2 2 0 012-2h7"
              />
            </svg>
            <a
              href="tel:+916203109119"
              className="text-blue-500 font-medium hover:underline"
            >
              Call us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
