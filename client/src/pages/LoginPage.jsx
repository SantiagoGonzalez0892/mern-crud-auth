import { Input, Row, Card, CardBody } from '../components/styledComponents/styledComponents';
import { AuthPageStyled, Separator } from '../components/styledComponents/formComponents.styled';
import { loginRequest } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';
import Paragraph from '../components/Paragraph';
import LoginSVG from '/login.svg';
import Button from '../components/Button';
import Title from '../components/Title';


function LoginPage () {
  const { colors } = useTheme();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setUser, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await loginRequest(values);
      setUser(res.data);
      setIsAuthenticated(true);
      navigate('/tasks');
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      console.log(error.response.data);
    }
  });


  return (
    <AuthPageStyled>
      <Card $borderr="8px" $colors={colors} $margin="20px">
        <Row className="login__row">
          <CardBody className="cardBody">
            <form action="" onSubmit={onSubmit}>
              <Title fontSize="1.5em" color="#40A8F5" margin="0 0 1.25rem 0">Sing in</Title>
              <Separator>
                <label htmlFor="email">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="Email" 
                  {...register('email', { required: true })} $colors={colors} $outline={true}
                />
                {errors.email && <Paragraph fontSize="0.85em" color="#ee2200">Invalid field</Paragraph>}
              </Separator>
              <Separator>
                <label htmlFor="email">Email</label>
                <Input 
                  type="password" 
                  id="password" 
                  placeholder="Password" 
                  {...register('password', { required: true })} $colors={colors} $outline={true}
                />
                {errors.email && <Paragraph fontSize="0.85em" color="#ee2200">Invalid field</Paragraph>}
              </Separator>
              <Button text="Login" background="#40A8F5" borderr="4px"/>
            </form>
          </CardBody>
          <img src={LoginSVG} alt="login" />
        </Row>
      </Card>
    </AuthPageStyled>
  );
}


export default LoginPage;
