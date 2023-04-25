const currentDate = new Date();

export default function handler(req, res) {
  res.status(200).json({
    name: "John Doe",
    date: currentDate.toGMTString(),
  });
}
