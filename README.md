# AI Keyword Extractor 💬

This is built with React and Chakra UI, with OpenAI integration to extract the best keywords based on the provided text.

!["AI Keyword Extractor project"](https://github.com/glowiep/ai-keyword-extractor/blob/main/public/ai-keyword-extractor.png?raw=true)

## Acknoledgements ✅
Credits to TraversyMedia <a href="https://www.traversymedia.com/blog/ai-keyword-extractor-with-react-openai">tutorial</a>. 

Text snippet used in the image is a summary from one of my favorite books on software engineering: 

📚 <a href="https://www.audible.com/pd/Modern-Software-Engineering-Audiobook/B0BLY5PL64">"Modern Software Engineering", by Dave Farley</a>

---

### How this project differs from the tutorial example:

- Typescript is used in this project.
- useContext and useReducer is implemented to handle state.
- Axios is used instead of fetch() for HTTP requests.
- Additional feature - Copy keywords to clipboard button.
- Additional feature - Keyword Output section includes the keywords count.
- Minor differences in interface design.
- Framer-motion was used with ChakraUI components to animate displays.

## Getting Started ✨

Install dependencies:

```bash
npm install
```


Rename `.env.example` to `.env` and add your API key. You can get your key at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).

```bash
VITE_OPENAI_API_KEY='ADD_YOUR_KEY_HERE'
```

Important: Your API key is not secure as there is no backend. If you decide to use this tool in production, you should add a backend to it and store the API key there.

Run the dev server:

```bash
npm run dev
```

The application will run on [http://localhost:3000](http://localhost:3000) in your browser.

To build for production:

```bash
npm run build
```


## Learnings 📚

This application was created with the fundamental principles in software engineering in mind:

- <b>Modularity</b> -  Smaller, manageable, and interchangeable parts called modules should encapsulate a specific piece of functionality. 
  - In this project: 
    <br> Parts of the application are broken down into Footer, Header, TextInput and KeywordsOutput as individual components.

- <b>Cohesion</b> - The degree to which the elements within a module belong together. 
  - In this project: 
    <br>Elements in the KeywordsOutput component work together to perform a single task - to submit a text input. 

- <b>Separation of Concerns</b> - Clearly dividing the responsibilities of different parts of the application.
  - In this project:
    <br> AppContext contains the context provider where the context is set up and managed, and the reducer function in this file is solely responsible for handling state transition logic.

- <b>Information Hiding and Abstraction</b> - Conceal the internal details of a module or component, exposing only what is necessary for the use of that module or component.
  - In this project:
    <br> Text strings are isolated from the business logic. It is abstracted and placed in const/applicationText.tsx file.
