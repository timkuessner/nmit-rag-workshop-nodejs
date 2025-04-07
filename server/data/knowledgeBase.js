/**
 * Mock Knowledge Base
 * - Used to simulate RAG-style retrieval
 * sounds like it only "simulates" it. not actually a rag.
 * - Each object has a question and an answer
 */

module.exports = [
    {
      id: 1,
      question: "What is Node.js?",
      answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
    },
    {
      id: 2,
      question: "What is Express.js?",
      answer: "Express.js is a web application framework for Node.js."
    },
    {
      id: 3,
      question: "How does OpenAI work?",
      answer: "OpenAI provides APIs to access large language models that generate human-like text."
    }
  ];
  