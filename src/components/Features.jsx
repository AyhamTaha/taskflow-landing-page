import ScrollAnimation from "./ScrollAnimation";
import { FaCheckCircle, FaClock, FaUsers } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-20 bg-gray-100 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Features</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaCheckCircle size={40} />,
            title: "Easy Task Management",
            desc: "Create, edit and track tasks effortlessly."
          },
          {
            icon: <FaClock size={40} />,
            title: "Smart Scheduling",
            desc: "Set deadlines and reminders to stay on track."
          },
          {
            icon: <FaUsers size={40} />,
            title: "Team Collaboration",
            desc: "Work with your team and share progress."
          }
        ].map((feature, index) => (
          <ScrollAnimation key={index}>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Features;