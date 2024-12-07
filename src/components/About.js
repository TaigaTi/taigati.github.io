import '../styles/About.css'
import Socials from './Socials'
import Skills from './Skills'
import ExperienceCard from './ExperienceCard'
import AwardCard from './AwardCard'
import awards from '../data/awards'

function About() {
    return (
        <div className="about flex flex-col items-center py-5 md:p-10 pt-0">
            <section className="section container flex flex-col min-w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
                <div className="container flex flex-col items-center my-10">
                    <img className="about-avatar" src="technicallyti.png" alt="Tarika Birch" />
                    <div className='flex flex-col items-center gap-2 mt-5'>
                        <h1 className='text-2xl md:text-6xl mb-1'>Tarika Birch</h1>
                        <img id="about-frontend" className="frontend" src="frontend.png" alt="Frontend Developer" />
                        <a className="text-lg resume-button rounded mt-5 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in"
                            download="Tarika_Birch-Resume.pdf" href="assets/Tarika_Birch-Resume.pdf">
                            <i className="fa-regular fa-circle-down mr-1"></i>
                            <p>Resume</p>
                        </a>
                        <div className="mt-2">
                            <Socials />
                        </div>
                    </div>
                </div>

                <div className="container flex flex-col items-center my-10 p-5">
                    <div className='flex flex-col gap-4 w-full '>
                        <div className='about-card px-6 flex items-center gap-4 min-h-[25%]'>
                            <p className='text-5xl'>📚</p>
                            <div className='text-start'>
                                <p className='pb-1'>Bsc. Computer Science with Management</p>
                                <p className='opacity-80'>Expected Grad: May 2025</p>
                                <p className='opacity-80'>GPA: 3.85</p>
                            </div>
                        </div>

                        <div className='about-card px-6 flex items-center gap-4'>
                            <p className='text-5xl'>💻</p>
                            <div className='text-start'>
                                <p className='pb-1'>Secretary of the Computer Science Society</p>
                                <p className='opacity-80'>FST, UWI Cave Hill</p>
                                <p className='opacity-80'>Sep 2023 - Present</p>
                            </div>
                        </div>

                        <div className='about-card px-6 flex items-center gap-4'>
                            <p className='text-5xl'>🏆</p>
                            <div className='text-start'>
                                <p className='pb-1'>Award-Winning Artist</p>
                                <p className='opacity-80'>7 years of experience</p>
                            </div>
                        </div>

                        <div className='about-card px-6 flex items-center gap-4'>
                            <p className='text-5xl mb-2'>🎨</p>
                            <div className='text-start w-full'>
                                <p className='pb-1'>Founder of Querencia Studios</p>
                                <p className='opacity-80'>Art & Design Company</p>
                                <a href="https://querenciastudios.company.site" className='opacity-80 flex justify-end'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container flex flex-col items-center my-10 min-h-full p-5">
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='about-card px-6 flex items-center gap-4 opacity-90'>
                            <img src="https://github-readme-stats-mauve-zeta.vercel.app/api?username=TaigaTi&show_icons=true&theme=transparent&hide_border=true&title_color=f60cd7&text_color=ffffff&icon_color=f60cd7&rank_icon=github&include_all_commits=true" alt="Github" />
                        </div>

                        <div className='about-card px-6 flex items-center gap-4'>
                            <img src="https://leetcode-badge-sage.vercel.app/badge/tarikabirch?theme=dark" alt="Leetcode" />
                        </div>

                        <div className='px-5 about-card quote-card flex items-center justify-center gap-4'>
                            <p className='text-sm text-center opacity-70'>Every pixel has a purpose!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section flex flex-col items-center w-full mt-10">
                <p className='text-2xl md:text-4xl mb-6'>My Skills</p>
                <Skills />
            </section>

            <section id="experience" className="my-10 py-10 p-5">
                <div id="experience-jobs" className='mt-10 md:mt-0'>

                    <h1 className="text-2xl">Education</h1>

                    <div className="experience-container flex flex-col gap-4 mt-4 p-2 pb-10">
                        <ExperienceCard
                            title="Bsc. Computer Science with Management"
                            company="University of the West Indies, Cave Hill"
                            startDate="Sep 2021"
                            endDate="Present"
                            location="Barbados"
                            logo="assets/logos/uwi.png"
                        />
                    </div>

                    <h1 className="text-2xl">Experience</h1>

                    <div className="experience-container flex flex-col gap-4 mt-4 p-2">
                        <ExperienceCard
                            title="Software Developer"
                            company="Pellucid IT"
                            startDate="Jul 2024"
                            endDate="Present"
                            location="Remote"
                            logo="assets/logos/pellucid.png"
                        />

                        <ExperienceCard
                            title="Software Developer"
                            company="Pellucid IT"
                            startDate="Jan 2024"
                            endDate="Jul 2024"
                            location="Remote"
                            logo="assets/logos/pellucid.png"
                        />

                        <ExperienceCard
                            title="Judiciary Software Engineer"
                            company="National Center for State Courts"
                            startDate="Jul 2023"
                            endDate="Aug 2023"
                            location="Remote"
                            logo="assets/logos/ncsc.jpg"
                        />

                        <ExperienceCard
                            title="Digital Transformation Intern"
                            company="Central Bank of Barbados"
                            startDate="Jun 2023"
                            endDate="Jul 2023"
                            location="Barbados"
                            logo="assets/logos/cbb.png"
                        />
                    </div>
                </div>
            </section>

            <section id="awards" className="section flex flex-col items-center w-full mt-10 p-5">
                <p className='text-2xl md:text-4xl mb-6'>Awards</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4 p-2 md:p-6'>
                    {awards.filter((awards) => (awards.type === "award")).map((award) => {
                        return (
                            <AwardCard key={award.id} id={award.id} />
                        )
                    })}
                </div>
            </section>

            <section id="certificates" className="section flex flex-col items-center w-full mt-10 p-5">
                <p className='text-2xl md:text-4xl mb-6'>Certificates</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4 p-2 md:p-6 w-full'>
                    {awards.filter((awards) => (awards.type === "certificate")).map((award) => {
                        return (
                            <AwardCard key={award.id} id={award.id} />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default About
