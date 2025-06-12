
# PMP Flashcards Web Application – Software Specification

## 🧠 Overview

This project is a web-based Flashcards App designed to help users learn key English terms used in the PMP (Project Management Professional) context. The app will allow users to flip flashcards, practice with quizzes, and track learning progress, focusing on **English–Vietnamese vocabulary** comprehension.

Built with **TypeScript**, **React**, and **Vite**, the app will support a **single-user experience** using **localStorage** to persist progress.

---

## ✨ Features

### 📘 Flashcards

- Each flashcard will contain:
  - A **PMP term** (can be a single word or phrase)
  - Its **Vietnamese translation**
  - An **example sentence** in both English and Vietnamese
- Card UI supports **flipping** to reveal translation and examples
- After flipping, display two buttons:
  - **"I got it right"**
  - **"I got it wrong"**
- **Keyboard shortcuts**:
  - `←` (left arrow): Mark as Wrong
  - `→` (right arrow): Mark as Right
- Cards marked as "wrong" are **stored persistently** in localStorage
- Ability to review only the **wrong cards** in a dedicated study session

---

## 🧪 Quiz/Test Mode

Integrated quiz/test mode that supports:

### ✅ Multiple Choice

- Display the **English term**
- Show **4 Vietnamese translation options**:
  - 1 correct answer  
  - 3 distractors (randomly selected from other flashcards)
- User selects one answer
- Immediate feedback (Correct/Incorrect)
- Option to **retry incorrectly answered questions** later

### ✍️ Fill-in-the-Blank

- Two directions:
  - Show English term → User types Vietnamese translation  
  - Show Vietnamese translation → User types English term  
- Input is validated in real-time
- Case-insensitive comparison
- Results recorded for tracking

---

## 📊 Statistics Page

Tracks user learning progress across all sessions:

- Total number of flashcards studied
- Correct vs. Incorrect answer counts
- Overall accuracy percentage
- Number of unique cards mastered
- Quiz scores and progress over time
- Review of most frequently missed cards

---

## 🖼️ UI/UX Requirements

### General

- Clean, modern, responsive layout (desktop and tablet friendly)
- Dark mode toggle (optional enhancement)

### Flashcard View

- **Front**:
  - PMP term (large font, centered)
- **Back**:
  - Vietnamese translation
  - Example sentence in English
  - Example sentence in Vietnamese
  - Action buttons:
    - ✅ Got it right
    - ❌ Got it wrong

### Navigation

- Header or sidebar with navigation links:
  - Study Flashcards
  - Quiz Mode
  - Review Wrong Cards
  - Statistics

---

## 🗃️ Data Model

### Flashcard

```ts
type Flashcard = {
  id: string
  term: string // English term or phrase
  translation: string // Vietnamese translation
  exampleEn: string // Example sentence in English
  exampleVi: string // Example sentence in Vietnamese
}
```

### User Progress (Stored in localStorage)

```ts
type UserProgress = {
  studiedCards: Record<string, {
    correctCount: number
    wrongCount: number
    lastStudiedAt: string
  }>
  wrongCards: string[] // Array of Flashcard IDs
  quizHistory: {
    date: string
    correct: number
    incorrect: number
  }[]
}
```

---

## 🧱 Tech Stack

- **Frontend**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS (recommended) or CSS Modules
- **State Management**: React Context or Zustand
- **Persistence**: localStorage

---

## 🛠️ Future Enhancements (Optional)

- PWA support for offline access
- CSV or JSON import/export for flashcards
- Daily goal tracking and streaks
- Tag flashcards by PMP knowledge area or process group
- Search and filter flashcards by keyword or difficulty
