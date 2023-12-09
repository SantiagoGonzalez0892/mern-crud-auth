import { styled } from "styled-components";
import { useTheme } from '../context/themeContext';
import { useAuth } from '../context/authContext';
import {Col, Row} from "./styledComponents/styledComponents";
import Avatar1 from "./avatars/Avatar1";
import Avatar2 from "./avatars/Avatar2";
import Avatar3 from "./avatars/Avatar3";
import Avatar4 from "./avatars/Avatar4";
import {useEffect, useState} from "react";
import UserAvatar from "./UserAvatar";


const AsideStyled = styled.aside`
  background: ${({$colors}) => $colors.bg_Secondary};
  margin-top: 15px;
  padding: 20px;
  border-radius: 8px 0 0 8px;
  width: 40%;
  min-width: 280px;
  max-width: 350px;
  flex-shrink: 0;
  box-shadow: 0 0 10px ${({$colors}) => $colors.shadowColor};
`;
const Card = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid ${props => props.$colors.borderColor};
`;
const Left = styled.div`
  display: inline-block;

  p { font-size: .9rem; }
  h2 { font-size: 1.2rem; }
`;
const Right = styled.div`
  background: #40A8F5;
  width: 110px;
  height: 110px;
  border-radius: 50%;
`;

const P = styled.p`font-size: 0.7rem;`;
const Span = styled.span`
  display: inline-block;
  height: 18px;
  line-height: 18px;
  font-size: 1.2rem;
  color: ${({$colors}) => $colors.color};
  border-left: 2px solid ${props => props.$color};
  padding: 0 10px;
`;



function Aside ({ tasks }) {
  const { colors } = useTheme();
  const { user } = useAuth();
  const [metrics, setMetrics] = useState({});
  

  useEffect(() => {
    let completed = tasks.filter((task) => task.done);
    let pending = tasks.filter((task) => !task.done);

    setMetrics({
      totalTasks: tasks.length,
      completedTasks: completed.length, 
      pendingTasks: pending.length
    });
  }, [tasks]);

  return (
    <AsideStyled $colors={colors}>

      <Card $colors={colors} >
        <Row $justify="space-between">
          <Left>
            <p>Hello,</p>
            <h2>{user.username}</h2>
          </Left>
          <Right>
            <UserAvatar width="110px" height="110px" color="white"/>
          </Right>
        </Row>
      </Card>

      <Card $colors={colors}>
        <Row>
          <Col>
            <P>Total tasks</P>
            <Span $colors={colors} $color="#40A8F5">{metrics.totalTasks}</Span>
          </Col>
          <Col>
            <P>Completed tasks</P>
            <Span $colors={colors} $color="#4fbb4f">{metrics.completedTasks}</Span>
          </Col>
        </Row>
        <Row $margin="20px 0 0 0">
          <Col>
            <P>Pending tasks</P>
            <Span $colors={colors} $color="red">{metrics.pendingTasks}</Span>
          </Col>
        </Row>

      </Card>

    </AsideStyled>
  );
}


export default Aside;
