import { styled } from 'styled-components';


export const TaskPageStyled = styled.div`
  display: flex;
  & aside, & main { flex-grow: 1; }
`;
export const MainStyled = styled.main`
  margin: 15px 0 0 0;
  min-height: calc(100vh - 87px);
`;
export const TasksContainer = styled.div`
  margin: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
`;
export const Top = styled.div`
  background: ${({$colors}) => $colors.bg_Secondary};
  margin: 0 15px;
  padding: 14px 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px ${({$colors}) => $colors.shadowColor};
`;
