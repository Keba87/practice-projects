# AI-KeySummarize
#### Video Demo: <https://youtu.be/U0IcekjnUzs>
#### Description:

AI-KeySummarize is a web application developed as a final project for the ***Harvard CS50 course***. It uses the OpenAI API to extract keywords and generate summaries from text input. The application is built using React, Chakra UI, and JavaScript.

The main folder of the project contains the following files:

* `.env`: environment file for storing sensitive data such as API keys
* `.gitignore`: configuration file to specify files and directories that should be ignored by Git
* `index.html`: HTML file for the main page of the application
* `package-lock.json`: automatically generated file that stores information about the installed npm packages
* `package.json`: configuration file for npm that specifies the dependencies and scripts for the project
* `vite.config.js`: configuration file for the Vite development server

The project also includes the following folders:

* `node_modules`: directory where npm installs the project dependencies
* `public`: directory for storing static assets such as images and fonts
* `src`: directory that contains the source code of the application

The `src` folder contains the following files:

* `App.js`: main component of the application that handles user input, calls the OpenAI API for extracting keywords and generating summaries. It includes sub-components like `Header`, `Footer`, `TextInput`, and `ResultsModal`.
* `main.jsx`: The entry point of the application that renders the App component to the DOM and sets up the Chakra UI theme.
* `theme.js`: configuration file for the Chakra UI theme, including colors and initial color mode

The `components` folder in `src` includes the following files:

* `Footer.jsx`: component that displays the footer of the application, including the OpenAI logo
* `Header.jsx`: component that displays the header of the application
* `ResultsModal.jsx`: component that displays a modal with the extracted keywords and summary
* `TextInput.jsx`: component that handles user input for the text to be summarized

The application uses the Chakra UI library for styling and provides a user-friendly interface for inputting text, extracting keywords, and generating summaries. The extracted keywords and summaries are displayed in a modal window using the ResultsModal component. The application also supports light and dark color modes, which can be toggled using the color mode switch provided by Chakra UI.

The text inputted by the user is passed to the extractKeywords and summarizeText functions in the App component, which make API calls to OpenAI's GPT-3 model using the fetch function. The extracted keywords and summaries are then displayed in the `ResultsModal` component. The App component uses useState hooks to manage the state of keywords, summary, loading, and modal visibility.

The design choices for the application were made with the goal of providing a simple and user-friendly interface for extracting keywords and generating summaries from text input. The Chakra UI library was chosen for its flexibility and ease of use in creating responsive and accessible user interfaces. The use of React hooks and functional components allows for a more concise and readable codebase. The `App.jsx` component handles state management and API calls, while the sub-components provide the UI elements for user interaction.

*To run the application locally, follow these steps:*

1. Install the dependencies using npm install.
2. Set up the required environment variables in the .env file.
3. Start the development server using npm run dev.
4. Access the application in your web browser at http://localhost:3000.

This project was created as a part of the Harvard ***CS50 course***, and it demonstrates the use of React, Chakra UI, and the OpenAI API for building a web application that performs text summarization and keyword extraction tasks.