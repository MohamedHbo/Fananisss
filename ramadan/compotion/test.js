const quizData = [
    {
        question: "من هو أول نبي في الإسلام؟",
        a: "نوح",
        b: "آدم",
        c: "إبراهيم",
        d: "موسى",
        correct: "b",
    },
    {
        question: "ما هي أول سورة نزلت في القرآن؟",
        a: " الفاتحة",
        b: " العلق",
        c: "الكوثر",
        d: "البقرة",
        correct: "b",
    },
    {
        question: "في أي شهر أُنزل القرآن؟",
        a: " شهر صفر",
        b: "شهر شوال",
        c: "شهر ذو الحجة",
        d: "شهر رمضان",
        correct: "d",
    },
    {
        question: "من هو الخليفة الرابع في الإسلام؟",
        a: " أبو بكر الصديق",
        b: "طلحة بن عبيد الله",
        c: "علي بن أبي طالب",
        d: "عثمان بن عفان",
        correct: "c",
    },
    {
        question: "ما هي السورة التي تتحدث عن قصة النمل؟",
        a: " سورة النمل",
        b: "سورة الفاتحة",
        c: "سورة يونس",
        d: "سورة العنكبوت",
        correct: "a",
    },
    
    {
        question: "ما هو اسم ولد النبي محمد صلى الله عليه وسلم الذي مات في الطفولة؟",
        a: " الحسن",
        b: "عبدالله",
        c: "الحسين",
        d: "إبراهيم",
        correct: "d", 
    },
    
    {
        question: "ما هو اسم الجبل الذي استدعى الله فيه نبيه موسى عليه السلام؟",
        a: "جبل صيناء",
        b: "جبل أحد",
        c: "جبل طور",
        d: "  جبل النور",
        correct: "c",
    },
    
    
      {
        question: "ما هو السورة الملقبة بـ (أم الكتاب)؟",
        a: "سورة الفاتحة",
        b: "سورة البقرة",
        c: "سورة النور",
        d: "سورة العصر",
        correct: "a",
    },
    
    
      {
        question: "كم استمرت الدعوة السرية؟",
           
        a: "5 سنوات",
        b: "3 سنوات",
        c: "7 سنوات",
        d: "10 سنوات",
        correct: "b",
    },
    
    
      {
        question: " ما هي السورة التي لا تبدأ بالبسملة؟",
        a: "البقرة",
        b: "النساء",
        c: "آل عمران",
        d: "التوبة",
        correct: "d",
    },
    

    
     {
        question: "ما اسم السورة التي تشفع لقارئها يوم القيامة؟",
        a: "سورة الفاتحة",
        b: "سورة يس",
        c: "سورة البقرة",
        d: "سورة الرحمن",
        correct: "c",
    },
    
    
    
    
     {
        question: "ما هو التسنيم؟",
        a: "الحالة الجوية السائدة في المنطقة الاستوائية",
        b: "اسم قرية صغيرة في جبال الألب",
        c: "الصوت الناتج عن حركة الجنين في رحم الأم",
        d: "إنه اسم عين ماء بالجنة اختصها الله عز وجل لعباده المؤمنين",
        correct: "d",
    },
    
 
    
    
     {
        question: "كم آية بالقرآن الكريم قد تحدثت عن الجهاد؟",
        a: "8",
        b: "5",
        c: "7",
        d: "10",
        correct: "c",
    },
    
    
    
     {
        question: "ما اسم السورة التي ذكرت فيها البسملة مرتين؟",
        a: "سورة البقرة",
        b: "سورة الفاتحة",
        c: "سورة يونس",
        d: "سورة النمل",
        correct: "d",
    },

    
    
     {
        question: " ما هي أول غزوة في الإسلام؟",
        a: "غزوة الخندق",
        b: "غزو أحد",
        c: "غزوة حنين",
        d: "غزوة بدر",
        correct: "d",
    },

      {
        question: " ما هي السورة الوحيدة الموجودة في القرآن الكريم التي لا تحتوي على حرف الميم؟",
        a: "سورة الكوثرs",
        b: "سورة النصر",
        c: "سورة محمد",
        d: "سورة الفيل",
        correct: "a",
    },

    
      {
        question: " ما هي أول غزوة في الإسلام؟",
        a: "عقوب عليه السلام",
        b: "إسماعيل عليه السلام",
        c: "يوسف عليه السلام",
        d: "موسى عليه السلام",
        correct: "c",
    },

    
      {
        question: " من هو النبي الذي لقب كليم الله؟",
        a: "موسى عليه السلام",
        b: "محمد صلى الله عليه وسلم",
        c: " عيسى عليه السلام",
        d: " إبراهيم عليه السلام",
        correct: "a",
    },

    
      {
        question: " من هو الصحابي الجليل الذي كان يطلق عليه لقب أسد الله ورسوله ؟",
        a: "علي بن أبي طالب",
        b: " حمزة بن عبد المطلب",
        c: "طلحة بن عبيد الله",
        d: "أبو بكر الصديق",
        correct: "b",
    },

    
      {
        question: " ما اسم المسجد الذي استشهد فيه سيدنا علي بن أبي طالب رضي الله عنه؟",
        a: "المسجد الحرام",
        b: "المسجد الأقصى",
        c: "المسجد النبوي",
        d: "المسجد الكوفة",
        correct: "d",
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
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
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
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})