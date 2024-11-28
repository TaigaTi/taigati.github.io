import '../styles/About.css'
import Socials from './Socials'
import Skills from './Skills'

function About() {
    return (
        <>
            <section className="section container flex flex-col min-h-screen min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                <div className="container flex flex-col items-center">
                    <img className="about-avatar" src="technicallyti.png" alt="Tarika Birch" />
                    <div className='flex flex-col items-center gap-2 mt-5'>
                        <h1 className='text-5xl md:text-6xl mb-1'>Tarika Birch</h1>
                        <img className="frontend" src="frontend.png" alt="Frontend Developer" />
                        <a className="text-lg resume-button rounded mt-5 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in"
                            download="Tarika_Birch-Resume.pdf" href="assets/Tarika_Birch-Resume.pdf">
                            <i class="fa-regular fa-circle-down mr-1"></i>
                            <p>Resume</p>
                        </a>
                        <Socials />
                    </div>
                </div>

                <div className="container flex flex-col items-center">
                    <div className='flex flex-col gap-4'>
                        <div className='about-card px-6 flex items-center gap-4'>
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

                <div className="container flex flex-col items-center">
                    <div className='flex flex-col gap-4'>
                        <div className='about-card px-6 flex items-center gap-4 opacity-90'>
                            <img src="https://github-readme-stats.vercel.app/api?username=taigati&show_icons=true&theme=transparent&hide_border=true&title_color=f60cd7&text_color=ffffff&icon_color=f60cd7&rank_icon=github" alt="Github" />
                        </div>

                        <div className='about-card px-6 flex items-center gap-4'>
                            <img src="https://leetcode-badge-sage.vercel.app/badge/tarikabirch?theme=dark" alt="Leetcode" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section container flex flex-col items-center min-h-[90vh]">
                <Skills />
            </section>
        </>
    )
}

export default About