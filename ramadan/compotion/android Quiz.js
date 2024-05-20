const quizData = [
  {
        question: "ترتيب شهر رمضان بين الأشهر الهجرية هو الشهر ",
        a: { text: "الشهر السادس" , isCorrect: false },
        b: { text: "الشهر التاسع " , isCorrect: true },
        c: { text: "الشهر الثاني" , isCorrect: false },
        d: { text: "الشهر الثاني عشر" , isCorrect: false },
    },
    
    
     {
    question: "كم مرة ذُكرت كلمة رمضان في القرآن؟",
    a: { text: "4 مرات", isCorrect: false },
    b: { text: "3 مرات", isCorrect: false },
    c: { text: "2 مرة", isCorrect: false },
    d: { text: "1 مرة", isCorrect: true },
  },
    
    
    {
      question: "ما هي السورة التي أسلم عمر بن الخطاب بعدما سمعها؟	",
    a: { text: "سورة البقرة", isCorrect: false },
    b: { text: "سورة طه", isCorrect: true },
    c: { text: "سورة يونس", isCorrect: false },
    d: { text: "سورة العلق", isCorrect: false },
  },
  {
    question: "سورتان في القرآن تسمى الزهراوان ما هما ؟",
    a: { text: "سورة البقرة وآل عمران", isCorrect: true },
    b: { text: "سورة البقرة والنساء", isCorrect: false },
    c: { text: "سورة الأنفال والتوبة", isCorrect: false },
    d: { text: "سورة البقرة والأعراف", isCorrect: false },
  },
    
    
    
   {
    question: "كم عدد الآيات في سورة البقرة؟",
    a: { text: "300", isCorrect: false },
    b: { text: "286", isCorrect: true },
    c: { text: "350", isCorrect: false },
    d: { text: "400", isCorrect: false },
  },
  {
    question: "كم عدد أشهر الحرم في السنة الإسلامية؟",
    a: { text: "1", isCorrect: false },
    b: { text: "3", isCorrect: true },
    c: { text: "2", isCorrect: false },
    d: { text: "4", isCorrect: false },  
  },
   
    
    
    {
    question: "من هو النبي الذي صام أيامًا متتابعة قبل أن يؤمر بالصيام في شهر رمضان؟",
    a: { text: "نبي موسى عليه السلام", isCorrect: true },
    b: { text: "نبي عيسى عليه السلام", isCorrect: false },
    c: { text: "نبي إبراهيم عليه السلام", isCorrect: false },
    d: { text: "نبي داود عليه السلام", isCorrect: false },
},
{
    question: "من هو أول شهيد في الإسلام؟",
    a: { text: " حمزة بن عبد المطلب", isCorrect: false },
    b: { text: "عثمان بن عفان", isCorrect: false },
    c: { text: "سمية بنت خياط", isCorrect: false },
    d: { text: "سعيد بن عمير", isCorrect: true },
},

    
    
     {
    question: "ما هي السنة التي أُنزل فيها أول آية من القرآن الكريم؟",
    a: { text: "سنة الهجرة", isCorrect: true },
    b: { text: "سنة الفتح", isCorrect: false },
    c: { text: "سنة العرفة", isCorrect: false },
    d: { text: "سنة الفيل", isCorrect: false },
},
{
    question: "كم عدد السجدات في سورة القرآن الكريم؟",
    a: { text: "14 سجدة", isCorrect: true },
    b: { text: "15 سجدة", isCorrect: false },
    c: { text: "20 سجدة", isCorrect: false },
    d: { text: "10 سجدات", isCorrect: false },
},
    
    
];



const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    
    if (typeof currentQuizData.a === 'object') {
        a_text.innerText = currentQuizData.a.text;
        b_text.innerText = currentQuizData.b.text;
        c_text.innerText = currentQuizData.c.text;
        d_text.innerText = currentQuizData.d.text;
    } else {
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }
}


function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
       const correctAnswer = quizData[currentQuiz].correct;
       const selectedAnswer = quizData[currentQuiz][answer];
       const tableCells = document.querySelectorAll('td');
       
       if(selectedAnswer.isCorrect) {
           score++;
           tableCells[currentQuiz].style.backgroundColor = 'green';
       } else {
           tableCells[currentQuiz].style.backgroundColor = 'red'; // تغيير اللون للأحمر
       }
       
       currentQuiz++;
       if(currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});



// وظيفة لترتيب الأسئلة بشكل عشوائي
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ترتيب الأسئلة بشكل عشوائي قبل تحميل الاختبار
function loadQuiz() {
    deselectAnswers();
    const shuffledQuizData = shuffleQuestions(quizData);
    const currentQuizData = shuffledQuizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    
    if (typeof currentQuizData.a === 'object') {
        a_text.innerText = currentQuizData.a.text;
        b_text.innerText = currentQuizData.b.text;
        c_text.innerText = currentQuizData.c.text;
        d_text.innerText = currentQuizData.d.text;
    } else {
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }
}
