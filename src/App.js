import styled from 'styled-components';

import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <AppStyled>
      <div className="content-container">
         <TodoForm />
      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;

 .content-container {
    background-color: #374954;
    min-height: 80;
    width: 80%;
  }
`;
export default App;
