import { useState } from 'react'
import '../styles/ExperienceCard.css'

function ExperienceCard({ title, company, startDate, endDate, location, logo, highlights = [], defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen && highlights.length > 0)
    const expandable = highlights.length > 0
    const Header = expandable ? 'button' : 'div'

    return (
        <div className={`experience-card${open ? ' open' : ''}`}>
            <Header
                className="experience-header flex gap-4 items-center p-6 w-full"
                {...(expandable && {
                    type: 'button',
                    'aria-expanded': open,
                    onClick: () => setOpen(!open),
                })}
            >
                <img className="experience-logo" loading="lazy" decoding="async" src={logo} alt="" />
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
                {expandable && (
                    <span className="experience-toggle flex items-center gap-2 text-sm shrink-0" aria-hidden="true">
                        <span className="hidden sm:inline">{open ? 'Hide' : 'Details'}</span>
                        <i className="experience-chevron fa-solid fa-chevron-down"></i>
                    </span>
                )}
            </Header>

            {expandable && (
                <div className="experience-details">
                    <ul className="experience-highlights text-start text-sm opacity-80 px-6 pb-6 md:pl-[110px]">
                        {highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ExperienceCard