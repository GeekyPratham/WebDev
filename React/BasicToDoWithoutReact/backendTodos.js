// Importing the required modules
const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Sample tasks and descriptions for random generation
const sampleTasks = [
    'Go to gym',
    'Do laundry',
    'Complete project',
    'Buy groceries',
    'Attend meeting',
    'Read a book',
    'Cook dinner',
    'Walk the dog',
];

const sampleDescriptions = [
    'in the morning',
    'in the afternoon',
    'by evening',
    'before night',
    'on the weekend',
    'after lunch',
    'before bed',
    'during lunch break',
];

// Function to generate a random todo
function generateRandomTodo() {
    const randomIndex = Math.floor(Math.random() * sampleTasks.length);
    const id = Math.floor(Math.random() * 1000); // Random ID for demo purposes
    return {
        title: sampleTasks[randomIndex],
        description: sampleDescriptions[randomIndex],
        id: id,
    };
}

// API to fetch random todos
app.get('/todos', (req, res) => {
    // Generate an array of random todos
    const todos = Array.from({ length: 5 }, generateRandomTodo); // Adjust the number of todos as needed
    res.json({ todos });
});

// Set the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
