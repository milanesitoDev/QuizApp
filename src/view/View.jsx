import QuestionComponent from "../components/Question/QuestionComponent";
import { Quiz } from "../components/QuestionPoint/Quiz";
import Calculator from "../components/calculator/Calculator";
import { QuizMemory } from "../components/quiz-memory/QuizMemory";
import { QuizQuestion } from "../components/quiz-question/QuizQuestion";
import { VisualQuiz } from "../components/quiz-visual/VisualQuiz";
import "./index.css";

export const View = () => {
  return (
    <>
      <section>
        <QuizQuestion />
        <QuestionComponent/>
        <VisualQuiz />
        <QuizMemory />

        <Quiz />
      </section>
    </>
  );
};
