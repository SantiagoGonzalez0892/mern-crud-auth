import { styled } from 'styled-components';


export const TaskPageStyled = styled.div`
  display: flex;
  & aside, & main { flex-grow: 1; }
`;
export const MainStyled = styled.main`
  margin: 0.937rem 0 0 0;
  min-height: calc(100vh - 87px);
  width: 100%;
  min-width: 100px;
  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;
export const TasksContainer = styled.div`
  margin: 0.937rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.25rem;
  justify-content: center;
`;
export const Top = styled.div`
  background: ${({$colors}) => $colors.bg_Secondary};
  margin: 0 0.937rem;
  padding: 0.937rem 1.25rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px ${({$colors}) => $colors.shadowColor};
`;
