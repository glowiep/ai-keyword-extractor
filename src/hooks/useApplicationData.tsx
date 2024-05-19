import { ACTIONS, useAppContext } from "../contexts/AppContext";

const useApplicationData = () => {
  const { state, dispatch } = useAppContext();
  
  /**
   * Extract keywords using Open API
   * @param input - the text snippet entered by the user
   */
  const extractKeywords = (input) => {
    return console.log(input, state)
    // use axios
    // return (
      // async(input: any) => {
      //   dispatch({ type: ACTIONS.EXTRACT_BEGIN })
      //   console.log(state)
      //   const options = {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      //     },
      //     body: JSON.stringify({
      //       model: 'text-davinci-003',
      //       prompt:
      //         `Extract keywords from this text. Make the first letter of every word uppercase and separate with commas \n\n` +
      //         input +
      //         '',
      //       temperature: 0.5,
      //       max_tokens: 60,
      //       top_p: 1.0,
      //       frequency_penalty: 0.8,
      //       presence_penalty: 0.0,
      //     }),
      //   };
      
      //   try {
      //     const response = await fetch(
      //       import.meta.env.VITE_OPENAI_API_URL,
      //       options
      //     );
      //     const json = await response.json;
      //     console.log(json.choices[0].text.trim());
     
      //     dispatch({ type: ACTIONS.SET_EXTRACTED, payload: json.choices[0].text.trim() })
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
    // )
  }

  return(
    extractKeywords
  )
};

export default useApplicationData;