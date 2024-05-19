export const extractKeywords = async(setLoading: any, setExtracted: any, setKeywords: any, input: any) => {
  setLoading(true);
  setExtracted(true);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
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
    }),
  };

  try {
    const response = await fetch(
      import.meta.env.VITE_OPENAI_API_URL,
      options
    );
    const json = await response.json;
    console.log(json.choices[0].text.trim());
    setKeywords(json.choices[0].text.trim());
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};