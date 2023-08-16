import { styled } from "styled-components";
import { Home } from "./Home";
import { Route , BrowserRouter , Routes} from 'react-router-dom'
import { Education } from "./Education";
import { Contact } from "./Contact";
import { About } from "./About";
import WrongPage from "./WrongPage";
const Container = styled.div`
  top: 0;
  left: 0;
  background-color: #241c38;
  width: 100%;
  height : 100%;
  background-size: cover;
  padding-bottom : 20px;
`;
function App() {
  return (
    <Container>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home />} />
     <Route path="/education" element={<Education/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/*" element={<WrongPage/>} />
    </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
