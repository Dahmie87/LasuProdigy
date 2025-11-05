import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function QuickTestHeader() {
  return (
    <header className="bg-background-light sticky shadow-sm top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <Link to={"/practice"}>
          <button className="text-gray-800">←</button>
        </Link>
        <h1 className="text-lg font-bold text-gray-700">Quick test</h1>
      </div>
    </header>
  );
}

export default function QuickTestPage() {
  type Option = { option_text: string; is_correct: boolean };
  type Question = { id: number; question_text: string; options: Option[] };

  const BASE_URL = "http://localhost:8000/api/questions";
  const [question, setQuestion] = useState<Question | null>(null);
  const [currentId, setCurrentId] = useState(3); // starting from question ID 1
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [loading, setLoading] = useState(false);

  // Fetch one question at a time
  const fetchQuestion = async (id: number) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/${id}/`);
      const data = await res.json();
      setQuestion(data);
    } catch (err) {
      console.error("Failed to load question:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion(currentId);
  }, [currentId]);

  const handleSelect = (option: string) => {
    if (question) {
      setSelectedAnswers((prev) => ({ ...prev, [question.id]: option }));
    }
  };

  return (
    <div className="bg-background-light min-h-screen flex flex-col justify-between">
      <QuickTestHeader />

      <div className="p-4 flex-1">
        {loading ? (
          <p>Loading question...</p>
        ) : question ? (
          <>
            <p className="text-sm font-medium text-gray-500 mb-2">
              Question {question.id}
            </p>
            <p className="text-base font-semibold mb-4">
              {question.question_text}
            </p>

            <div className="space-y-3">
              {question.options.map((opt) => (
                <label
                  key={opt.option_text}
                  className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer ${
                    selectedAnswers[question.id] === opt.option_text
                      ? "bg-blue-100 border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="answer"
                    checked={selectedAnswers[question.id] === opt.option_text}
                    onChange={() => handleSelect(opt.option_text)}
                  />
                  {opt.option_text}
                </label>
              ))}
            </div>
          </>
        ) : (
          <p>No question found</p>
        )}
      </div>

      {/* ==== Footer ==== */}
      <footer className="bg-background-light p-4">
        <div className="flex justify-between items-center gap-4">
          <button
            disabled={currentId <= 1}
            onClick={() => setCurrentId((prev) => prev - 1)}
            className="flex-1 py-2 px-4 rounded-lg text-sm font-bold bg-gray-200 text-gray-800 disabled:opacity-50"
          >
            Previous
          </button>

          <button
            onClick={() => setCurrentId((prev) => prev + 1)}
            className="flex-1 py-2 px-4 rounded-lg text-sm font-bold bg-blue-500 text-white"
          >
            Next
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => console.log(selectedAnswers)}
            className="w-full py-2.5 px-4 rounded-lg text-sm font-bold border border-blue-500 text-blue-500"
          >
            Submit
          </button>
        </div>
      </footer>
    </div>
  );
}
