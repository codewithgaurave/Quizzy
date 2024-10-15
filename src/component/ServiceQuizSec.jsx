import "./ServiceQuizSec.css";

export default function ServiceQuizSec() {
    return (
        <div style={{height:"210vh"}}>
            <div className="card-wrapper">
                <div className="card">
                    <i className="fab fa-html5"></i>
                    <h1>HTML QUIZ</h1>
                    <p>Test your knowledge of HTML fundamentals and improve your web development skills.</p>
                </div>
                <div className="card">
                    <i className="fab fa-css3-alt"></i>
                    <h1>CSS QUIZ</h1>
                    <p>Challenge yourself with CSS questions that enhance your styling capabilities.</p>
                </div>
                <div className="card">
                    <i className="fab fa-js"></i>
                    <h1>JAVASCRIPT QUIZ</h1>
                    <p>Evaluate your understanding of JavaScript concepts and improve your programming expertise.</p>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <i className="fab fa-php"></i>
                    <h1>PHP QUIZ</h1>
                    <p>Deepen your knowledge of PHP through quizzes that test your server-side scripting skills.</p>
                </div>
                <div className="card">
                    <i className="fab fa-java"></i>
                    <h1>JAVA QUIZ</h1>
                    <p>Assess your Java programming skills with challenging questions and scenarios.</p>
                </div>
                <div className="card">
                    <i className="fab fa-python"></i>
                    <h1>PYTHON QUIZ</h1>
                    <p>Put your Python knowledge to the test with quizzes designed for all levels of expertise.</p>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <i className="fab fa-python"></i> {/* Use a relevant Django icon or font icon */}
                    <h1>DJANGO QUIZ</h1>
                    <p>Explore your understanding of Django framework concepts and practices.</p>
                </div>
                <div className="card">
                    <i className="fas fa-database"></i>
                    <h1>MYSQL QUIZ</h1>
                    <p>Challenge your database skills with questions focused on MySQL operations and queries.</p>
                </div>
                <div className="card">
                    <i className="fas fa-database"></i>
                    <h1>SQL QUIZ</h1>
                    <p>Test your knowledge of SQL with questions on queries, joins, and database management.</p>
                </div>

            </div>
            <div className="card-wrapper">
                <div className="card">
                    <i className="fab fa-react"></i>
                    <h1>REACT JS QUIZ</h1>
                    <p>Test your skills in building dynamic web applications using React.js.</p>
                </div>
                <div className="card">
                    {/* <i className="fab fa-node-js"></i> */}
                    <i className="fas fa-server"></i>

                    <h1>EXPRESS.JS QUIZ</h1>
                    <p>Challenge your knowledge of building web applications with Express.js framework.</p>
                </div>
                <div className="card">
                    <i className="fab fa-node-js"></i>
                    <h1>NODE.JS QUIZ</h1>
                    <p>Assess your understanding of server-side programming with Node.js.</p>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <i className="fab fa-envira"></i>
                    <h1>MONGOOSE QUIZ</h1>
                    <p>Enhance your skills with Mongoose through practical quiz questions on schema design and data modeling.</p>
                </div>

                <div className="card">
                    <i className="fas fa-c"></i>
                    <h1>C QUIZ</h1>
                    <p>Test your proficiency in C programming with challenging questions.</p>
                </div>
                <div className="card">
                    {/* <i className="fas fa-code"></i> */}
                    <i class="ri-braces-line"></i>
                    <h1>C# QUIZ</h1>
                    <p>Evaluate your knowledge of C# through a variety of quizzes and exercises.</p>
                </div>
            </div>
        </div>
    );
}
