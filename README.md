🎮 Simon Says Game

A simple and fun browser-based Simon Says memory game built using HTML, CSS, and JavaScript.

The goal is simple:
Watch the pattern.
Remember it.
Repeat it.
And try not to mess up 😄

🕹️ How to Play

Open the game in your browser.

Press any key to start.

The game will flash one color.

Click the same color to repeat the pattern.

Each new level adds one more color to the sequence.

If you click the wrong color — it's game over!

After losing, just press any key to try again.

🚀 Features

Random color sequence generation

Level tracking system

Visual feedback when:

The game flashes a color

You press a button

Game over screen with score

Smooth and minimal UI design

🛠️ Built With

HTML

CSS

JavaScript (Vanilla JS)

Google Fonts (Inter)

📁 Project Structure
├── game.html      # Main HTML structure
├── style.css      # Styling and animations
└── gamelogic.js   # Game functionality and logic
🧠 How It Works (Simple Logic Overview)

The game stores a random sequence in an array.

Every level:

A new random color is added.

The sequence is flashed to the player.

The player's clicks are stored separately.

Each click is checked against the game sequence.

If all inputs match → next level.

If not → game resets.

💡 Future Improvements (Optional Ideas)

Add sound effects for each color

Add a high score tracker

Add mobile touch optimizations

Add difficulty modes

Add animations and smoother transitions

▶️ How to Run

Just open game.html in your browser.

No installation needed. No frameworks required.
