const page = () => {
  return (
    <div className="px-4 py-10 dark:bg-dark">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-center mb-6">
        We&apos;d love to hear from you! Please reach out with any questions or
        feedback.
      </p>

      {/* Contact Form */}
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded-lg w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded-lg w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            className="border rounded-lg w-full p-2"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
        >
          Send Message
        </button>
      </form>

      {/* Support Highlight Section */}
      <div className="bg-blue-100 dark:bg-dark-100 py-10 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-slate-50 mb-4">
            Why Our Support is the Best
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-100 mb-8">
            We pride ourselves on providing unparalleled support to our
            customers. Our dedicated team is always ready to assist you with any
            inquiries, ensuring your experience is seamless and satisfying.
          </p>
          <div className="flex justify-center gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                24/7 Availability
              </h3>
              <p className="text-gray-600">
                Reach us anytime, day or night, for immediate assistance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Our knowledgeable staff is trained to provide the best
                solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Your happiness is our priority; we go the extra mile to ensure
                it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
