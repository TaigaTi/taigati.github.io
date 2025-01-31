import '../styles/ExperienceCard.css'

function ExperienceCard({ title, company, startDate, endDate, location, logo }) {
    return (
        <div className="experience-card flex gap-4 items-center p-6" >
            <img className="experience-logo" src={logo} alt="" />
            <div className="experience-info flex justify-between w-full grid grid-cols-1 md:grid-cols-2 text-start">
                <div className="flex flex-col items-start mb-2">
                    <p className='opacity-90'>{title}</p>
                    <p className='text-sm opacity-70'>{company}</p>
                </div>
                <div className='flex flex-col items-start md:items-end'>
                    <p className='text-sm opacity-90'>{startDate} - {endDate}</p>
                    <p className='text-sm opacity-70'>{location}</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard