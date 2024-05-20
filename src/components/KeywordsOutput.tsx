import { Heading, Text, CircularProgress, Box } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { useAppContext } from "../contexts/AppContext";
import { MotionButton } from "../utils/motionUtils";
import useApplicationData from "../hooks/useApplicationData";

function KeywordsOutput() {
  const { copyKeywords } = useApplicationData();
  const { state } = useAppContext();
  const { isLoading, showKeywords, keywords,keywordsLength } = state;
  // Get the text string of keywords separated by commas, and remove the last comma at the end with regex
  // const keywordsText = keywords?.join(", ").replace(/,([^,]*)$/, '$1');
console.log(keywords, keywordsLength)
  const copyButtonStyles = {
    whileTap: { scale: 0.5, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" },
    whileHover: { scale: 1.1, cursor: "pointer" },
    marginTop: "1em",
    borderRadius: "full",
    w: "200px",
    bg: "blue.200",
  };
  return (
    <>
      {isLoading && <CircularProgress isIndeterminate color="blue.300" />}

      {showKeywords && (
        <>
          <Box
            bg="blue.700"
            w={400}
            padding="1em"
            borderRadius="1em"
            maxH={300}
          >
            <Heading color="white" marginBottom="0.75rem" size="normal">
              Keywords Output ({keywordsLength}):
            </Heading>
            <Text fontSize="normal" textAlign="left" paddingLeft="1em">
              {/* ARRAY OF KEYWORDS HERE */}
              {keywords}
            </Text>
          </Box>
          {/* Copy icon here */}
          <MotionButton
            {...copyButtonStyles}
            onClick={() => copyKeywords(`${keywords}`)}
          >
            <CopyIcon />
          </MotionButton>
        </>
      )}
    </>
  );
}

export default KeywordsOutput;
