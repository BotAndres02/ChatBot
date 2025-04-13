import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, BtnContainer  } from "./Container";
import Title from "./Title";
import Button from "./Button";
import FormInput from "./FormInput";
import Swal from 'sweetalert2';



const AddQuestion = () => {

  const [ question, setQuestion ] = useState('');
  const [ answer, setAnswer ] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/chats/add', {question, answer})

      Swal.fire({
        text: "Question was successfully added",
        icon: "success",
        toast: true,
        timer: 2000,
        showConfirmButton: false,
        width: 380,
        padding: "0.5rem",
      });

      setQuestion('')
      setAnswer('');
    } catch (error) {
      console.error('Error, question could not be added', error);
    }
  }

  const handleNavigate = () => navigate('/');

  const handleQuestionOnChange = (e) => setQuestion(e.target.value);
  const handleAnswerOnChange = (e) => setAnswer(e.target.value);

  return (
    <Container>
      <Title headingType="h1" title="Add Questions" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <FormInput text="Question" value={question} onChange={handleQuestionOnChange}/>
        </div>
        <div>
          <FormInput text="Answer" value={answer} onChange={handleAnswerOnChange}/>
        </div>
        <BtnContainer>
          <Button onClick={handleNavigate} text="Go back" />
          <Button type="submit" text="Save" />
        </BtnContainer>
      </form>
    </Container>
  )

};

export default AddQuestion;
