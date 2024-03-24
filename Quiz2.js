const Credentials = document.getElementById('Credentials');
const abotIt = document.getElementById('abo');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('startButton');

const quizData = [
  {
    question: 'In what year was Nnamdi Azikwe born in?',
    answer: '1927'
  },
  {
    question: 'In what year was Shehu Shagari born in?',
    answer: '1925'
  },
  {
    question: 'In what year was Yakubu Gowon born in?',
    answer: '1934'
  },
  {
    question: 'In what year was Gen. Murtala Muhammed born in?',
    answer: '1938'
  },
  {
    question: 'In what year was Gen. Ibrahim Babangida born in?',
    answer: '1941'
  },
  {
    question: 'In what year was Gen. Sani Abacha born in?',
    answer: '1943'
  },
  {
    question: 'In what year was Gen. Abdulsalami Abubakar born in?',
    answer: '1942'
  },
  {
    question: 'In what year was Ernest Shonekan born in?',
    answer: '1936'
  },
  {
    question: 'In what year was Chief Olusegun Obasanjo born in?',
    answer: '1937'
  },
  {
    question: 'In what year was Alhaji Umaru Musa YarAdua born in?',
    answer: '1951'
  },
  {
    question: 'In what year was Dr Goodluck Ebele Jonathan born in?',
    answer: '1957'
  },
  {
    question: 'In what year was Muhammadu Buhari born in?',
    answer: '1942'
  },
  {
    question: 'In what year was Bola Ahmaed Tinubu born in?',
    answer: '1952'
  },
];

let currentQuestion = 0;
let score = 0;

function getCredentials() {
    const username = prompt('Enter your username:');
    const passcode = prompt('Enter your passcode:');

    if (username && passcode) {
        Credentials.innerHTML = (`Username: ${username}\nPasscode: ${passcode}`);
        document.getElementById('startButton').style.display = 'block';
       
      } else {
        alert('Please enter both a username and passcode')
        getCredentials();
      }; 
};
startButton.addEventListener('click', startQuiz);

function startQuiz() {
  startButton.style.display = 'none';
  loadQuestion();
};

function loadQuestion() {
  const userAnswer = prompt(quizData[currentQuestion].question);
  checkAnswer(userAnswer, quizData[currentQuestion].answer);
};

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer !== null) {
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      const percentage = (score / quizData.length) * 100;
      abotIt.innerHTML=`Quiz completed!\nYour score is: ${score}/${quizData.length} (${percentage}%)`;
    }
  } else {
    abotIt.innerHTML=('Quiz aborted.');
  }
  
};