import { Heading, Text, CircularProgress, Box } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
// import { useAppContext } from "../contexts/AppContext";
import { MotionButton } from "../utils/motionUtils";
import useApplicationData from "../hooks/useApplicationData";

function KeywordsOutput() {
  const { copyKeywords } = useApplicationData();
  // const { state } = useAppContext();
  // const { isLoading, showKeywords, keywords } = state;
  // Mock
  const showKeywords = true;
  const isLoading = false;
  const keywords = [
    "test",
    "keyword",
    "1",
    "1",
    "test",
    "q",
    "1",
    "test",
    "q",
    "1",
    "test",
    "q",
    "1",
    "test",
    "q",
    "1",
  ];
  const keywordsText = keywords?.join(", ")

  const copyButtonStyles = {
    whileTap: { scale: 0.5, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" },
    whileHover: { scale: 1.1,  cursor: "pointer" },
    marginTop: "1em", 
    borderRadius: "full" ,
    w: "200px",
    bg: 'blue.200', 
  }
  return (
    <>
      {showKeywords &&
        (isLoading ? (
          <CircularProgress isIndeterminate color="blue.300" />
        ) : (
          <>
            <Box
              bg="blue.700"
              w={300}
              padding="1em"
              borderRadius="1em"
              maxH={300}
            >
              <Heading color="white" marginBottom="1rem" size="normal">
                Keywords Output ({keywords?.length}):
              </Heading>
              <Text fontSize="normal" textAlign="left" paddingLeft="1em">
                {/* ARRAY OF KEYWORDS HERE */}
                {keywordsText}
              </Text>
            </Box>
            {/* Copy icon here */}
            <MotionButton {...copyButtonStyles} onClick={copyKeywords(`${keywordsText}`)}>
              <CopyIcon />
            </MotionButton>
          </>
        ))}
    </>
  );
}

export default KeywordsOutput;
