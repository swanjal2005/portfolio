import react from "react";

function About() {
    return (
        <div className="about">
            <p>
                Swanjal Singh
            </p>

            <h2 style={{
                backgroundImage: 'linear-gradient(270deg, black, rgba(192, 88, 212, 0.92))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold'
            }}>Software Developer</h2>

            <div className="container  ">
                <div className="cardleft fade-in-left">
                    <h3>Hi, I’m Swanjal Singh! I am a Computer Science enthusiast with a keen interest in leveraging technology to make impactful solutions. Currently, I am pursuing degree—B.Tech in Computer Science from Sharda University and . I am passionate about building intelligent systems and solving complex problems using machine learning and data science. From developing algorithmic trading strategies to visualizing sorting algorithms, my projects reflect my curiosity and technical expertise. I take pride in my contributions to the open-source community and enjoy learning new technologies like React, Flask, FastAPI, and Docker. When I’m not coding, you’ll find me exploring competitive programming or diving into the world of quantitative finance. Feel free to explore my portfolio and get in touch to collaborate on exciting projects!</h3>

                </div>
                <div className="cardright fade-in-right" style={{paddingLeft:"30px", }}>
                    <img src="https://portfolio-seven-phi-87.vercel.app/assets/introGif-Bcbe04zA.gif" style={{width:"450px", height:"60vh"}} alt="" />
                </div>


            </div>
        </div>
    );
}
export default About