import { Card, CardBody, Input, Row } from "../../components/styledComponents/styledComponents";
import { Separator, AuthPageStyled } from '../../components/styledComponents/formComponents.styled.js'
import { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { registerRequest } from "../../api/auth";
import { PageVisualizer, CardItem, Slider, SliderContainer } from "./RegisterPage.style";
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../../context/themeContext";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import Avatar1 from "../../components/avatars/Avatar1";
import Avatar2 from "../../components/avatars/Avatar2";
import Avatar3 from "../../components/avatars/Avatar3";
import Avatar4 from "../../components/avatars/Avatar4";
import RegisterSVG from '/register.svg';
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import Title from "../../components/Title";



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
      <Card $margin="20px" $padding="1.25em" $borderr="8px" $colors={colors} width="max-content">

        <PageVisualizer $colors={colors}>
          <span className={page === 1 ? 'actual' : 'completed'}>
            {page > 1 && <IoMdCheckmarkCircle /> }
          </span>
          <div className={page > 1 ? 'completed' : ''}></div>
          <span className={page > 2 ? 'completed' : page === 2 ? 'actual' : ''}>
            {page > 2 && <IoMdCheckmarkCircle /> }
          </span>
        </PageVisualizer>


        <SliderContainer>
          <form action="" onSubmit={onSubmit}>
            <Slider className={page === 2 && 'actived'}>
              <li>
                <Row className="register__row">
                  <CardBody className="cardBody">
                    <Title fontSize="1.5em" color="#40A8F5" margin="0 0 20px 0">Sign up</Title>

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
                  <img src={RegisterSVG} alt="" />
                </Row>
              </li>
              <li>
                  <Title textAlign="center">Choose your avatar</Title>
                  <Row $justify="space-evenly" style={{flexWrap: 'wrap'}}>
                    <CardItem $borderr="8px" $colors={colors} $padding="1.25em" width="155px" height="155px" $background={colors.bg_Primary} onClick={() => changeAvatar('avatar1')} className={avatar === 'avatar1' && 'selected'}>
                      <Avatar1 width="100%" height="100%" color="#40A8F5"/>
                    </CardItem>
                    <CardItem $borderr="8px" $colors={colors} $padding="1.25em" width="155px" height="155px" $background={colors.bg_Primary} onClick={() => changeAvatar('avatar2')} className={avatar === 'avatar2' && 'selected'}>
                      <Avatar2 width="100%" height="100%" color="#40A8F5"/>
                    </CardItem>
                    <CardItem $borderr="8px" $colors={colors} $padding="1.25em" width="155px" height="155px" $background={colors.bg_Primary} onClick={() => changeAvatar('avatar3')} className={avatar === 'avatar3' && 'selected'}>
                      <Avatar3 width="100%" height="100%" color="#40A8F5"/>
                    </CardItem>
                    <CardItem $borderr="8px" $colors={colors} $padding="1.25em" width="155px" height="155px" $background={colors.bg_Primary} onClick={() => changeAvatar('avatar4')} className={avatar === 'avatar4' && 'selected'}>
                      <Avatar4 width="100%" height="100%" color="#40A8F5"/>
                    </CardItem>
                  </Row>
                  <Row $justify="end">
                    <Button text="Previus" background="#40A8F5" borderr="4px" event={previusPage} prevent={true}/>
                    <Button text="Register" background="#40A8F5" borderr="4px" disabled={avatar === ''} />
                  </Row>
              </li>
            </Slider>
          </form>
        </SliderContainer>
      </Card>
    </AuthPageStyled>
  );
}


export default RegisterPage;
//215
