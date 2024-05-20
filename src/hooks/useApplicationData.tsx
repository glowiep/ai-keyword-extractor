import axios from "axios";
import { ACTIONS, useAppContext } from "../contexts/AppContext";

const useApplicationData = () => {
  const { state, dispatch } = useAppContext();
  
  /**
   * Extract keywords using Open API
   * @param input - the text snippet entered by the user
   */
  const extractKeywords = async (input: string) => {
    // return console.log(input, state)
      dispatch({ type: ACTIONS.EXTRACT_BEGIN })
      console.log(state)
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
      };

      const data = {
        model: 'text-davinci-003',
        prompt:
          `Extract keywords from this text. Make the first letter of every word uppercase and separate with commas \n\n` +
          input +
          '',
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,        
      }
    
      try {
        const response = await axios.post(
          import.meta.env.VITE_OPENAI_API_URL,
          data,
          options
        );
        const json = await response.data;
        console.log(json.choices[0].text.trim());
    
        dispatch({ type: ACTIONS.SET_EXTRACTED, payload: json.choices[0].text.trim() })
      } catch (error) {
        console.log(error);
      }
  };

  // Helper function that accepts text as an argument and copies it to the user’s clipboard
  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      // if the browser supports the Clipboard API
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  /**
   * This copies the keyword outputs to the users clipboard
   * @function
   * @returns {void}
   */
  const copyKeywords = (keywordsOutput: string) => {
    copyTextToClipboard(keywordsOutput)
      .then(() => {
        // If copied successfully
       console.log("Copied to clipboard!")
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return {
    extractKeywords,
    copyKeywords
  }
  
};

export default useApplicationData;