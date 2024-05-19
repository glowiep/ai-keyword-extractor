import { Container, Box } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";

function App() {
  const [keywords, setKeywords] = useState([]);
  const [isExtracted, setExtracted] = useState(false);
  const [loading, setLoading] = useState(false);
  
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
          transition={{ delay: .75 }}
          style={{
            textAlign: 'center',
            paddingTop: "2.25em",
          }}
        >
          <TextInput setLoading={setLoading} setExtracted={setExtracted} setKeywords={setKeywords} />
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
