import react from "react";
import image from '../assets/boylappy.png'

function Home() {
    return (
        <div className="aboutme">
            <div className="heading">
                <h1>About Me</h1>
            </div>
            <div className="container2 ">
                <div className="cardr fade-in-left">
                    <img src="https://portfolio-seven-phi-87.vercel.app/assets/aboutGif-tAa9RvpK.gif" alt="" />
                </div>
                <div className="cardl fade-in-right">
                    <p style={{ color: "white" }}>
                        I am Swanjal Singh, a highly motivated and dedicated Computer Science student pursuing a B.Tech at Sharda University . With a passion for competitive programming, machine learning, and quantitative finance, I have honed my skills in C/C++, Python, JavaScript, and TypeScript, while exploring frameworks like React, Flask, and FastAPI. My interest lies in leveraging data-driven solutions and cutting-edge technologies to solve real-world challenges. I thrive in collaborative environments, as reflected in my contributions to renowned open-source projects like Apache and MDAnalysis. Through projects in algorithmic trading, spam detection, and visualization tools, I have showcased my ability to combine technical expertise with innovative thinking. My achievements, including certifications in generative AI and problem-solving, further highlight my commitment to continuous learning and excellence.</p>
                </div>

            </div>
        </div>


    )
}
export default Home
