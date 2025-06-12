# ✅ PMP Flashcards App — Feature TODO List (Easy → Hard)

---

# ✅ PMP Flashcards App — Feature TODO List (Easy → Hard)

## 🟢 Phase 1: Project Setup and Static Pages

* [x] Initialize project with Vite + React + TypeScript
  ✅ *Acceptance Criteria:* Running `npm run dev` starts a Vite dev server with a working React+TS project.

* [x] Set up project folder structure (`/components`, `/data`, `/pages`, `/utils`)
  ✅ *Acceptance Criteria:* Directories are logically structured for reusable components, static data, page views, and utility functions.

* [x] Create static flashcard data file
  ✅ *Acceptance Criteria:* Data file includes at least 5 PMP terms with fields: `term`, `translation`, `exampleEn`, and `exampleVi`.

* [x] Create Home Page with navigation buttons:

  * [x] Study Flashcards
    ✅ *Acceptance Criteria:* Button navigates to study view.
  * [x] Quiz Mode
    ✅ *Acceptance Criteria:* Button navigates to quiz selection view.
  * [x] Statistics Page
    ✅ *Acceptance Criteria:* Button navigates to stats view.

---

## 🟢 Phase 2: Flashcard Study Mode (Basic)

* [ ] Create `Flashcard` component with flip interaction
  ✅ *Acceptance Criteria:* Front displays English term; back reveals Vietnamese translation and both examples.

* [ ] Implement flip animation on click
  ✅ *Acceptance Criteria:* Clicking the card triggers a flip to show the back side with content.

* [ ] Show "✅ Right" and "❌ Wrong" buttons after flipping
  ✅ *Acceptance Criteria:* Buttons appear only after flip and let users record their answer.

* [ ] Add keyboard shortcuts:

  * [ ] `←` for "Wrong", `→` for "Right"
    ✅ *Acceptance Criteria:* Shortcuts work after card is flipped and mark answer accordingly.

* [ ] Track "wrong" cards in app state
  ✅ *Acceptance Criteria:* Cards marked as "Wrong" are stored for use in redo or stats view.

* [ ] Persist progress using `localStorage`
  ✅ *Acceptance Criteria:* Study results are saved and restored on page refresh.

---

## 🟡 Phase 3: Redo Mode (Review Wrong Cards)

* [ ] Add "Redo Wrong Cards" button to Home or Study end screen
  ✅ *Acceptance Criteria:* Button appears if there are wrong cards in state; clicking it opens redo session.

* [ ] Show only previously missed cards
  ✅ *Acceptance Criteria:* Flashcard component reuses logic but only displays cards marked "Wrong".

* [ ] Allow user to reset the "wrong" card list
  ✅ *Acceptance Criteria:* Button clears wrong card memory from localStorage and state.

---

## 🟡 Phase 4: Quiz Mode

* [ ] Create `QuizSelectionPage` with mode options
  ✅ *Acceptance Criteria:* User can choose between Multiple Choice or Fill-in-the-Blank.

### 🟩 Multiple Choice

* [ ] Display PMP term
  ✅ *Acceptance Criteria:* English term is shown prominently.

* [ ] Show 4 Vietnamese options (1 correct + 3 distractors)
  ✅ *Acceptance Criteria:* Exactly 4 choices displayed; 1 is correct, 3 are randomized distractors.

* [ ] Feedback on selection
  ✅ *Acceptance Criteria:* User receives immediate response on correct/incorrect answer.

### 🟩 Fill-in-the-Blank

* [ ] Display prompt (either English or Vietnamese)
  ✅ *Acceptance Criteria:* Prompt is clear; input box is focused by default.

* [ ] Validate input with case-insensitive matching
  ✅ *Acceptance Criteria:* "Scope" and "scope" both pass as correct.

* [ ] Show correct answer after submission
  ✅ *Acceptance Criteria:* App gives user feedback and shows correct translation if they were wrong.

---

## 🔴 Phase 5: Statistics Tracking

* [ ] Count number of cards studied
  ✅ *Acceptance Criteria:* Total flashcards studied is calculated across all sessions.

* [ ] Track correct vs. incorrect answers
  ✅ *Acceptance Criteria:* Separate counters for right/wrong responses in study and quiz modes.

* [ ] Store stats in `localStorage`
  ✅ *Acceptance Criteria:* Data persists across refresh and new sessions.

* [ ] Create `StatisticsPage` with breakdown:

  * [ ] Total studied
    ✅ *Acceptance Criteria:* Number of cards studied overall is shown.
  * [ ] Accuracy percentage
    ✅ *Acceptance Criteria:* Percentage calculated from all study and quiz interactions.
  * [ ] List most-missed terms
    ✅ *Acceptance Criteria:* Top 5 terms with highest wrong count shown.

---


