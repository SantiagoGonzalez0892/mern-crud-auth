import {Link} from "react-router-dom";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import {Col, Row, Card} from "../../components/styledComponents/styledComponents";
import Title from "../../components/Title";
import {useTheme} from "../../context/themeContext";
import {HomeComponent} from "./Home.style";

function Home () {
  const { colors } = useTheme();

  return (
    <HomeComponent>
      <Card $colors={colors} $borderr="8px" $margin="20px 0">

      <Row className="Home-row">
        <Col>
          <Title 
            lineHeight="3.rem" 
            margin="0 0 20px 0" 
            fontSize="3em" 
            color="#40A8F5"
          >
            ¡Bienvenido a TuApp de tareas!
          </Title>
          <Paragraph fontSize="1.2em">
            Entra a un mundo donde la organización es sinónimo de simplicidad. Crea, gestiona y prioriza tus tareas desde cualquier lugar.<br/><br/>
            Descubre la magia de la organización simplificada. ¡Únete a nosotros y comienza a alcanzar tus metas, una tarea a la vez!
          </Paragraph>
        </Col>
        <Col className="Home-img__container">
          <img src="/home.svg" alt="" width="100%" height="100%" />
        </Col>
      </Row>
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <Link to="/register">
            <Button background="#40A8F5" borderr="4px" text="Get started"/>
          </Link>
        </Col>
      </Row>
      </Card>
    </HomeComponent>
  );
}


export default Home;
