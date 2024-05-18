import { Container, Box, Text } from "@chakra-ui/react"
import Header from "./components/Header";

function App() {
  
  return (
    <Box bg='gray.800' color='white' height='100vh' paddingTop={130} >
      <Container maxW='3xl' centerContent>
        <Header />

      </Container>
    </Box>
  );
};

export default App
