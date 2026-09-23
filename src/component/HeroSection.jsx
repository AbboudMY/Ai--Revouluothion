const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" app-container pt-24 pb-12 overflow-hidden sm:overflow-visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* left content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">Artificial Intelligence</span>
            <br />
            For a Smarter Future
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Discover how AI is transforming industries and improving lives
            worldwide. Our cutting-edge solutions harness the power of machine
            learning to solve complex problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a className="btn-primary" href="#">
              Explore AI Solutions
            </a>
            <a className="btn-outline" href="#">
              Learn More
            </a>
          </div>

          <div className="pt-4 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {images.map((img, i) => (
                <img
                  key={i}
                  className="avatar"
                  src={img}
                  alt={`User ${i + 1}`}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-600">
              Trusted by <span className="text-primary font-bold">10,000+</span>{" "}
              people worldwide
            </p>
          </div>
        </div>

        {/* right image */}
        <div className="relative w-full h-80 md:h-140">
          <img
            className="w-full h-full object-cover rounded-2xl"
            hero-section
            src={
              "https://images.unsplash.com/photo-1679362006962-fd1082ab803c?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            hero-section
            alt="hero section"
          />
          <div className="absolute -z-1 w-50 h-50 rounded-full bg-secondary/50 -bottom-12 -left-20 blur-3xl"></div>
          <div className="absolute -z-1 w-40 h-40 rounded-full bg-accent/40 -top-10 -right-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
