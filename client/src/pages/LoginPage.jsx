import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {loginRequest} from '../api/auth';
import Button from '../components/Button';
import {Input, Row, Card, CardBody} from '../components/styledComponents/styledComponents';
import {useAuth} from '../context/authContext';
import {useTheme} from '../context/themeContext';
import { AuthPageStyled, Separator } from '../components/styledComponents/formComponents.styled';
import LoginSVG from '/login.svg';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';


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
      <Card $padding="1.25em" $borderr="8px" $margin="0.937rem auto 0 auto" $colors={colors}>
        <Row>
          <CardBody style={{ width: '350px', height: '100%' }}>
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
          <img src={LoginSVG} alt="" width="485px" />
        </Row>
      </Card>
    </AuthPageStyled>
  );
}


export default LoginPage;
