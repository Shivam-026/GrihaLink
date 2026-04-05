export const askQuestion = async (question) => {
  const res = await fetch("https://grihalink-backend.onrender.com/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });

  return res.json();
};