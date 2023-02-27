# RS Rush

_Authors_: [Alexei Timashkov](https://github.com/AlexeiTim), [Artem](https://github.com/Arterixs), [Alexei](https://github.com/bp26);
_Mentor_: [Denis](https://github.com/Wolf-Den1994)

_Watch Deploy_ : [https://rs-rush.netlify.app]

## Used technologies:

### Front-end:

- TypeScript - A strongly typed programming language which builds on JavaScript giving you better tooling at any scale.
- ESLint - A tool for identifying and reporting on patterns found in JavaScript code, with the goal of making code more consistent and avoiding bugs.
- Prettier - A code formatter that removes all original styling and ensures that all outputted code conforms to a consistent style.
- Sass/Scss - A most advanced and stable professional-grade CSS extension.
- PostCss - PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
- Fabric.js - Fabric.js is a framework that makes it easy to work with HTML5 canvas element. It is an interactive object model on top of canvas element. It is also an SVG-to-canvas parser.
- Axios - Promise based HTTP client for the browser and node.js.
- Boostrap - Sleek, intuitive, and powerful front-end framework for faster and easier web development.
- Eventemitter3 - EventEmitter3 is a high performance EventEmitter. It has been micro-optimized for various of code paths making this, one of, if not the fastest EventEmitter available for Node.js and browsers. The module is API compatible with the EventEmitter that ships by default with Node.js but there are some slight differences.

### Back-end:

- Node.js - A JavaScript runtime, is designed to build scalable network applications.
- TypeScript - A strongly typed programming language which builds on JavaScript giving you better tooling at any scale.
- Mongoose - A special ODM library for working with MongoDB, which allows you to map class objects and collection documents from the database.
- Express - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- Cors - A browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
- Nodemon - A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- Cloudinary - Cloudinary is a powerful media API for websites and mobile apps alike, Cloudinary enables developers to efficiently manage, transform, optimize, and deliver images and videos through multiple CDNs.
- Cookie-parser - Cookie-parser is a node.js package which allows to parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- Cors - Cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- Jsonwebtoken - An implementation of JSON Web Tokens. JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.
- Multer - Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
- Ws - Ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation.

## Application functionality:

### Home

- Home page serves to give an initial impression of the application.
- Implemented button ‘Get started’. Depending on wherever the user is authenticated clicking on this button either opens an authentication modal or opens the ‘Lessons’ page.

### Footer

- Footer contains links to github accounts of the authors of the application, year of creation of the application, course logo with a link to the course.

### Header

- Header contains a logo, links to all pages of the application and, depending on wherever the user is authenticated, either a ‘Sign in’ button or user login, user avatar (link to user page) and ‘Logout’ button.
- Clicking on the ‘Sign in’ button opens the authentication modal.
- Clicking on the ‘Logout’ button destroys user cookies and reloads the page.
- User avatar functions as a link to the ‘User’ page.

### Chat

- Chat allows authenticated users to communicate with each other.
- ‘Open chat’ button is situated in the bottom right corner of the application and is blocked until the user signs in. Clicking on it opens the chat modal.
- In order to send a message type in your message in the textarea and click on the ‘Send’ button. If the textarea is empty your message won’t be sent. As soon as the message is sent it will be shown in the chat.
- If any user signs in, the chat will display a notification ‘...... has joined in’.
- If a message is sent in the chat, while your chat is closed, a sound will be played and the number of unread messages will be shown above the ‘Open chat’ button. In order to turn off the sound and hide unread messages refer to the ‘User’ page.

### Lessons

- When you first visit the page, the tutorial is displayed with introductory instructions on the lessons page (sloth Rush).
- Tutorial displays self typed text with audio accompaniment.
- During the tutorial the current described element is highlighted animatedly, if necessary, removing the highlighting of the previous element.
- The passed tutorial is recorded into the local storage.
- Lesson block displays the available, blocked and passed lessons. Lesson status comes from the server.
- Implementation of the Write task. There is a possibility to enter a code, both from a physical keyboard, and from a virtual one.
- Implementation of Drag task (desktop).
- Implementation of Boolean task.
- The Drag and Write tasks have a timer, and the mentor's response is opened at the end of the timer. The timer is also turned off after completing the task.
- In the Drag and Write tasks, the buttons are generated in random colors.
- After you solve all the tasks in the lesson, the points are counted, and a modal window opens with the points scored for the lesson. After data synchronization with the server the next lesson opens with an automatic transfer of the user to it

### RoadMap

- The RoadMap page is an interactive roadmap of the frontend developer. This map shows a sequential path of learning web development. The map is made on a Canvas element using the Fabric.js library.
- When you click on a particular technology, a modal window appears with a brief description of the technology and links to materials for learning the technology.

### Quiz

- An animated timer is displayed at the start of the quiz.
- The user is notified that the current task is about to finish.
- A message from the sloth changes depending on the result of the quiz.

### User

- User page displays all the relevant user information: login, avatar, rank, coins (points), progress bar.
- Implemented the ‘Upload avatar’ button. This button is situated in the upper left corner of the page. - Clicking on it allows you to choose a user avatar. This avatar will be displayed on the ‘User’ page and in the Header.
- Implemented ‘Change password’ section. It allows the user to change the account password. In order for the password to be changed both ‘New password’ and ‘Repeat password’ inputs should match, then click on the ‘Submit’ button.
- Implemented ‘Chat settings’ section. It allows the user to change the user color in chat and switch unread messages and message sound with chat closed ON/OFF. In order for the settings to be updated click on the ‘Submit’ button.
- Depending on the user rank, 1 of 4 possible sloth images will be displayed.
  Progress bar displays user progress in percentages.

## Easy to use:

- Download project files
- Go to project root directory
- Run npm i

## Pre-defined npm scripts

- npm run build -> build project to the build folder. Es-lint will be running before build.
- npm run start -> run webpack dev server and open browser.
- npm run lint -> identify errors found in the code, and generate reports about them.
- npm run lintfix -> it detects errors found in the code and tries to fix them.
- npm run pre -> will format the code to the correct standards.
