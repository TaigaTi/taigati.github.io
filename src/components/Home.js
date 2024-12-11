import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Home.css'
import Skills from './Skills';
import Socials from './Socials';
import ExperienceCard from './ExperienceCard';
import ProjectPreview from './ProjectPreview';
import AwardCard from './AwardCard';
import projects from '../data/projects';
import awards from '../data/awards';
import { HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Home() {
    return (
        <div className='display flex flex-col items-center'>
            <section id="intro" className="min-h-[90vh]">
                <div className="container flex flex-col items-center justify-center gap-2">
                    <img className="avatar" src="technicallyti.png" alt="Tarika Birch" />
                    <div id="cursor-container-landing">
                        <img className="artist-cursor" src="assets/cursors/artist-cursor.png" alt="Tarika Birch" />
                        <img className="designer-cursor" src="assets/cursors/designer-cursor.png" alt="Tarika Birch" />
                        <img className="developer-cursor" src="assets/cursors/developer-cursor.png" alt="Tarika Birch" />
                    </div>
                    <h1 className='text-5xl md:text-6xl mb-1'>Tarika Birch</h1>
                    <img className="frontend" src="frontend.png" alt="Frontend Developer" />

                    <a className="text-lg resume-button rounded mt-5 px-6 py-1 flex gap-2 items-center hover:scale-105 ease-in"
                        download="Tarika_Birch-Resume.pdf" href="assets/Tarika_Birch-Resume.pdf">
                        <i className="fa-regular fa-circle-down mr-1"></i>
                        <p>Resume</p>
                    </a>

                    <Socials />
                </div>
            </section>

            <div className='divider p-20'></div>

            <section id="tools" className="min-h-[80vh] pt-6 min-w-full flex flex-col items-center">
                <div className="container flex flex-col items-center justify-center gap-2">
                    <h1 className='text-2xl md:text-4xl'>Bringing Ideas To Life</h1>

                    <Skills />
                </div>
            </section>

            <section id="experience-about" className="p-6">
                <div className="container">
                    <h1 className='text-2xl md:text-4xl'>Who Am I?</h1>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className='md:text-lg p-2 pt-1 md:p-6 md:pt-1'>Frontend developer who enjoys crafting user-friendly experiences</p>

                        <div className='flex flex-col md:flex-row gap-4 grid sm:grid-cols-2 md:grid-cols-2'
                            data-aos="zoom-out"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-out">
                            <div className='about-card px-6'>
                                <p className='text-6xl mb-2'>📚</p>
                                <p className='pb-2 text-lg'>Bsc. Computer Science with Management</p>
                                <p className='opacity-80'>Expected Grad: May 2025</p>
                                <p className='opacity-80'>GPA: 3.85</p>
                            </div>

                            <div className='about-card px-6'>
                                <p className='text-6xl mb-2'>💻</p>
                                <p className='pb-2 text-lg'>Secretary of the Computer Science Society</p>
                                <p className='opacity-80'>FST, UWI Cave Hill</p>
                                <p className='opacity-80'>Sep 2023 - Present</p>
                            </div>

                            <div className='about-card px-6'>
                                <p className='text-6xl mb-2'>🏆</p>
                                <p className='pb-2 text-lg px-8'>Award-Winning Artist</p>
                                <p className='opacity-80'>7 years of experience</p>
                            </div>

                            <div className='about-card px-6'>
                                <p className='text-6xl mb-2'>🎨</p>
                                <p className='pb-2 text-lg'>Founder of Querencia Studios</p>
                                <p className='opacity-80'>Art & Design Company</p>
                                <a href="https://querenciastudios.company.site" className='opacity-80 flex justify-end'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="my-10 py-10">
                <div id="experience-jobs" className='mt-10 md:mt-0'>
                    <h1 className="text-2xl">Experience</h1>

                    <div data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-once="true"
                        data-aos-easing="ease-in-out"
                        className="experience-container flex flex-col gap-4 mt-4 p-2">
                        <ExperienceCard
                            title="Software Developer"
                            company="Pellucid IT"
                            startDate="Jul 2024"
                            endDate="Present"
                            location="Remote"
                            logo="assets/logos/pellucid.png"
                        />

                        <ExperienceCard
                            title="Software Developer Intern"
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

            <section id="projects" className='w-full p-2 md:p-10'>
                <div className='flex justify-between px-8'>
                    <h1 className="text-2xl">Latest Projects</h1>
                    <a href='/#/projects'>View All</a>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4 p-6'>
                    {projects.slice(0, 3).map((project) => (
                        <ProjectPreview key={project.id} {...project} />
                    ))}
                </div>

            </section>

            <section className='w-full p-10 px-2 md:p-10 my-12 md:my-0'>
                <div className='flex justify-between px-8'>
                    <h1 className="text-2xl">Awards</h1>
                    <HashLink to="/about/#awards">View All</HashLink>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4 p-6'>
                    {awards.filter((award) => award.type === "award").slice(0, 3).map((award) => (
                        <AwardCard key={award.id} {...award} />
                    ))}
                </div>

            </section>

            <section className='w-full p-2 md:p-10'>
                <div className='flex justify-between px-8'>
                    <h1 className="text-2xl">Certificates</h1>
                    <HashLink to="/about/#certificates">View All</HashLink>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4 p-6'>
                    {awards
                        .filter((award) => award.type === "certificate")
                        .slice(0, 3)
                        .map((award) => (
                            <AwardCard key={award.id} {...award} />
                        ))}
                </div>
            </section>

            <section className='h-screen p-10'>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-once="true"
                    data-aos-easing="ease-in-out"
                    className='h-full flex justify-center items-center'>
                    <img src="frontend.png" alt='Frontend Developer' width={800} />
                </div>
                <div
                    id="cursor-container-footer"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="900"
                    data-aos-once="true"
                    data-aos-easing="ease-in-out">
                    <img className="artist-cursor" src="assets/cursors/artist-cursor.png" alt="Tarika Birch" />
                    <img className="designer-cursor" src="assets/cursors/designer-cursor.png" alt="Tarika Birch" />
                    <img className="developer-cursor" src="assets/cursors/developer-cursor.png" alt="Tarika Birch" />
                </div>
            </section>

            <section className='p-10'>
                <p>Made with <i className="fa-regular fa-heart"></i> by Tarika Birch</p>
            </section>
        </div>
    )
}

export default Home