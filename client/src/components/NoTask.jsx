import { styled } from "styled-components";
import { SVG } from "./styledComponents/styledComponents";
import TaskSVG from '/task.svg';

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const P = styled.p`
  font-size: 1.3rem;
  text-align: center;
  & span {
    display: inline-block;
    color: #40A8F5;
  }
`;


function NoTask ({ taskFiltered, tasks, filter }) {
  return taskFiltered.length === 0 && (
    <Container>
      <SVG src={TaskSVG} alt="noTask" width="350px" height="220px" />
      <P>{tasks.length === 0 ? 'There are no tasks yet!' : <>There are no tasks with the category "<span>{filter}</span>" yet!</>}</P>
    </Container>
  );
}

export default NoTask;
