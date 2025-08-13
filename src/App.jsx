import { useState, useEffect } from "react";
import { categories, questions } from "./data";

export default function App() {
  const [name, setName] = useState("");
  const [step, setStep] = useState("greeting"); // greeting | category | question
  const [category, setCategory] = useState(null);
  const [currentQ, setCurrentQ] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
      setStep("category");
    }
  }, []);

  const handleNameSubmit = () => {
    const finalName = name?.trim() || "Julia";
    localStorage.setItem("name", finalName);
    setName(finalName);
    setStep("category");
  };

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    const q = questions[cat.id]?.[0];
    setCurrentQ(q);
    setStep("question");
    setSelected(null);
    setShowExplanation(false);
  };

  const resetToCategories = () => {
    setSelected(null);
    setShowExplanation(false);
    setStep("category");
  };

  return (
    <div className="max-w-md mx-auto p-5 font-sans">
      {step === "greeting" && (
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Hi Julia — welcome back.</h1>
          <p className="mb-4 text-gray-700">
            (If you'd like me to use a different name, type it here.)
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border p-3 rounded w-full mb-4 bg-white"
          />
          <button
            onClick={handleNameSubmit}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Continue
          </button>
        </div>
      )}

      {step === "category" && (
        <div>
          <h1 className="text-2xl font-serif mb-4">Hi {name || "Julia"}, what would you like to learn?</h1>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat)}
                className="border p-4 rounded-lg bg-white hover:bg-gray-100 text-left shadow-sm active:scale-[0.99] transition"
              >
                <div className="font-serif text-lg">{cat.name}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "question" && currentQ && (
        <div>
          <button onClick={resetToCategories} className="underline mb-3">← Back</button>
          <h2 className="text-xl font-serif mb-4">{currentQ.question}</h2>
          <div className="flex flex-col gap-2">
            {currentQ.answers.map((ans) => {
              const state = selected
                ? ans === currentQ.correct
                  ? "correct"
                  : ans === selected
                  ? "wrong"
                  : "idle"
                : "idle";
              return (
                <button
                  key={ans}
                  disabled={!!selected}
                  onClick={() => setSelected(ans)}
                  className={
                    "border p-3 rounded-lg bg-white text-left shadow-sm active:scale-[0.99] transition " +
                    (state === "correct"
                      ? "border-green-500"
                      : state === "wrong"
                      ? "border-red-500"
                      : "hover:bg-gray-100")
                  }
                >
                  {ans}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="mt-4">
              <div className="mb-2">
                {selected === currentQ.correct ? (
                  <span className="text-green-700">✅ Correct</span>
                ) : (
                  <span className="text-red-700">❌ Not quite</span>
                )}
              </div>
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="underline"
              >
                {showExplanation ? "Hide" : "Learn More"}
              </button>
              {showExplanation && (
                <p className="mt-2 text-gray-800 leading-relaxed bg-white p-3 rounded border">
                  {currentQ.explanation}
                </p>
              )}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={resetToCategories}
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Back to Categories
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
