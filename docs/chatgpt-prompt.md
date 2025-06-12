# I. Create App specification
----------------------------
I need to write a software specification, and I need your help with writing it.

I want to build a flashcards app to help learn key English words in PMP in the form of a web application using TypeScript and Vite/React.

Here are some features I think I will need:

Each card should be in English, and I need to know the word in Vietnamese with an Example of using this word in PMP context
It should have the ability to flip cards revealing the word in Vietnamese
After flipping, below each card I should have two buttons, ask if I got it wrong or right
Remember which cards I got wrong
Feature: to redo only cards I don't know.
Quiz/Test Mode: Multiple choice or fill-in-the-blank options.
Statistics page: Track how many cards you've studied, correct vs. incorrect answers

The output should be formatted as Markdown.

Ask follow-up questions if something is unclear BEFORE you start generating.


# II. Reply for the  response before generating .md file
----------------------------
1. For the PMP terms, you can input any common word on PMM, it can be one word or pharse/terms. And example on both langugaues 
2. Yes, auto revealing card after flipping, and add shortcuts
3. Yes
4. 2 for multiple choice, vice versa for Fill-in-the-blank. intergrated
5. all sessions
6. single user
7. web only

# III. Create TODO list to implement one feature at a time
----------------------------
create a TODO list to help implement one feature at a time. Order the features from easy to hard. The output should be in Markdown format. 
For each item in  the list, also define acceptance criteria

# IV. Build the first feature
----------------------------
Use the software requirements (pmp-flashcards-spec.md) and the TODO list (TODO.md) to complete Phase 1 of the project in the current directory. 
Mark items as done in the TODO list only after verifying that the acceptance criteria have been met.

# V. Add Git to the project
----------------------------
Add Git to this project

# VI. Add new feature (phase 2 - only 2 first features to test)
----------------------------
Use the software requirements and the TODO list to work on Phase 2 of the project. Build the first 2 features listed there. Mark in the TODO list the items that are done.

# VII. Adding Automated test
----------------------------
## Ask kind of testing 
What kind of test does it make sense to write for this app?

-> Result: (Unit test/ Component test/ Integration test/ E2E test)

## Write E2R test 
For the functionality implemented so far, write E2E tests using Playwright