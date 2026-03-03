import ScrollAnimation from "./ScrollAnimation";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      text: "TaskFlow completely changed how I manage my day!"
    },
    {
      name: "Ali R.",
      text: "The best productivity app I’ve ever used."
    },
    {
      name: "Lina T.",
      text: "Clean design and super easy to use."
    }
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">What Users Say</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ScrollAnimation key={index}>
            <div className="bg-indigo-50 p-6 rounded-xl shadow">
              <p className="mb-4 italic">"{review.text}"</p>
              <h4 className="font-semibold text-indigo-600">
                {review.name}
              </h4>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Reviews;