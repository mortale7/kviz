const questions = [
  {
    question: "Šta je C++?",
    answers: [
      "Programski jezik",
      "Operativni sistem",
      "Baza podataka",
      "Web pretraživač"
    ],
    correct: 0,
    explanation: "C++ je programski jezik opće namjene koji se koristi za razvoj softvera, uključujući sisteme, igre i aplikacije."
  },
  {
    question: "Šta su varijable?",
    answers: [
      "Nešto što ne mijenja vrijednost",
      "Mjesto za pohranu podataka",
      "Skup pravila",
      "Operacija"
    ],
    correct: 1,
    explanation: "Varijable su mjesta za pohranu podataka. Primjer deklaracije u C++: `int x = 5;`"
  },
  {
    question: "Šta su konstante?",
    answers: [
      "Podaci koji se mijenjaju",
      "Podaci koji su nepromjenjivi",
      "Podaci pohranjeni u bazu",
      "Naziv za varijable"
    ],
    correct: 1,
    explanation: "Konstante su nepromjenjive vrijednosti koje se definiraju pomoću ključne riječi `const`. Primjer: `const double PI = 3.14;`"
  },
  {
    question: "Koje su strukture grananja?",
    answers: [
      "if, else, switch",
      "for, while, do-while",
      "HTML i CSS",
      "Datoteke"
    ],
    correct: 0,
    explanation: "Strukture grananja omogućavaju donošenje odluka u programu. Primjer: `if (x > 0) { ... } else { ... }`"
  },
  {
    question: "Koje su strukture petlji?",
    answers: [
      "while, for, do-while",
      "if, else, switch",
      "JavaScript i Python",
      "Petlje i grananja"
    ],
    correct: 0,
    explanation: "Strukture petlji omogućavaju ponavljanje blokova koda. Primjer u C++: `for (int i = 0; i < 10; i++) { ... }`"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = current.question;
  answersEl.innerHTML = "";

  current.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.textContent = answer;
    li.addEventListener("click", () => checkAnswer(index));
    answersEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].correct;
  if (selected === correct) {
    score++;
    alert(`Tačan odgovor! \n\nObjašnjenje: ${questions[currentQuestion].explanation}`);
  } else {
    alert(`Netačan odgovor. \n\nTačan odgovor: ${questions[currentQuestion].answers[correct]} \n\nObjašnjenje: ${questions[currentQuestion].explanation}`);
  }
  nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextButton.disabled = true;
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Kviz je završen!";
  answersEl.innerHTML = "";
  nextButton.style.display = "none";
  scoreEl.textContent = `Konačni rezultat: ${score} od ${questions.length}`;
}

// Inicijalizacija kviza
showQuestion();
nextButton.disabled = true;
