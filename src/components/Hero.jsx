const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6">
      <h1 className="text-5xl font-bold mb-6">TaskFlow</h1>
      <p className="text-xl mb-8 max-w-xl">
        Organize your tasks, boost your productivity, and stay focused every day.
      </p>
      <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;