# Memory Game

## Overview

Memory Game is a simple yet fun card-matching game built with React. The game involves flipping over pairs of cards and remembering their positions to find all matching pairs. The goal is to match all pairs with the fewest moves possible.

## Features

- Shuffle and display cards on the board.
- Flip cards and check for matches.
- Disable cards during the checking phase.
- Reset the game to start over.

## Project Structure

The project is organized as follows:

- **App.js**: Main application component.
- **Board.js**: Component to display the game board with cards.
- **GameInfo.js**: Component to display game information and reset button.
- **initialCards.js**: File containing the initial set of cards.
- **App.css**: CSS file for styling the components.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/memory-game.git
    ```

2. Navigate to the project directory:

    ```bash
    cd memory-game
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Game

1. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Components

### App Component

The main component that holds the state and logic of the game.

- **State Variables**:
  - `cards`: Array of card objects.
  - `flippedCards`: Array of indices of currently flipped cards.
  - `matchedCards`: Array of indices of matched cards.
  - `isDisabled`: Boolean to disable card flipping during the checking phase.

- **useEffect Hooks**:
  - Shuffle cards when the component mounts.
  - Check for matches when two cards are flipped.

- **Functions**:
  - `handleCardClick`: Handles the logic when a card is clicked.
  - `resetGame`: Resets the game state.
  - `shuffleCards`: Shuffles the cards array.

### Board Component

Displays the game board with cards.

- **Props**:
  - `cards`: Array of card objects.
  - `onCardClick`: Function to handle card click events.

### GameInfo Component

Displays game information and a reset button.

- **Props**:
  - `matchedCards`: Array of matched cards.
  - `onReset`: Function to reset the game.

## Usage

1. Start the game by flipping over two cards.
2. If the cards match, they remain flipped. If not, they flip back after a short delay.
3. Continue until all pairs are matched.
4. Click the reset button to start a new game.
