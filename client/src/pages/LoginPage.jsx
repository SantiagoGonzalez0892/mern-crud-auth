import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {loginRequest} from '../api/auth';
import Button from '../components/Button';
import InputError from '../components/InputError';
import {Input, Row, Card} from '../components/styledComponents/styledComponents';
import {useAuth} from '../context/authContext';
import {useTheme} from '../context/themeContext';
import { AuthPageStyled, Separator, FormTitle } from '../components/styledComponents/formComponents.styled';
import LoginSVG from '/login.svg';


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
      <Card $padding="20px" $borderr="8px" $margin="15px auto 0 auto" $colors={colors}>
        <Row>
          <div>
            <form action="" onSubmit={onSubmit}>
              <FormTitle>Sing in</FormTitle>
              <Separator>
                <label htmlFor="email">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="Email" 
                  {...register('email', { required: true })} $colors={colors} $outline={true}
                />
                {errors.email && <InputError message="Invalid field"/>}
              </Separator>
              <Separator>
                <label htmlFor="email">Email</label>
                <Input 
                  type="password" 
                  id="password" 
                  placeholder="Password" 
                  {...register('password', { required: true })} $colors={colors} $outline={true}
                />
                {errors.password && <InputError message="Invalid field"/>}
              </Separator>
              <Button text="Login" background="#40A8F5" borderr="4px"/>
            </form>
          </div>
          <img src={LoginSVG} alt="" width="485px" />
        </Row>
      </Card>
    </AuthPageStyled>
  );
}


export default LoginPage;
