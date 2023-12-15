import { styled } from 'styled-components';


export const TaskPageStyled = styled.div`
  display: flex;
  & aside, & main { flex-grow: 1; }
`;
export const MainStyled = styled.main`
  width: 100%;
  min-width: 100px;
  margin: 0.937rem 0 0 0;
  min-height: calc(100vh - 87px);
  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;
export const TasksContainer = styled.div`
  gap: 1.25rem;
  display: grid;
  margin: 0.937rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
export const Top = styled.div`
  display: flex;
  margin: 0 0.937rem;
  border-radius: 8px;
  padding: 0.937rem 1.25rem;
  justify-content: space-between;
  background: ${({$colors}) => $colors.bg_Secondary};
  box-shadow: 0 0 10px ${({$colors}) => $colors.shadowColor};
`;
