import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState([]); 

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#0A0A0B] min-h-screen py-16 px-4 md:px-8 flex flex-col md:flex-row items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* Left Side: Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">
            My Client&apos;s Stories
          </h1>
          <p className="text-gray-400 text-lg">
            Empowering people in a new digital journey with my super services.
          </p>
        </div>

        {/* Right Side: Testimonials Slider */}
        <div className="flex-1 relative">
          {testimonials.length > 0 ? (
            <>
              <div className="overflow-hidden relative w-full">
                <div 
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${currentSlide * 100}%)`, width: "100%" }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0" style={{ display: index === currentSlide ? "block" : "none" }}>
                      <div className="bg-[#1A1A1D] rounded-2xl p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <img
                              src={testimonial.logo || "/placeholder.svg"}
                              alt={testimonial.company}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.author}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                          </div>
                          <Quote className="text-violet-500 w-8 h-8" />
                        </div>
                        <p className="text-white mb-6">{testimonial.text}</p>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{testimonial.author}</h3>
                          <p className="text-gray-400">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center gap-2 mt-8">
                <button className="text-violet-500 hover:text-violet-400 p-2" onClick={prevSlide}>
                  <ChevronLeft className="h-6 w-6" />
                </button>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-violet-500" : "bg-gray-600"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
                <button className="text-violet-500 hover:text-violet-400 p-2" onClick={nextSlide}>
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-400">Loading testimonials...</p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
