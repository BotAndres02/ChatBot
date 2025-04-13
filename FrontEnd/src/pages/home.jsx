import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Title from '../components/Title';
import { Container, BtnContainer  } from "../components/Container";

const Home = () => {

  const navigate = useNavigate();

  const handleAddQuestions = () => navigate('/add');
  const handleUseChat = () => navigate('/chat');

  return (
    <Container >
        <Title headingType="h1" title='CHATBOT IN MERN' />
        <BtnContainer>
          <Button onClick={handleAddQuestions} text='Add Questions' />
          <Button onClick={handleUseChat} text='Use Chat' />
        </BtnContainer>
    </Container>
  );
}

export default Home;


