export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body;
    res.status(200).json({ message: `Hello ${name}, welcome!` });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
