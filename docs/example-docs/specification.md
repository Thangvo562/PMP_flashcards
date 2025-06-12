# Spanish Flashcards Web App — Software Specification

## Overview

A front-end-only flashcards web application to help users learn Spanish vocabulary. Built using **Vite**, **React**, and **TypeScript**. The app uses **static data** to render flashcards grouped into categories. It supports study, quiz, and review modes, with performance tracked using in-browser state.

---

## Tech Stack

- **Frontend Framework:** React (with Vite + TypeScript)
- **Data Storage:** Static JSON/TypeScript files (no backend)
- **State Management:** React `useState` / `useReducer`, optionally `useContext` or Zustand
- **Styling:** CSS Modules, TailwindCSS, or any preferred CSS strategy
- **Persistence:** Optional localStorage (to remember wrong answers or stats)

---

## Features

### 1. Flashcard Study Mode

- Flashcards show a Spanish word by default.
- Clicking a card flips it to reveal the English translation.
- After flipping, two buttons appear:
  - ✅ "I got it right"
  - ❌ "I got it wrong"
- App remembers which cards were marked as incorrect.

### 2. Redo Mode

- Option to study only the cards marked as **"wrong"** in the previous round.
- Works just like study mode, but only includes failed cards.
- User can reset this list at any time.

### 3. Categories

- Cards are grouped into the following categories:
  - **Animals**
  - **Food**
  - **Verbs**
- User can choose which category to study or quiz.

### 4. Quiz Mode

- Two types of quizzes:
  - **Multiple Choice**
    - One Spanish word, 4 English options (1 correct + 3 distractors)
    - Distractors are statically defined per question
  - **Fill in the Blank**
    - Spanish word shown, user types the English word
    - Exact match is required (case-insensitive)

### 5. Statistics Page

- Track the following stats (using browser memory or localStorage):
  - Number of cards studied per category
  - Number of correct vs. incorrect answers
  - Accuracy percentage

---

## UI Pages / Components

### 1. Home Page
- Welcome message
- Buttons/Links to:
  - Study Mode
  - Quiz Mode
  - Stats Page

### 2. Category Selection Page
- Shows available categories: Animals, Food, Verbs
- Select mode (Study / Quiz)
- Proceed to flashcards or quiz

### 3. Flashcard Study Component
- Displays one card at a time
- Flip animation (optional)
- Buttons for “Right” and “Wrong”

### 4. Redo Component
- Same UI as Flashcard Study, but only shows failed cards

### 5. Quiz Component
- Multiple choice or fill-in-the-blank
- Feedback after each question (correct/incorrect)

### 6. Statistics Page
- Summary of all sessions
- LocalStorage support for persistence (optional)

---

## Data Format Example

### Card JSON (or TypeScript object)
```ts
{
  category: "animals",
  spanish: "el gato",
  english: "the cat",
  quiz: {
    type: "multiple-choice",
    options: ["the dog", "the house", "the cat", "the bird"]
  }
}

## Out of Scope
- No user accounts or authentication
- No dynamic backend or API
- No card editor or admin UI