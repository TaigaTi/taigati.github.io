import '../styles/ProjectPreview.css'
import projects from '../data/projects'

function ProjectPreview({ id }) {
    const project = projects.find((project) => project.id === id)

    return (
        <>
            <a className="project-preview container text-start" href={project.link || project.repo} >
                <img className="project-image h-1/2" src={project.image} alt={project.title} />
                <div className='project-info h-1/2 container p-6 pt-4 pb-8 flex flex-col justify-evenly'>
                    <div className="project-text pb-1">
                        <h1 className="text-lg mb-2">{project.title}</h1>
                        <p className="text-sm opacity-80">{project.shortDescription}</p>
                    </div>
                    <div className="project-tags flex gap-2 mt-3 text-sm flex-wrap">
                        {project.tags.map((tag) => {
                            return (
                                <p key={tag}>{tag}</p>
                            )
                        })}
                    </div>
                </div>
            </a>
        </>
    )
}

export default ProjectPreview