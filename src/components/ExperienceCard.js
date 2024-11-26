import '../styles/ExperienceCard.css'

function ExperienceCard() {
    return (
        <div className="experience-card flex gap-4 items-center p-8" >
            <img className="experience-logo" src="technicallyti.png" alt="Tarika Birch" />
            <div className="experience-info flex flex-col grid grid-cols-2 ">
                <div className="flex flex-col items-start mx-2">
                    <p>Software Developer</p>
                    <p>Pellucid IT</p>
                </div>
                <div className='flex flex-col items-end mx-2'>
                    <p>Jul 2024 - Present</p>
                    <p>Remote</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard