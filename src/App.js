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
    /* align-items: center; */
    align-items: flex-start;
  background: linear-gradient(to right, #005aa7, #fffde4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 20px;
    box-shadow: 10px 12px 20px rgba(0, 0, 0, .2);
    display: flex;
    justify-content: center;
    height: 80vh;
    overflow-y: scroll;
    width: 80%;

    ::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
    background-color: #6bbe92;
  }
  h3 {
    font-size: 15px;
  }
  p {
    font-size: 15px;
  }
    form, input {
      margin-top: 40px;
    }
    form input, textarea {
        background-color: #4F6877;
        border: none;
        border-radius: 15px;
        filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
        font-size: 15px;
        padding: .7rem 1rem;
        justify-content: center;
        margin-left: 15px;
        margin: .5rem ;
        width: 80%;
        ::-webkit-input-placeholder{
          color:white;
          opacity: 60%;
        }
    }
    }
  }
`

export default App;
