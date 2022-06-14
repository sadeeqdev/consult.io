import { styled } from "@mui/system"
import QuestionBlock from "../components/QuestionBlocks"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const QuestionAnswers = () => {
  const questions = [
    {"question":"How to lower blood pressure?", "answer":" Your blood pressure can fluctuate throughout the day. For example, it may go up monetarily if you see your idol. Or go down, depending on your situation and point of view."},
    {"question":"How to get rid of hiccups?", "answer":"Altering your breathing cycle, which may calm your diaphragm down. Possibilities include breathing into a paper bag, pulling your knees to your chest and leaning forward, drinking water from the opposite side of a glass while bending over, or holding your breath. If you do hold your breath, make sure that you don’t do this indefinitely."},
    {"question":"How long does the flu last?", "answer":"If you are wondering about how long you are contagious, you actually start becoming contagious one day before you even have symptoms. This makes it very tough to completely avoid flu viruses. That’s why getting vaccinated is the only way to really protect yourself and others."},
    {"question":"What causes hiccups?", "answer":"Looks like lots of people are getting hiccups or at least laughing at people who are getting the hiccups this year. This is the second appearance on this list for hiccups. This can be a sign that something like a mass or inflammation is irritating your diaphragm or the nerves that control and extend to your diaphragm. Certain medication or serious medical conditions such as diabetes, kidney failure, and encephalitis can lead to hiccups as well. Therefore, if hiccups continue to be an issue, call you doctor."},
    {"question":"What causes kidney stones?", "answer":"Kidney stones, otherwise known as renal lithiasis or nephrolithiasis if you want words harder to pronounce, form when some type of mineral or salt clusters together inside your kidneys. Stones can form when you have too much of certain mineral or salt or if you are not hydrated enough. Calcium oxalate or calcium phosphate stones can form when you get high doses of vitamin D, undergo bypass surgery, or have metabolic issues."},
    {"question":"What is HPV?", "answer":"The “human papilloma virus”, or HPV, is the most common sexually transmitted infection in the world. HPV is a highly contagious virus which affects the skin and moist membranes of the body such as the cervix, anus, mouth and throat"},
    {"question":"How many calories should I eat a day?", "answer":"You need calories to survive. However, people probably are wondering how many calories they should eat based on whether they want to gain weight, lose weight, or do neither. The frequently cited threshold is 2,000 calories for women and 2,500 calories for men per day to maintain the same body weight. Getting 2,000 calories from just eating sticks of butter or drinking soda is very different from getting the same number from a more balanced diet. Highly-processed foods may have different effects on your metabolism compared to natural food"},
    {"question":"How long does alcohol stay in your system?", "answer":"This is another tough question that doesn’t have a single set answer for everyone. On average, you are probably able to metabolise about half-a-drink per hour. But the speed at which you break down alcohol depends on a whole lot of things."},
    {"question":"How to lower cholesterol?", "answer":"If you are asking this for yourself, you may not want to try the keto diet. Cutting your intake of saturated fats and trans-fats is an important step. So is increasing your intake of omega-3 fatty acids and fiber. Getting more physical activity and losing weight may help. If you are smoking, stop. Also, limit your alcohol consumption. High cholesterol can increase your risk of stroke and various types of cardiovascular diseases."},
  ]

  const StyledTitleBlock = styled('div')(({theme}) => ({
    width:'50%',
    margin:'auto',
    marginTop:'100px',
    fontSize:'35px',
    fontWeight:600,
    color:'#07163a'
  }))

  return (
    <div>
        <Navbar/>
          <StyledTitleBlock>
            Popular Asked Questions
          </StyledTitleBlock>
          <div>
            {questions.map(question => (
              <QuestionBlock question={question.question} answer={question.answer}/>
            ))}
          </div>
        <Footer/>
    </div>
  )
}

export default QuestionAnswers