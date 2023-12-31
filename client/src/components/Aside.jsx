import { useEffect, useState } from "react";
import { useTheme } from '../context/themeContext';
import { Col, Row } from "./styledComponents/styledComponents";
import { useAuth } from '../context/authContext';
import { styled } from "styled-components";
import UserAvatar from "./UserAvatar";
import Paragraph from "./Paragraph";
import Title from "./Title";


const AsideStyled = styled.aside`
  padding: 20px;
  flex-shrink: 0;
  margin-top: 0.937rem;
  border-radius: 8px 0 0 8px;
  box-shadow: 0 0 10px ${({$colors}) => $colors.shadowColor};
  background: ${({$colors}) => $colors.bg_Secondary};
  @media (max-width: 768px) {
    display: none;
  }
`;
const Card = styled.div`
  padding: 1.25rem 0.937rem;
  border-bottom: 1px solid ${props => props.$colors.borderColor};
`;
const Left = styled.div`
  display: inline-block;
`;
const Right = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #40A8F5;
`;
const Span = styled.span`
  height: 18px;
  line-height: 18px;
  font-size: 1.2rem;
  padding: 0 0.625rem;
  display: inline-block;
  color: ${({$colors}) => $colors.color};
  border-left: 2px solid ${props => props.$color};
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

      <Card $colors={colors} $padding="1.25em" >
        <Row $justify="space-between">
          <Left>
            <Paragraph fontSize="0.9rem">Hello,</Paragraph>
            <Title fontSize="1.2rem">{user.username}</Title>
          </Left>
          <Right>
            <UserAvatar width="110px" height="110px" color="white"/>
          </Right>
        </Row>
      </Card>

      <Card $colors={colors}>
        <Row>
          <Col>
            <Paragraph fontSize="0.7rem">Total tasks</Paragraph>
            <Span $colors={colors} $color="#40A8F5">{metrics.totalTasks}</Span>
          </Col>
          <Col>
            <Paragraph fontSize="0.7rem">Completed tasks</Paragraph>
            <Span $colors={colors} $color="#4fbb4f">{metrics.completedTasks}</Span>
          </Col>
        </Row>
        <Row $margin="1.25rem 0 0 0">
          <Col>
            <Paragraph fontSize="0.7rem">Pending tasks</Paragraph>
            <Span $colors={colors} $color="red">{metrics.pendingTasks}</Span>
          </Col>
        </Row>

      </Card>

    </AsideStyled>
  );
}


export default Aside;
