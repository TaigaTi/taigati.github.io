function Skills() {
    return (
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
    )
}

export default Skills