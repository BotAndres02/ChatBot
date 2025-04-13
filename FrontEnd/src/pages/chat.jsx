import { useNavigate } from 'react-router-dom';
import ChatBot from '../components/chatBot';
import { Container, BtnContainer } from '../components/Container'
import Title from '../components/Title';
import Button from '../components/Button';
const Chat = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <Container>
      <Title headingType="h1" title="ChatBot"/>
      <ChatBot className />
      <BtnContainer>
        <Button onClick={handleClick} text="Go back"/>
      </BtnContainer>
    </Container>
  )
};

export default Chat;