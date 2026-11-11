function Skills() {
    return (
        <div className="flex gap-6 p-6 grid sm:grid-cols-1 md:grid-cols-2 w-full">
            <div className='tech-skills flex flex-col items-center'
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out">
                <h1 className='text-2xl pb-6'>Tech Skills</h1>
                <div className='tech-skills-logos flex column grid grid-cols-4 gap-8 pb-8'>
                    <img loading="lazy" src='assets/tech-skills/typescript.svg' alt="TypeScript" />
                    <img loading="lazy" src='assets/tech-skills/javascript.svg' alt="JavaScript" />
                    <img loading="lazy" src='assets/tech-skills/react.svg' alt="React" />
                    <img loading="lazy" src='assets/tech-skills/angular.svg' alt="Angular" />
                    <img loading="lazy" src='assets/tech-skills/tailwind.svg' alt="Tailwind" />
                    <img loading="lazy" src='assets/tech-skills/bootstrap.svg' alt="Bootstrap" />
                    <img loading="lazy" src='assets/tech-skills/nodejs.svg' alt="NodeJS" />
                    <img loading="lazy" src='assets/tech-skills/html.svg' alt="HTML" />
                    <img loading="lazy" src='assets/tech-skills/css.svg' alt="CSS" />
                    <img loading="lazy" src='assets/tech-skills/drupal.png' alt="Drupal" />
                    <img loading="lazy" src='assets/tech-skills/firebase.svg' alt="Firebase" />
                    <img loading="lazy" src='assets/tech-skills/python.png' alt="Python" />
                </div>
            </div>
            <div className='design-tools flex flex-col items-center'
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-out">
                <h1 className='text-2xl pb-6'>Design Tools</h1>
                <div className='design-tools-logos flex column grid grid-cols-3 gap-8 pb-8'>
                    <img loading="lazy" src='assets/design-tools/figma.svg' alt="Figma" />
                    <img loading="lazy" src='assets/design-tools/illustrator.png' alt="Illustrator" />
                    <img loading="lazy" src='assets/design-tools/procreate.webp' alt="Procreate" />
                    <img loading="lazy" src='assets/design-tools/canva.png' alt="Canva" />
                    <img loading="lazy" src='assets/design-tools/lightroom.png' alt="Lightroom" />
                    <img loading="lazy" src='assets/design-tools/photoshop.svg' alt="Photoshop" />
                </div>
            </div>
        </div>
    )
}

export default Skills