const techSkills = [
    { name: 'TypeScript', src: 'assets/tech-skills/typescript.svg' },
    { name: 'JavaScript', src: 'assets/tech-skills/javascript.svg' },
    { name: 'React', src: 'assets/tech-skills/react.svg' },
    { name: 'Angular', src: 'assets/tech-skills/angular.svg' },
    { name: 'Tailwind', src: 'assets/tech-skills/tailwind.svg' },
    { name: 'Bootstrap', src: 'assets/tech-skills/bootstrap.svg' },
    { name: 'Node.js', src: 'assets/tech-skills/nodejs.svg' },
    { name: 'HTML', src: 'assets/tech-skills/html.svg' },
    { name: 'CSS', src: 'assets/tech-skills/css.svg' },
    { name: 'Drupal', src: 'assets/tech-skills/drupal.png' },
    { name: 'Firebase', src: 'assets/tech-skills/firebase.svg' },
    { name: 'Python', src: 'assets/tech-skills/python.png' },
]

const designTools = [
    { name: 'Figma', src: 'assets/design-tools/figma.svg' },
    { name: 'Illustrator', src: 'assets/design-tools/illustrator.png' },
    { name: 'Procreate', src: 'assets/design-tools/procreate.webp' },
    { name: 'Canva', src: 'assets/design-tools/canva.png' },
    { name: 'Lightroom', src: 'assets/design-tools/lightroom.png' },
    { name: 'Photoshop', src: 'assets/design-tools/photoshop.svg' },
]

function SkillGrid({ items, className }) {
    return (
        <ul className={`${className} grid gap-x-6 gap-y-6 pb-8`}>
            {items.map(({ name, src }) => (
                <li key={name} className="skill-item flex flex-col items-center gap-2">
                    <img loading="lazy" src={src} alt="" />
                    <span className="text-xs sm:text-sm opacity-80">{name}</span>
                </li>
            ))}
        </ul>
    )
}

function Skills() {
    return (
        <div className="flex gap-6 p-6 grid sm:grid-cols-1 md:grid-cols-2 w-full">
            <div className='tech-skills flex flex-col items-center'
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out">
                <h1 className='text-2xl pb-6'>Tech Skills</h1>
                <SkillGrid items={techSkills} className="tech-skills-logos grid-cols-4" />
            </div>
            <div className='design-tools flex flex-col items-center'
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-out">
                <h1 className='text-2xl pb-6'>Design Tools</h1>
                <SkillGrid items={designTools} className="design-tools-logos grid-cols-3" />
            </div>
        </div>
    )
}

export default Skills
