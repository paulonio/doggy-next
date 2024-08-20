import Button from '@/components/button';
import { Content, Wrapper } from './styled';

const HomePageScreen = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Book your doggy spa day!</h1>
        <Button href="/book-appointment" background="primary">
          Book Appointment
        </Button>
      </Content>
    </Wrapper>
  );
};

export default HomePageScreen;
