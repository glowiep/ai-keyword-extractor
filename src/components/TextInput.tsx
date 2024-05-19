import { useState } from "react";
import { Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { MotionButton } from "../utils/motionUtils";
import useApplicationData from "../hooks/useApplicationData";

function TextInput() {
  const { extractKeywords } = useApplicationData();

  const [input, setInput] = useState("");
  const toast = useToast();

  const submitText = function () {
    if (input === '') {
      toast({
        title: 'Text field is empty.',
        description: 'Please enter some text before submitting.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      return;
    }
    extractKeywords(input);
  };

  const submitButtonStyles = {
    whileTap: { scale: 0.5, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" },
    whileHover: { scale: 1.1, },
    variant: "solid",
    borderRadius: "2em",
    bg: "blue.300",
    px: { base: "1.5em", md: "2em" },
    gap: { base: "0.5em", md: "1em" },
    fontSize: { base: "sm", md: "lg" },
    mt: "2em",
  };

  return (
    <>
      <Textarea
        bg="gray.100"
        color="gray.800"
        height={150}
        value={input}
        onChange={(e: {
          target: {
            value: any;
          };
        }) => setInput(e.target.value)}
      ></Textarea>
      <MotionButton {...submitButtonStyles} onClick={submitText}>
        🪄 Extract Keywords
      </MotionButton>
    </>
  );
}

export default TextInput;
