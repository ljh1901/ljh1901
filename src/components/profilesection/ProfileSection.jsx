import { useEffect } from 'react';
import './ProfileSection.css'
import myPhoto from '/src/assets/resume.png'

function Profile() {

useEffect(function () {
    const profileOption = document.querySelector('.profile__options');
    const profileIntroduction = document.querySelector('.profile__introduction');
    const profileEducation = document.querySelector('.profile__education');
    const profileCertification = document.querySelector('.profile__certification');
    const profileAwards = document.querySelector('.profile__awards');
    const profileExperience = document.querySelector('.profile__experience');
    const profileSkills = document.querySelector('.profile__skills');

    // 초기 상태
    profileIntroduction.style.display = 'initial';
    profileEducation.style.display = 'none';
    profileCertification.style.display = 'none';
    profileAwards.style.display = 'none';
    profileExperience.style.display = 'none';
    profileSkills.style.display = 'none';

    profileOption.addEventListener('click', function (e) {
        switch (e.target.id) {
            case 'introduction': {
                profileIntroduction.style.display = 'initial';
                profileEducation.style.display = 'none';
                profileCertification.style.display = 'none';
                profileAwards.style.display = 'none';
                profileExperience.style.display = 'none';
                profileSkills.style.display = 'none';
                break;
            }
            case 'education': {
                profileIntroduction.style.display = 'none';
                profileEducation.style.display = 'initial';
                profileCertification.style.display = 'none';
                profileAwards.style.display = 'none';
                profileExperience.style.display = 'none';
                profileSkills.style.display = 'none';
                break;
            }
            case 'certification': {
                profileIntroduction.style.display = 'none';
                profileEducation.style.display = 'none';
                profileCertification.style.display = 'initial';
                profileAwards.style.display = 'none';
                profileExperience.style.display = 'none';
                profileSkills.style.display = 'none';
                break;
            }
            case 'awards': {
                profileIntroduction.style.display = 'none';
                profileEducation.style.display = 'none';
                profileCertification.style.display = 'none';
                profileAwards.style.display = 'initial';
                profileExperience.style.display = 'none';
                profileSkills.style.display = 'none';
                break;
            }
            case 'experience': {
                profileIntroduction.style.display = 'none';
                profileEducation.style.display = 'none';
                profileCertification.style.display = 'none';
                profileAwards.style.display = 'none';
                profileExperience.style.display = 'initial';
                profileSkills.style.display = 'none';
                break;
            }
            case 'skills': {
                profileIntroduction.style.display = 'none';
                profileEducation.style.display = 'none';
                profileCertification.style.display = 'none';
                profileAwards.style.display = 'none';
                profileExperience.style.display = 'none';
                profileSkills.style.display = 'initial';
                break;
            }
        }
    });
}, []);
    return (
        <section className="profile__section">
            <div className="profile__photo">
                <div>
                    <h2>About Me</h2>
                    <img src={myPhoto} alt="resume.png" />
                </div>
                <div className="profile__basic">
                    <p><strong>Name:</strong> 이주호 (Lee Juho)</p>
                    <p><strong>Birth:</strong> 2001.05.21</p>
                    <p><strong>Email:</strong> juho8690@gmail.com</p>
                    <p><strong>H.P:</strong> 010-8690-3944</p>
                </div>
            </div>

            <div className="profile__options">
                <button id="introduction" type="button">소개 (Introduction)</button>
                <button id="education" type="button">교육 사항 (Education)</button>
                <button id="certification" type="button">자격 사항 (Certification)</button>
                <button id="awards" type="button">수상 (Awards)</button>
                <button id="experience" type="button">경험 및 활동 (Experience & Activities)</button>
                <button id="skills" type="button">관심 분야 / 학습 계획 (Skills / Learning Plans)</button>

                <div id="profile__info">
                    <article className="profile__introduction">
                        <strong>"안된다고, 포기하기보다 일단 한번 해보자"</strong>
                        <p>라는 신념으로 실행에 옮기는 개발자 이주호입니다.</p>
                        <p>
                            HTML, CSS, JavaScript를 활용한 프론트엔드 개발과
                            Java 및 SQL 기반의 백엔드 개발이 가능한 풀스택 개발자를 지향합니다.
                            다양한 프로젝트 경험을 통해 프론트엔드와 백엔드를 아우르는 역량을 쌓았으며,
                            새로운 기술 학습으로 여러 웹 기술 경험을 넓혀가고 있습니다.
                        </p>
                        <ol type="1">
                            <strong>중요하게 생각하는 3가지 원칙</strong>
                            <li>데이터의 구조와 흐름을 명확하게 설계합니다.</li>
                            <li>코드 중복을 최소화하며 효율적 설계를 추구합니다.</li>
                            <li>꾸준한 학습 및 기록, 새로운 도전을 가치 있게 생각합니다.</li>
                        </ol>
                    </article>

                    <article className="profile__education">
                        <p>- 세명대학교 스마트IT학부(정보통신학 전공), GPA 4.4, 과 수석 졸업 (2020.03 ~ 2026.02)</p>
                        <p>- AWS & CI/CD 기반 Java 클라우드 Full-Stack 개발자 양성과정 수료 (2025.07 ~ 2026.02)</p>
                    </article>

                    <article className="profile__certification">
                        <table>
                            <thead>
                                <tr>
                                    <th>자격증 명</th>
                                    <th>취득일</th>
                                    <th>발급기관</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>정보처리기사</td>
                                    <td>2025.09.12</td>
                                    <td>한국 산업인력공단</td>
                                </tr>
                                <tr>
                                    <td>SQL개발자-SQLD</td>
                                    <td>2024.12.13</td>
                                    <td>한국 데이터진흥원</td>
                                </tr>
                                <tr>
                                    <td>자동차 운전면허 1종 보통</td>
                                    <td>2020.02.10</td>
                                    <td>서울특별시 경찰청</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>

                    <article className="profile__awards">
                        <div>
                            <strong>대전광역시 A.I 미션 챌린지 - (주) 새온</strong>
                            <p>대전광역시에서 주최한 자율주행 자동차 미션 챌린지에서 대전광역시장상 수상</p>
                            <p>상세 내용: C언어 알고리즘을 탑재한 아두이노 보드를 활용하여 문제 해결 및 협업 능력 향상</p>
                            <p>수상일자: 2023.09.15</p>
                        </div>
                        <div>
                            <strong>세명대학교 총장 표창</strong>
                            <p>학교 명예를 드높인 대외 공모전 수상</p>
                            <p>수상일자: 2023.12.12</p>
                        </div>
                        <div>
                            <strong>세명대학교 스마트IT학부 수석 졸업</strong>
                            <p>재학 중 성실한 학업 성취 및 모범적 참여</p>
                            <p>수상일자: 2026.02.20</p>
                        </div>
                    </article>

                    <article className="profile__experience">
                        <h3>Job Experience</h3>
                        <div>
                            <h4>여의도 대교문구 / Part-time Staff</h4>
                            <p>기간: 2022.10.27 ~ 2023.03.01 (5개월)</p>
                            <ul>
                                <li>고객 응대 및 결제 업무 수행 - 커뮤니케이션 역량 강화</li>
                                <li>문서 처리 및 학교 납품 관련 문서 관리</li>
                            </ul>
                        </div>

                        <h3>Projects / R&D</h3>
                        <div>
                            <h4>세명대학교 / R&D 학생 연구자</h4>
                            <p>기간: 2023.09.01 ~ 2024.05.01 (9개월)</p>
                            <ul>
                                <li>Jetson Xavier Nx 기반 센서 융합 자율비행 배송드론 시스템 개발</li>
                                <li>RViz 활용 LiDAR 데이터 시각화 및 CloudCompare PLY 처리</li>
                                <li>SVO 기반 PLY → PCD 변환 수행, Linux 및 ROS 환경 이해</li>
                            </ul>
                        </div>

                        <h3>Volunteer / Activities</h3>
                        <div>
                            <h4>I&U 프로그램</h4>
                            <p>기간: 2023.10.06 ~ 2023.12.15</p>
                            <ul>
                                <li>콘크리트 혼합 공정에서 목재 섬유 보강재 투입</li>
                                <li>균열 방지와 혼합물 인장 강도 향상을 위한 첨가제 역할 이해</li>
                            </ul>
                        </div>
                        <div>
                            <h4>중등 연계 교육 참여 / 드론의 세계 프로그램 운영 지원</h4>
                            <p>기간: 2023.09.05 / 2023.09.07 / 2023.09.14 / 2023.09.21</p>
                            <ul>
                                <li>학생 대상 드론 코딩 교육 지원 및 프로그램 운영</li>
                            </ul>
                        </div>
                        <div>
                            <h4>사무 행정보조 - 송파구 사회적 경제 지원센터</h4>
                            <p>기간: 2020.12.11 / 2020.12.24 / 2020.12.30</p>
                            <ul>
                                <li>사무 지원 및 자료 정리, 프로그램 보조</li>
                            </ul>
                        </div>
                        <div>
                            <h4>업무 보조 - 서울 시각 장애인 복지관</h4>
                            <p>기간: 2020.11.17 ~ 2020.11.19</p>
                            <ul>
                                <li>운영팀 지원, 설문 조사 및 시각 장애인 활동 보조</li>
                            </ul>
                        </div>
                    </article>

                    <article className="profile__skills">
                        <h2>백엔드 역량 강화</h2>
                        <ul>
                            <li>Spring Framework / Spring Boot 경험 강화 및 다양한 환경에서 구현</li>
                            <li>REST API 설계, CRUD 설계 및 요청/응답 처리 경험</li>
                            <li>DB 트랜잭션 관리, 동시성 처리, SQL 성능 최적화 학습</li>
                        </ul>

                        <h2>React 학습 - 포트폴리오 웹사이트 구현</h2>
                        <ul>
                            <li>Vite 기반 React 환경 구축 및 기술 습득</li>
                            <li>Hooks 개념 학습 및 포트폴리오 웹사이트 구현</li>
                            <li>블로그/레퍼런스 참고 후 부족한 부분 재학습</li>
                        </ul>

                        <h2>DevOps 및 배포 환경 학습</h2>
                        <ul>
                            <li>Nginx, EC2, RDB 기반 프로젝트 배포 경험 복습</li>
                            <li>jar 파일 변환 및 URL 기반 도메인 접근 과정 학습</li>
                            <li>Docker 기반 컨테이너 배포 학습 진행 중</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Profile;