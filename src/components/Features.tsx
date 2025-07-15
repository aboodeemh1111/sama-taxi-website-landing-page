const Features = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">24/7 Service</h3>
            <p className="text-gray-600">
              Our drivers are available 24/7 to ensure you get a ride whenever
              you need it.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
            <p className="text-gray-600">
              We offer secure payment options to ensure your transactions are
              safe and hassle-free.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Easy Booking</h3>
            <p className="text-gray-600">
              Book your ride in just a few taps with our user-friendly app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
