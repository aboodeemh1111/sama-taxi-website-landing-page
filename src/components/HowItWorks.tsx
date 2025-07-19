import NextImage from "next/image";

const steps = [
  {
    title: "اختر موقعك",
    description: "حدد موقعك الحالي بسهولة على الخريطة لطلب سيارة بسرعة وسهولة.",
    img: "/images~/iphone_mockup.svg",
  },
  {
    title: "حدد وجهتك",
    description: "أدخل وجهتك وسيتم عرض أقرب السائقين المتاحين لك.",
    img: "/images~/iphone_mockup.svg",
  },
  {
    title: "انطلق بأمان",
    description:
      "استمتع برحلتك مع سائقينا الموثوقين وادفع بالطريقة التي تناسبك.",
    img: "/images~/iphone_mockup.svg",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 bg-gray-50 w-full flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-10 text-center">
        كيف يعمل التطبيق؟
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl rtl">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <div className="bg-white rounded-3xl shadow-lg p-4 mb-6 flex items-center justify-center">
              <NextImage
                src={step.img}
                alt={step.title}
                width={180}
                height={360}
                className="w-40 h-80 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
