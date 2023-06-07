import { useState } from "react";
import Question from "./Question";
import questions from "./data";
const App = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <main>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              {...question}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          );
        })}
      </div>
    </main>
  );
};
export default App;
