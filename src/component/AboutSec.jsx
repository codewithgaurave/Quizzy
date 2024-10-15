import React from 'react'
import './Aboutsec.css'
import Footer from './Footer'

const AboutSec = () => {
  return (
    <>
    <div>
      <div className='alert'>
        <div className='g'>
        <div className='icon'>
        <i class="ri-notification-2-fill" style={{color:'green',fontSize:'50px'}}></i>
        </div>
        <div className='txt'>
            <h2>Get Online Quiz</h2>
            <p>Met Us</p>
        </div>
        </div>

        <div className='button'>
            <button>Join With Us<i class="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
    <div className='aboutSection'>
        <div className='aboutCon'>
            <p className='para'>About Error Quiz</p>
            <h1>Know Something About Our Programs</h1>
            <p>
            Looking for a fun and interactive way to sharpen your knowledge? Welcome to #ErrorQuiz — the ultimate destination for quiz lovers! Our platform offers a vast range of topics, from general trivia to specialized subjects, designed to challenge your brain and keep you engaged. Whether you're preparing for exams, boosting your memory, or just having fun, we provide a seamless experience with instant feedback, detailed reviews, and personalized quizzes. With a user-friendly interface and a growing community of learners, [Your Quiz Website] is your go-to place to test your skills, track progress, and compete with friends. Dive into the world of knowledge and become a quiz champion today!</p>

        </div>
        <div className='aboutImg'>
            <div className='pers'>
                <img src='image.png'/><p className='ab'>85%</p>
                <p style={{textAlign:'center',color:'white'}}>85% Saticfied students</p>
            </div>
            <div className='book'>
                <img src='https://gaviaspreview.com/wp/wellearn/wp-content/uploads/2024/06/image-23.jpg'></img>
            </div>
            <div className='comp'>
                <img src='https://gaviaspreview.com/wp/wellearn/wp-content/uploads/2024/06/image-22.jpg'></img>
            </div>
            <div className='exp'>
                <img src='https://i.pinimg.com/originals/48/1f/da/481fda4e5af4c3bc4c115cbe0a4d026c.png'/>
                <p style={{textAlign:'center',color:'white'}}>Experiance Designer</p>
            </div>
        </div>
        {/* <Footer/> */}
    </div>
    </>

  )
}

export default AboutSec
