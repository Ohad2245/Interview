import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { CryptoState } from "../../CryptoContext";

function UserQuestions({ handleClose, questionId, setQuestionId }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const { setAlert } = CryptoState();

  const handleAddQuestion = async () => {
    const questionObj = {
      question: question,
      answer: answer,
      questionId:questionId
    };
    try {
      await addDoc(collection(db, "questions"), questionObj);
      setQuestion("");
      setAnswer("");
      setQuestionId('');
      setAlert({
        open: true,
        message: `The question has been sent, will be confirmed by the manager soon          `,
        type: "success",
      });
      handleClose();
    } catch (error) {
      console.error("Error adding question: ", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <TextField
        label="Question"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
      />
      <TextField
        label="Answer"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
      />
      <Button variant="contained" onClick={handleAddQuestion}>
        Submit
      </Button>
    </div>
  );
}

export default UserQuestions;
