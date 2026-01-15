import React from "react";
import Info from "./components/Info";
import Projects from "./components/Projects";
import CV from "./components/CV";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Container chính để giới hạn chiều rộng trên desktop */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        <Info />
        <Projects />
        <CV />

        <footer className="text-center text-slate-400 py-10">
          © 2026 Designed with HaiDang
        </footer>
      </div>
    </div>
  );
}

export default App;
