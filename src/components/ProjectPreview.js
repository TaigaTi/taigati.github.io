import '../styles/ProjectPreview.css'
import projects from '../data/projects'

function ProjectPreview({id}) {
    const project = projects.find((project) => project.id === id)

    return (
        <>
            <div className="project-preview text-start" >
                <img className="project-image" src={project.image} alt={project.title} />
                <div className='p-6'>
                    <h1 className="text-lg mb-2">{project.title}</h1>
                    <p className="text-sm opacity-80">{project.shortDescription}</p>
                    <div className="project-tags flex gap-2 mt-3 text-sm flex-wrap">
                        {project.tags.map((tag) => {
                            return (
                                <p key={tag}>{tag}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPreview