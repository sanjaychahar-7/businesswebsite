import babitaImg from "../image/babita.jpeg";


export default function ContactUs() {
  const skills = [
    { name: "Property Consultation", value: 96 },
    { name: "Client Communication", value: 94 },
    { name: "Sales Strategy", value: 91 },
    { name: "Market Research", value: 88 },
    { name: "Negotiation", value: 93 },
    { name: "Customer Support", value: 97 },
  ];

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-pink-100 via-yellow-50 to-orange-100 px-4 sm:px-6 py-10">

      {/* Floating Animated Background Lights */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl animate-spin-slow"></div>

      {/* Floating Sparkles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            background:
              i % 4 === 0
                ? "#ff4fd8"
                : i % 4 === 1
                ? "#ffe600"
                : i % 4 === 2
                ? "#00ff99"
                : "#ff7b00",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 8 + 4}s`,
          }}
        ></div>
      ))}

      {/* Diwali Hanging Lights */}
      <div className="absolute top-0 left-0 w-full flex justify-around z-20 py-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full shadow-2xl animate-bounce ${
              i % 4 === 0
                ? "bg-pink-500"
                : i % 4 === 1
                ? "bg-yellow-400"
                : i % 4 === 2
                ? "bg-green-400"
                : "bg-orange-500"
            }`}
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-30 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-[40px] p-6 sm:p-8 shadow-2xl relative overflow-hidden">

          {/* moving border glow */}
          <div className="absolute inset-0 rounded-[40px] border-4 border-transparent bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 animate-borderMove opacity-30"></div>

          <div className="flex flex-col items-center text-center relative z-10">

            {/* Animated Image */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 mb-8">

              {/* outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 animate-spin blur-sm"></div>

              {/* lighting ring */}
              <div className="absolute inset-[-15px] rounded-full border-[6px] border-dashed border-pink-400 animate-[spin_8s_linear_infinite]"></div>

              <div className="absolute inset-[8px] rounded-full overflow-hidden border-[6px] border-white shadow-[0_0_60px_rgba(255,100,200,0.8)]">
                <img
                  src={babitaImg}
                  alt="Babita Nagar"
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Babita Nagar
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-gray-700 mt-3">
              Senior Real Estate Counselor
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">

              <div className="bg-pink-100 hover:scale-105 transition duration-500 rounded-3xl p-5 shadow-xl">
                <h3 className="font-bold text-pink-700 text-lg mb-2">
                  📍 Address
                </h3>

                <p className="text-gray-700 leading-7">
                  3rd Floor, JSKS INFRATECH, Mannat Arcade, C/O, Old Sher Shah Suri Rd, near Anupam Sweets & Motherson Company, Sarai Khawaja Village, Sector 37, Faridabad, Haryana 121003, India
                </p>
              </div>

              <div className="bg-yellow-100 hover:scale-105 transition duration-500 rounded-3xl p-5 shadow-xl">
                <h3 className="font-bold text-yellow-700 text-lg mb-2">
                  📞 Contact
                </h3>

                <p className="text-gray-700">+91 9999198610</p>
                <p className="text-gray-700">babita@luxuryestate.com</p>
              </div>

              <div className="bg-green-100 hover:scale-105 transition duration-500 rounded-3xl p-5 shadow-xl">
                <h3 className="font-bold text-green-700 text-lg mb-2">
                  🎓 Education
                </h3>

                <p className="text-gray-700 leading-7">
                  Graduate in Marketing & Real Estate Management
                </p>
              </div>

              <div className="bg-orange-100 hover:scale-105 transition duration-500 rounded-3xl p-5 shadow-xl">
                <h3 className="font-bold text-orange-700 text-lg mb-2">
                  💼 Experience
                </h3>

                <p className="text-gray-700 leading-7">
                  3+ Years in Luxury & Commercial Real Estate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* About */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/40 rounded-[35px] p-6 sm:p-8 shadow-2xl hover:scale-[1.01] transition duration-500 relative overflow-hidden">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl"></div>

            <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-5">
              About Babita
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-8">
              Babita Nagar is one of the most trusted and experienced
              real estate counselors delivering premium property
              solutions with transparency and customer satisfaction.
              She specializes in luxury apartments, investment
              properties, office spaces, dream homes, and commercial
              projects.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-8 mt-5">
              Her communication, negotiation power, and deep market
              understanding help clients make profitable property
              decisions with confidence.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/40 rounded-[35px] p-6 sm:p-8 shadow-2xl relative overflow-hidden">

            {/* skill glow animation */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-8 relative z-10">
              Professional Skills
            </h2>

            <div className="space-y-7 relative z-10">
              {skills.map((skill, index) => (
                <div key={index}>

                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700 text-lg">
                      {skill.name}
                    </span>

                    <span className="font-bold text-orange-600">
                      {skill.value}%
                    </span>
                  </div>

                  <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden relative">

                    {/* moving light */}
                    <div className="absolute top-0 left-0 h-full w-20 bg-white/60 blur-md animate-lightMove z-20"></div>

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 relative overflow-hidden"
                      style={{ width: `${skill.value}%` }}
                    >

                      {/* inside glow */}
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          

          {/* Contact Card */}
          <div className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 rounded-[35px] p-6 sm:p-8 shadow-2xl text-white relative overflow-hidden">

            {/* animated glowing circles */}
            <div className="absolute w-60 h-60 bg-white/20 rounded-full blur-3xl -top-20 -right-10 animate-pulse"></div>

            <div className="absolute w-52 h-52 bg-pink-200/20 rounded-full blur-3xl bottom-0 left-0 animate-pulse"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
                Connect With Babita Nagar
              </h2>

              <p className="text-base sm:text-lg leading-8 mb-7">
                Looking for dream property, investment opportunity,
                commercial office space, or luxury apartment?
                Get personalized real estate guidance now.
              </p>

              <div className="flex flex-wrap gap-4">

                <button className="bg-white text-pink-600 px-7 py-4 rounded-full font-bold shadow-2xl hover:scale-110 hover:rotate-1 transition duration-500">
                  9999198610
                </button>

                

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        @keyframes lightMove {
          0% {
            left: -20%;
          }
          100% {
            left: 120%;
          }
        }

        .animate-lightMove {
          animation: lightMove 3s linear infinite;
        }

        @keyframes borderMove {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-borderMove {
          animation: borderMove 12s linear infinite;
        }

        .animate-spin-slow {
          animation: spin 18s linear infinite;
        }
      `}</style>
    </div>
  );
}