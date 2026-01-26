export default function DonatePage() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
      <div className="min-h-screen bg-black/40 backdrop-blur-sm flex items-center justify-center py-8 px-4">
        <div className="max-w-lg mx-auto text-center bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/50">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Support Our Mission
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Your generous donations empower our foundation to foster innovation in sustainable technology and community projects. Every contribution supports cybersecurity education, open-source tools, workshops, and research grants that benefit thousands worldwide.
          </p>
          <button className="w-full max-w-sm mx-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl text-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}
