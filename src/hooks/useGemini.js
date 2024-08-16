import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect } from "react";
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const useGemini = (input) => {
  const [response, setResponse] = useState(null);

  const prompt = input + ". Provide only json data, no other info is needed. keep remember act like a api who only provides data in from of json data like other APIs. Provide results in array just like APIs "
  
  useEffect(() => {
    askToGemini();
  }, [prompt]);

  async function askToGemini() {
    const result = await model.generateContent(prompt);
    const res = await result.response;
    const text = res.text()
    const cleanedData = text.replace(/^```json\s*|\s*```$/g, '').trim();
    const jsonData = JSON.parse(cleanedData)
    setResponse(jsonData) 
 

    // now converting text into Structed way
    // basically array of objects
  }
  return response;
}

export default useGemini;
