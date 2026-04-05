import { useEffect } from 'react';
import './Projects.css'

function Projects(){
    return(
        <section>
        <h1 id="projects">Projects</h1>
        <div className="project__container">
            <div className="project-wrapper">
                <img src="/src/assets/histudyproject.jpg" alt="project1.jpg"></img>
                <div className='overlay'>
                    <a href="#">PDF 보기</a>
                    <a href="#">Github 이동</a>
                </div>
            </div>
            <div className="project-wrapper">
                <img src="/src/assets/studentcafeteria.jpg" alt="project2.jpg"></img>
                <div className='overlay'>
                    <a href="#"><i class="fa-solid fa-file-pdf" style={{color: "rgb(242, 43, 43);"}}></i>PDF 보기</a>
                    <a href="#">Github 이동</a>
                </div>
            </div>
            <div className="project-wrapper">
                <img src="/src/assets/groupware.jpg" alt="project3.jpg"></img>
                <div className='overlay'>
                    <a href="#">PDF 보기</a>
                    <a href="#">Github 이동</a>
                </div>
            </div>
        </div>
        </section>
    );
}
export default Projects;