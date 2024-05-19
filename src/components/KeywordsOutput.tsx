import { Heading, Text, CircularProgress, Box } from "@chakra-ui/react";
import { useAppContext } from "../contexts/AppContext";

function KeywordsOutput() {
  // const { state } = useAppContext();
  // const { isLoading, showKeywords } = state;
  const showKeywords = true;
  const isLoading = false;
  const keywords = ["test", "q", "1","test", "q", "1","test", "q", "1","test", "q", "1","test", "q", "1","test", "q", "1",]
  return (
    <>
      {showKeywords && (isLoading ? (
        <CircularProgress isIndeterminate color="blue.300" />
      ) : (
        <>
          <Box bg="blue.700" w={300} padding="1em" borderRadius="1em" maxH={300}>          
            <Heading color="white" marginBottom="1rem" size="normal">
              Keywords Output ({keywords?.length}):
            </Heading>
            <Text fontSize="normal" textAlign="left" paddingLeft="1em">
              {/* ARRAY OF KEYWORDS HERE */}
              {keywords?.join(", ") }
            </Text>
          </Box>
          {/* Copy icon here */}
          {/* Example:
          
            <ContentCopyIcon
            onClick={() => copyMemo(props.id)} 
            fontSize="small"
            sx={{
              ":hover": {
                cursor: "pointer",
              },
            }}
          /> */}
        </>
      ))}
    </>
  );
}

export default KeywordsOutput;
