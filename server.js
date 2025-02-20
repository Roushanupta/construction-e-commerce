const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data for construction materials
const materials = [
  { id: 1, name: 'Cement', price: '$5 per bag' },
  { id: 2, name: 'Steel', price: '$10 per meter' },
  { id: 3, name: 'Bricks', price: '$0.5 per piece' },
  { id: 4, name: 'Wood', price: '$3 per piece' },
];

// Endpoint to get materials
app.get('/materials', (req, res) => {
  res.json(materials);
});

// Endpoint to book a consultation (mock function)
app.post('/consultation', (req, res) => {
  const { name, email, serviceType } = req.body;
  if (name && email && serviceType) {
    res.json({ message: 'Consultation booked successfully!', status: 200 });
  } else {
    res.status(400).json({ message: 'Missing required fields' });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
