import ScrollAnimation from "./ScrollAnimation";

const Pricing = () => {
  const plans = [
    { name: "Free", price: "$0", features: ["Basic Tasks", "Limited Reminders"] },
    { name: "Pro", price: "$9/mo", features: ["Unlimited Tasks", "Smart Reminders"] },
    { name: "Team", price: "$19/mo", features: ["Team Access", "Collaboration Tools"] }
  ];

  return (
    <section className="py-20 bg-gray-100 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Pricing</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <ScrollAnimation key={index}>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
                Choose Plan
              </button>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Pricing;