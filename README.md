# 🎮 Pass-Time Toe (Tic-Tac-Toe Game)

A simple **Tic-Tac-Toe game** built with **HTML, CSS, and JavaScript**.  
Players can set custom names, take turns placing their symbols (`X` and `O`), and the game automatically detects winners or draws.  

---

## ✨ Features
- 🎭 Customizable player names via a modal overlay
- 🕹️ Two-player gameplay (`X` vs `O`)
- ✅ Automatic win detection (rows, columns, diagonals)
- ⚖️ Draw detection when all cells are filled
- 🔄 Reset and start new games without reloading
- 🎨 Styled with CSS for a clean and modern look
- 📱 Responsive design

---

## 📂 Project Structure

├── index.html # Main HTML file
├── styles/
│ ├── styles.css # Base styling
│ ├── overlays.css # Modal and overlay styles
│ ├── config.css # Player config form styles
│ └── game.css # Game board styles
└── scripts/
├── app.js # Core game logic (start game, turns, winner detection)
├── config.js # Player name config modal
└── game.js # UI controls & event handling
