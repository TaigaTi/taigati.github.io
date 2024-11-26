import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Home.css'
import Socials from './Socials';
import ExperienceCard from './ExperienceCard';
import ProjectPreview from './ProjectPreview';
import AwardCard from './AwardCard';

function Home() {
    return (
        <div className='display flex flex-col items-center'>
            <section id="intro" className="h-[90vh]">
                <div className="container flex flex-col items-center justify-center gap-2">
                    <img className="avatar" src="technicallyti.png" alt="Tarika Birch" />
                    <h1 className='text-5xl md:text-6xl'>Tarika Birch</h1>
                    <img className="frontend" src="frontend.png" alt="Frontend Developer" />

                    <button className="resume-button rounded mt-5 p-2 flex gap-2 items-center justify-space-between">
                        <i className='fa-regular fa-file'></i>
                        Resume
                    </button>

                    <Socials />
                </div>
            </section>

            <div className='divider p-20'></div>

            <section id="tools" className="h-screen pt-6">
                <div className="container flex flex-col items-center justify-center gap-2">
                    <h1 className='text-2xl md:text-4xl'>Bringing Ideas To Life</h1>

                    <div className="flex gap-6 p-6 grid sm:grid-cols-1 md:grid-cols-2">
                        <div className='tech-skills flex flex-col items-center'>
                            <h1 className='text-2xl pb-6'>Tech Skills</h1>
                            <div className='tech-skills-logos flex column grid grid-cols-4 gap-8'>
                                <img src='assets/tech-skills/typescript.svg' alt="TypeScript" />
                                <img src='assets/tech-skills/javascript.svg' alt="JavaScript" />
                                <img src='assets/tech-skills/react.svg' alt="React" />
                                <img src='assets/tech-skills/angular.svg' alt="Angular" />
                                <img src='assets/tech-skills/tailwind.svg' alt="Tailwind" />
                                <img src='assets/tech-skills/bootstrap.svg' alt="Bootstrap" />
                                <img src='assets/tech-skills/nodejs.svg' alt="NodeJS" />
                                <img src='assets/tech-skills/html.svg' alt="HTML" />
                                <img src='assets/tech-skills/css.svg' alt="CSS" />
                                <img src='assets/tech-skills/drupal.png' alt="Drupal" />
                                <img src='assets/tech-skills/firebase.svg' alt="Firebase" />
                                <img src='assets/tech-skills/python.png' alt="Python" />
                            </div>
                        </div>
                        <div className='design-tools flex flex-col items-center'>
                            <h1 className='text-2xl pb-6'>Design Tools</h1>
                            <div className='design-tools-logos flex column grid grid-cols-3 gap-8'>
                                <img src='assets/design-tools/figma.svg' alt="Figma" />
                                <img src='assets/design-tools/illustrator.png' alt="Illustrator" />
                                <img src='assets/design-tools/procreate.webp' alt="Procreate" />
                                <img src='assets/design-tools/canva.png' alt="Canva" />
                                <img src='assets/design-tools/lightroom.png' alt="Lightroom" />
                                <img src='assets/design-tools/photoshop.svg' alt="Photoshop" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="md:h-screen pt-6 grid sm:grid-cols-1 lg:grid-cols-2">
                <div id="experience-about" className='h-[90vh] p-6'>
                    <div className='description flex flex-col md:items-start pb-4'>
                        <h1 className='text-4xl'>Tarika Birch</h1>
                        <h2 className='text-lg md:text-2xl'>Frontend Developer</h2>
                        <p className='mt-4 md:mt-0'>Blending creativity with innovation!</p>
                    </div>

                    <div className="flex flex-col gap-4 mt-4 pb-10">
                        <div className="flex gap-4">
                            <p>🎓</p>
                            <div className="flex flex-col items-start text-start">
                                <p>Bsc. Computer Science with Management</p>
                                <p>Expected Graduation: May 2025</p>
                                <p>GPA: 3.85</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <p>📓</p>
                            <div className="flex flex-col items-start text-start">
                                <p>Secretary of the Computer Science Society</p>
                                <p>FST, UWI Cave Hill</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <p>🏆</p>
                            <div className="flex flex-col items-start text-start">
                                <p>Award-Winning Artist with 7 years of</p>
                                <p> experience in art and design</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <p>🎨</p>
                            <div className="flex flex-col items-start text-start">
                                <p>Founder of an art and design company</p>
                                <p>Querencia Studios</p>
                            </div>
                        </div>
                    </div>

                    <div className="divider md:py-10"></div>

                    <div className='flex flex-col md:items-start items-center'>
                        <Socials />

                    </div>
                </div>

                <div id="experience-jobs" className='mt-10 md:mt-0'>
                    <h1 className="text-2xl">Experience</h1>

                    <div className="experience-container flex flex-col gap-4 mt-4 p-5">
                        <ExperienceCard title="Software Developer" company="Pellucid IT" startDate="Jul 2024" endDate="Present" location="Remote" />
                        <ExperienceCard title="Software Developer" company="Pellucid IT" startDate="Jan 2024" endDate="Jul 2024" location="Remote" />
                        <ExperienceCard title="Judiciary Software Engineer" company="National Center for State Courts" startDate="Jul 2023" endDate="Aug 2023" location="Remote" />
                        <ExperienceCard title="Digital Transformation Intern" company="Central Bank of Barbados" startDate="Jun 2023" endDate="Jul 2023" location="Remote" />
                    </div>

                </div>
            </section>

            <section id="projects" className='w-full p-2 md:p-10 my-10'>
                <div className='flex justify-between px-8'>
                    <h1 className="text-2xl">Latest Projects</h1>
                    <button>View All</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4 p-6'>
                    <ProjectPreview />
                    <ProjectPreview />
                    <ProjectPreview />
                </div>

            </section>

            <section id="Awards" className='w-full p-2 md:p-10 my-10'>
                <div className='flex justify-between px-8'>
                    <h1 className="text-2xl">Awards</h1>
                    <button>View All</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4 p-6'>
                    <AwardCard type={"award"} />
                    <AwardCard type={"award"} />
                    <AwardCard type={"award"} />
                </div>

            </section>
      
            <section id="Certificates" className='w-full p-2 md:p-10'>
                <div className='flex justify-between px-8'>
                    <h1 className="text-2xl">Certificates</h1>
                    <button>View All</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4 p-6'>
                    <AwardCard type={"certificate"}/>
                    <AwardCard type={"certificate"}/>
                    <AwardCard type={"certificate"}/>
                </div>

            </section>

            <section className='h-screen p-10'>
                <div className='h-full flex justify-center items-center'>
                    <img src="frontend.png" alt='Frontend Developer' width={800}/>
                </div>
            </section>

            <section className='p-10'>
                <p>Made with <i className="fa-regular fa-heart"></i> by Tarika Birch</p>
            </section>
        </div>
    )
}

export default Home