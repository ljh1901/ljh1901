import { useEffect } from 'react';
import './Skills.css'
function Skills() {
    return (
        <section>
            <h1 id="skills">Skills</h1>
            <div>
                <div>IDE: Eclipse / VS Code / IntelliJ</div>
                <div>Front-End: html / javascript / css / Thymeleaf / JSP</div>
                <div>Back-End: Spring / Spring Boot / Node.js</div>
                <div> <strong>DataBase</strong>
                    DataBase Framework: Spring Data JPA / MyBatis <br />
                   </div>
                <div>🧰 Tools & Collaboration
                    - Git, GitHub, Notion
                    - Postman
                    - draw.io (ERD 및 시스템 설계)
                    - MySQL Workbench (Reverse Engineering을 통한 DB 구조 분석 및 UML 생성)
                </div>

                ☁️ Cloud
                - AWS EC2
                - AWS RDS

                ⚙️ DevOps / Infra
                - ngrok
                - PuTTY
                - WSL
            </div>
        </section>
    );
}
export default Skills;