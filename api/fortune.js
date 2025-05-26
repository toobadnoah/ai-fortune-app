export default async function handler(req, res) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "Give me a mystical one-sentence fortune in a whimsical tone with emojis.",
        },
      ],
      temperature: 0.9,
      max_tokens: 60,
    }),
  });

  const data = await response.json();
  res.status(200).json({
    fortune: data.choices?.[0]?.message?.content || "🌫️ The stars are silent right now.",
  });
}
