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
align-items: center;
display: flex;
justify-content: center;
min-height: 100vh;

 .content-container {
    align-items: center;
    background-color: #374954;
    border-radius: 20px;
    box-shadow: 10px 12px 20px rgba(0, 0, 0, .2);
    display: flex;
    justify-content: center;
    min-height: 80vh;
    width: 80%;
    form {
      input, textarea {
        border: none;
        border-radius: 20px;
        font-family: 'Poppins', sans-serif;
        font-size: inherit;
        padding: .7rem 1rem;
        outline: none;
        width: 100%;
      }
    }
  }
`;
export default App;
