import '../index.css';
import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  useEffect(() => {
    if (answer) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        setDisplayedAnswer(answer.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex > answer.length) {
          clearInterval(intervalId);
        }
      }, 10); // Adjust the speed of the typewriter effect here
      return () => clearInterval(intervalId);
    }
  }, [answer]);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take up to 10 seconds");
    setDisplayedAnswer("Loading your answer... \n It might take up to 10 seconds");
    try {
      const response = await axios({
       url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAQKDkSryog8A0O69sVmQsQp8STvM2bJJ8",
        method: "post",
        data: {
          contents: [
            { parts: [{ text: question }] },
          ],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
      setQuestion("");
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        <div className="chatbot-header">
          <a href="https://github.com/Vishesh-Pandey/chat-ai" target="_blank" rel="noopener noreferrer">
            Chat AI
          </a>
        </div>
        <div className="answer-box">
          <ReactMarkdown>{displayedAnswer}</ReactMarkdown>
        </div>
      </div>
      <form onSubmit={generateAnswer}>
        <textarea
          required
          className="textarea"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything"
        ></textarea>
        <button
          type="submit"
          className="generate-button"
          disabled={generatingAnswer}
        >
          {generatingAnswer ? "Generating..." : "Generate answer"}
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
