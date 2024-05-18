import { Container, Box } from "@chakra-ui/react"
import { motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  
  return (
    <Box bg='gray.800' color='white' height='100vh' paddingTop={130} >
      <Container maxW='3xl' centerContent>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            paddingTop: "2.25em",
          }}
        >
          <Header />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            textAlign: 'center',
            paddingTop: "2.25em",
          }}
        >
          <Footer />
        </motion.div>
      </Container>
    </Box>
  );
};

export default App
