# Spot the Difference 🕵️‍♂️✨

Welcome to **Spot the Difference**, a fun and interactive game built as part of a **WEB Development course project**! 🎓💻

---

## 🎯 How to Play
1. Pick a category: **Animals 🐘**, **Dinosaur 🦕**, **Space 🚀**, or **School Bus 🚌**.  
2. Look at the two images and click on the differences you spot.  
3. If you click the correct spot:
   - A colored circle appears on the clicked spot **and on the matching spot in the other image**.  
   - Your found differences counter increases.  
4. Find all the differences before the timer runs out to see **"YOU WON!" 🎉** with clapping sounds 👏.  
5. Run out of time? You'll see **"TIME UP!" ⏰** with an alarm sound 🚨.  
6. Logged-in users have their points saved in **localStorage**, so they can track their scores across games.  

---

## ⏱ Timer & Scoring
- Each game lasts **30 seconds**.  
- Every difference you find contributes to your **score**, which updates instantly for logged-in users.  

---

## 🧠 Behind the Scenes (Game Logic)
- Each difference is stored as an **object** with:
  - `x` (horizontal % position)  
  - `y` (vertical % position)  
  - `radius` (clickable area in % of image width)  
  - `isClicked` (boolean for whether it’s already found)  
- When you click on an image, the script:
  1. Calculates the click's distance from all difference coordinates.  
  2. If the click is within the radius of a difference, it’s marked as found.  
  3. A circle is drawn over **both images** to show the difference visually.  
- The game uses **DOM manipulation**, **event listeners**, and **localStorage** for user state and scores.  

---

## 💻 Technologies Used
- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- Browser DOM APIs  

---

## 🌐 Play Online
Click here to try the game in your browser:  
[**Spot the Difference Game**](https://saritnerya.github.io/spotTheDifferent-html-js-css-project)  

---

## 🛠 Features
- Responsive layout for multiple screen sizes 📱💻  
- Interactive difference highlighting with **instant feedback** ✨  
- Timer countdown with visual and audio cues ⏳🔔  
- User profile & score tracking using `localStorage` 👤💯  

---

Made with ❤️ and a bit of mischievous fun 😎🎨
