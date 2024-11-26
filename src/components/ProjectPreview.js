import '../styles/ProjectPreview.css'

function ProjectPreview() {
    return (
        <>
            <div className="project-preview text-start" >
                <img className="project-image" src="technicallyti.png" alt="Tarika Birch" />
                <div className='p-6'>
                    <h1 className="text-lg mb-2">Project Name</h1>
                    <p className="text-sm">Lorem ipsum dolor this is a description of the project that we  need to see what the project is about.</p>
                    <div className="project-tags flex gap-2 mt-3 text-sm flex-wrap">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Express</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPreview