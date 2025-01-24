import { useQuestion } from "./context/QuestionContext";
import "./App.css";
import Question from "./components/quesiton/Question";
import Start from "./components/start/Start";
import Result from "./components/result/Result";

function App() {
  const { isQuestionActive, isQuestionCompleted } = useQuestion();

  return (
    <div>
      {isQuestionCompleted ? (
        <Result />
      ) : isQuestionActive ? (
        <Question />
      ) : (
        <Start />
      )}
    </div>
  );
}

export default App;
