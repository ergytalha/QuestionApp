import { useQuestion } from "../../context/QuestionContext";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  Paper,
} from "@mui/material";

function Result() {
  const { results, showAnswers, toggleShowAnswers } = useQuestion();

  const correctCount = results.filter((ques) => ques.correct).length;
  const wrongCount = results.filter(
    (ques) => !ques.correct && ques.selected
  ).length;
  const emptyCount = results.filter((ques) => !ques.selected).length;

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        maxWidth: 600,
        margin: "auto",
        mt: 5,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        Test Tamamlandı!
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1">Doğru: {correctCount}</Typography>
        <Typography variant="body1">Yanlış: {wrongCount}</Typography>
        <Typography variant="body1">Boş: {emptyCount}</Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={toggleShowAnswers}
        fullWidth
        sx={{ mb: 3 }}
      >
        {showAnswers ? "Cevapları Gizle" : "Cevap Anahtarı"}
      </Button>

      <Collapse in={showAnswers}>
        <List>
          {results.map((result, index) => (
            <Box key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={`Soru: ${result.question}`}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Doğru Cevap: {result.correctAnswer}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        color={result.correct ? "green" : "red"}
                      >
                        Senin Cevabın: {result.selected || "Boş"}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < results.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Collapse>
    </Paper>
  );
}

export default Result;
