# AI RAG Chatbot Workshop

This is a Node.js + OpenAI API chatbot backend workshop designed for Nayland College Year 13 Digital Technology students and NMIT Year 2 Bachelor of IT students. It includes peer coding, hands-on backend API development, AI integration, and frontend interaction using only JavaScript, HTML, and CSS.

## Learning Goals

By the end of this workshop, students will be able to:

- Create RESTful APIs using Node.js and Express
- Retrieve information from a knowledge base
- Construct prompts and call the OpenAI API
- Display results using a web frontend with JavaScript
- Use basic CSS to style a chatbot interface
- Collaborate effectively using the peer coding Navigator–Driver model

## Project Structure

```
ai-rag-backend-workshop/
├── server/
│   ├── index.js               # Express app entry point
│   ├── routes/
│   │   ├── chat.js            # TODO: AI generation logic
│   │   └── search.js          # TODO: KB retrieval logic
│   └── data/
│       └── knowledgeBase.js   # Static knowledge base content
├── public/
│   ├── index.html             # Chat UI
│   ├── script.js              # TODO: Connect UI to API
│   └── styles.css             # TODO: Style the chat display
├── test/                      # Optional Jest test files
├── .env.example               # Environment config sample
├── package.json               # App config and scripts
└── README.md                  # Learning guide and instructions
```

## Peer Coding Instructions

This workshop uses the **Driver–Navigator** method for collaboration:

- **Driver**: Types the code, runs commands, and shares screen if remote
- **Navigator**: Reads instructions, helps debug, asks clarifying questions
- Switch roles every 10–15 minutes

### Working in Pairs:

- One student opens the code editor and runs the project
- The other focuses on guiding, spotting bugs, and explaining concepts
- Trade roles frequently for balanced learning

## Activity Overview

Each `*.js` file contains comments with TODO instructions.

Your job is to complete the backend API logic and frontend fetch functionality by following the inline TODOs. Then, test the flow by asking real questions through the UI.

| File                  | Focus Area                | Concepts Learned                    |
|-----------------------|---------------------------|-------------------------------------|
| `search.js`           | Retrieval API             | POST handling, query, search        |
| `chat.js`             | RAG-style AI response     | Context + OpenAI prompt building    |
| `script.js`           | Frontend integration      | Fetch API, DOM updates, animation   |
| `styles.css`          | UI polish (optional)      | Styling, layout, box design         |
| `knowledgeBase.js`    | Add/edit entries          | Data structure, content design      |


During the session, work on the following files as a team.

### 1. `routes/search.js`
- [ ] Extract the query from the request body
- [ ] Search the knowledge base for a matching question
- [ ] Return the result or an error response

### 2. `routes/chat.js`
- [ ] Extract the query from the request
- [ ] Retrieve context from the knowledge base
- [ ] Build a prompt using context and query
- [ ] Call the OpenAI API and return the generated answer

### 3. `script.js` (Frontend)
- [ ] Send the user's query to the backend
- [ ] Receive and display the AI-generated answer
- [ ] Animate the response (typewriter or fade-in)

### 4. (Optional) `styles.css`
- [ ] Customize background color, font, or layout
- [ ] Style the chat response box

---

## Instructions for Starter Files

Each file includes function templates or comments for guidance. For example:

- `chat.js`: Students complete the logic that creates a prompt and sends it to OpenAI
- `search.js`: Students write code to filter results from a static array
- `script.js`: Students implement code to send a query and display the response

> Work together with your teammate to complete each part of the system end-to-end.

## Getting Started

### 1. Install Dependencies

```
npm install
```

### 2. Add API Key

Create a `.env` file and include your OpenAI key:

```
OPENAI_API_KEY=your-key-here
```

### 3. Start the Server

```
npm run start:dev
```

Visit `http://localhost:3000` in your browser.

## Optional: Run Tests

Install test dependencies (if needed):

```
npm install --save-dev jest supertest
```

Run tests:

```
npm test
```

## Best Practices

- Talk out loud while coding with your partner
- Commit small changes often if using Git
- Ask for help after you've both tried and discussed
- Follow the flow: retrieval → prompt → AI → display

## Troubleshooting

- Check that the server is running on port 3000
- Use `console.log()` to debug backend or frontend logic
- Use browser DevTools to inspect requests and errors

## License

This project is provided for educational purposes by NMIT and Nayland College.
Students and educators are welcome to reuse or adapt it for learning activities.


## Peer Coding with GitHub

If you're working in pairs and using GitHub to collaborate:

### Step-by-Step: Forking and Collaborating

1. One student in each pair should **fork this repository** to their GitHub account.
2. Go to the forked repo’s **Settings → Collaborators**.
3. Add your coding partner using their GitHub username or email.
4. Both students can now **clone the fork**, make changes, and push updates.

### Cloning Your Fork

The student who forked should share their repo URL. Then, both partners should run:

```bash
git clone https://github.com/your-username/ai-rag-backend-workshop.git
cd ai-rag-backend-workshop
```

### Working Together

- Communicate frequently. Share what you're thinking.
- If working remotely, use screen sharing or VS Code Live Share.
- Switch roles (Driver ↔ Navigator) every 10–15 minutes.
- Commit often and push changes to sync your work.

> Tip: Only one person should push at a time to avoid conflicts. Pull before you push if you're both editing.

For detailed peer coding instructions, see [PEER_CODING.md](./PEER_CODING.md) if provided by your instructor.
