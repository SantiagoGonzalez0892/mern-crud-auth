import { Card, CardBody, Input, Row } from "../../components/styledComponents/styledComponents";
import { Separator, AuthPageStyled } from '../../components/styledComponents/formComponents.styled.js'
import { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { registerRequest } from "../../api/auth";
import { PageVisualizer } from "./RegisterPage.style";
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../../context/themeContext";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { styled } from "styled-components";
import Avatar1 from "../../components/avatars/Avatar1";
import Avatar2 from "../../components/avatars/Avatar2";
import Avatar3 from "../../components/avatars/Avatar3";
import Avatar4 from "../../components/avatars/Avatar4";
import RegisterSVG from '/register.svg';
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import Title from "../../components/Title";



const Form = styled.form`
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



const Slider = styled.div`
  overflow: hidden;
`;
const PagesContainer = styled.div`
  width: 850px;
  display: flex;
  transition: transform .4s ease;
  
  &.actived {
    transform: translateX(-100%);
  }
`;
const FirstPage = styled.div`
  width: 850px;
  flex-shrink: 0;
`;
const SecondPage = styled.div`
  width: 850px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 1.3rem;
    text-align: center;
  }
`;

const CardItem = styled(Card)`
  cursor: pointer;
  transition: transform .25s;

  &.selected {
    border: 1px solid #40A8F5;
    box-shadow: 0 0 10px #40A8F5cc;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.1);
  }
`;






function RegisterPage () {
  const { colors } = useTheme();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setIsAuthenticated, setUser } = useAuth();
  const [page, setPage] = useState(1);
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();


  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await registerRequest({...values, avatar});
      setUser(res.data);
      setIsAuthenticated(true);
      navigate('/tasks');
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      console.log(error.response.data);
    }
  });

  useEffect(() => {
    if (errors.username || errors.email || errors.password) setPage(1);
  }, [errors.username, errors.email, errors.password]);

  const nextPage = () => {
    setPage(page + 1);
  }
  const previusPage = () => {
    setPage(page - 1)
  }

  const changeAvatar = (e) => {
    setAvatar(e);
  }

  return (
    <AuthPageStyled>
      <Card $margin="50px auto" $padding="20px" $borderr="8px" $colors={colors} width="max-content">


        <PageVisualizer $colors={colors}>
          <span className={page === 1 ? 'actual' : 'completed'}>
            {page > 1 && <IoMdCheckmarkCircle /> }
          </span>
          <div className={page > 1 ? 'completed' : ''}></div>
          <span className={page > 2 ? 'completed' : page === 2 ? 'actual' : ''}>
            {page > 2 && <IoMdCheckmarkCircle /> }
          </span>
        </PageVisualizer>
        
      
        <Slider>
          <Form action="" onSubmit={onSubmit} >
            <PagesContainer className={page === 2 && "actived"}>

              <FirstPage>
                <Row>
                  <CardBody>
                    <Title fontSize="1.5rem" color="#40A8F5" margin="0 0 20px 0">Sign up</Title>

                    <Separator>
                      <label htmlFor="username">Username</label>
                      <Input 
                        id="username" 
                        type="text" 
                        placeholder="Username" 
                        {...register('username', { required: true })} $colors={colors} $outline={true}
                      />
                      {errors.username && 
                        <Paragraph color="#ff0022" fontSize="0.85rem">Invalid field</Paragraph>
                      }
                    </Separator>

                    <Separator>
                      <label htmlFor="email">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        {...register('email', { required: true })} $colors={colors} $outline={true} 
                      />
                      {errors.email && 
                        <Paragraph color="#ff0022" fontSize="0.85rem">Invalid field</Paragraph>
                      }
                    </Separator>

                    <Separator>
                      <label htmlFor="password">Password</label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        {...register('password', { required: true })} $colors={colors} $outline={true} 
                      />
                      {errors.password && 
                        <Paragraph color="#ff0022" fontSize="0.85rem">Invalid field</Paragraph>
                      }
                    </Separator>

                    <Button 
                      text="Next" 
                      background="#40A8F5" 
                      borderr="4px" 
                      event={nextPage} 
                      prevent={true}
                    />
                  </CardBody>
                  <img src={RegisterSVG} alt="" width="485px" />
                </Row>
              </FirstPage>

              <SecondPage>
                <Title>Choose your avatar</Title>
                <Row $justify="space-evenly">
                  <CardItem $borderr="8px" $colors={colors} $padding="20px" $background={colors.bg_Primary} onClick={() => changeAvatar('avatar1')} className={avatar === 'avatar1' && 'selected'}>
                    <Avatar1 width="115px" height="115px" color="#40A8F5"/>
                  </CardItem>
                  <CardItem $borderr="8px" $colors={colors} $padding="20px" $background={colors.bg_Primary} onClick={() => changeAvatar('avatar2')} className={avatar === 'avatar2' && 'selected'}>
                    <Avatar2 width="115px" height="115px" color="#40A8F5"/>
                  </CardItem>
                  <CardItem $borderr="8px" $colors={colors} $padding="20px" $background={colors.bg_Primary} onClick={() => changeAvatar('avatar3')} className={avatar === 'avatar3' && 'selected'}>
                    <Avatar3 width="115px" height="115px" color="#40A8F5"/>
                  </CardItem>
                  <CardItem $borderr="8px" $colors={colors} $padding="20px" $background={colors.bg_Primary} onClick={() => changeAvatar('avatar4')} className={avatar === 'avatar4' && 'selected'}>
                    <Avatar4 width="115px" height="115px" color="#40A8F5"/>
                  </CardItem>
                </Row>
                <Row $justify="end">
                  <Button text="Previus" background="#40A8F5" borderr="4px" event={previusPage} prevent={true}/>
                  <Button text="Register" background="#40A8F5" borderr="4px" disabled={avatar === ''} />
                </Row>
              </SecondPage>
            </PagesContainer>
          </Form>
        </Slider>

      </Card>
    </AuthPageStyled>
  );
}


export default RegisterPage;
//215
