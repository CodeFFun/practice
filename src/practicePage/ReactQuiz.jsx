import {useState} from 'react'

function ReactQuiz() {

    const [questionCounter, setQuestionCounter] = useState(0)
    const [score, setScore] = useState(0)
    const[end, setEnd] = useState(false)
 

    const Questions = [
        {
            question: "What is the largest animeal present in the Earth",
            answers:[
                { answertext: 'Elephant', isCorrect:false, id:'A' },
                { answertext: 'Whale', isCorrect:true, id:'B' },
                { answertext: 'Human', isCorrect:false, id:'C' },
                { answertext: 'Dinosaurs', isCorrect:false, id:'D' }
            ]
        },
        {
            question: "What is the capital of Nepal",
            answers:[
                { answertext: 'Pokhara', isCorrect:false, id:'A' },
                { answertext: 'Dharan', isCorrect:false, id:'B' },
                { answertext: 'Mustang', isCorrect:false, id:'C' },
                { answertext: 'Kathmandu', isCorrect:true, id:'D' }
            ]
        },
        {
            question: "What is the capital of China",
            answers:[
                { answertext: 'Chengdu', isCorrect:false, id:'A' },
                { answertext: 'Hong Kong', isCorrect:false, id:'B' },
                { answertext: 'Beijing', isCorrect:true, id:'C' },
                { answertext: 'Shanghai', isCorrect:false, id:'D' }
            ]
        },
        {
            question: "What is the largest country in the Earth",
            answers:[
                { answertext: 'Canada', isCorrect:false, id:'A' },
                { answertext: 'Russia', isCorrect:true, id:'B' },
                { answertext: 'China', isCorrect:false, id:'C' },
                { answertext: 'U.S.A.', isCorrect:false, id:'D' }
            ]
        },
    ]
    let count = 0

    const checked = (text, isCorrect) => {
        const id = document.getElementById(text)

            if(count < 1){
                id.className = 'checked'  
            }
            if(isCorrect) {
               setScore(score + 10)
            }
            console.log(score)
            count += 1
    }

    const reanswer = (e) => {
        e.preventDefault()
        const listItems = document.querySelectorAll('li')
        listItems.forEach((listItem) => {
            if(listItem.classList.contains('checked')){
                listItem.className = ''
                setScore(score - 10)
                count = 0
            }
        })
    }

    const next = (e) => {
        e.preventDefault()
        const listItems = document.querySelectorAll('li')
        listItems.forEach((listItem) => {
            if(listItem.classList.contains('checked')){
                listItem.className = ''
                count = 0
            }
            console.log(score)
        })
        setQuestionCounter(questionCounter + 1)
        if(questionCounter + 1 >= Questions.length){
            setEnd(true)
        }
    }
  return (
    <div>
    <div className="container">
        {end ? (<div className='end'>Your Final Score is {score}</div>) : (
            <>
            <div className="quiz-content">
            <div className="questions">
                <p>{Questions[questionCounter].question}</p>
            </div>
            <div className="answers">
                <ul>
                   {Questions[questionCounter].answers.map((answer) => <li id={answer.id} key={answer.id} onClick={() => checked(answer.id, answer.isCorrect)}>{answer.answertext}</li>)}
    
                </ul>
            </div>
            </div>
            <button className='btn' onClick={next}>Next</button>
            <button className='btn' onClick={reanswer}>Reanswer</button>
            </>
)}
    </div> 
          
    </div>
  )
}

export default ReactQuiz