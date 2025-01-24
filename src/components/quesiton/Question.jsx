import { useQuestion } from "../../context/QuestionContext";
import { questions } from "../../data/data";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Question() {
  const {
    currentQuestionIndex,
    answerQuestion,
    timer,
    isOptionsVisible,
  } = useQuestion();

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card variant="outlined" style={{ margin: "20px", maxWidth: "32vw", padding: "20px" }}>
      <CardContent>
        {currentQuestion.media && (
          <img
            src={currentQuestion.media}
            alt={currentQuestion.question}
            style={{ maxWidth:"100%", maxHeight:" 250px", height: "auto", marginBottom: "15px" }}
          />
        )}
        <Typography variant="h5" component="div" style={{  margin: "0 auto" }}>
          {currentQuestion.question}
        </Typography>
      
        <hr />
      </CardContent>
      <div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap: "10px"}}>
        {isOptionsVisible ? (
          currentQuestion.options.map((option) => (
            <button
              key={option}
              style={{
                margin: "10px",
                padding: "10px",
                cursor: "pointer",
                backgroundColor: "#1976d2",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={() => answerQuestion(option, currentQuestion)}
            >
              {option}
            </button>
          ))
        ) : (
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ margin: "10px" }}
          >
            Şıklar 4 saniye içinde görünecek.
          </Typography>
        )}
      </div>
      <Typography color="textSecondary" style={{ marginTop: "20px" }}>
          Kalan Süre: <span style={{color: "red"}}> {timer} saniye </span>
        </Typography>
    </Card>
  );
}

export default Question;
