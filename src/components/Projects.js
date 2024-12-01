import ProjectPreview from "./ProjectPreview";
import '../styles/Projects.css'
import projects from '../data/projects'

function Projects() {
    return (
        <div className="projects flex flex-col items-center sm:p-10 min-h-[90vh]">
            <h1 className="text-3xl md:text-4xl pt-10">Projects</h1>

            {/* <div className="px-10 w-full flex justify-center">
                <div className="search flex flex-col md:flex-row items-center gap-4 p-8 w-1/2">
                    <input className="search-input" placeholder="Search Projects" />
                </div>
            </div> */}

            <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 pt-5">
                {projects.map((project) => {
                    return (
                        <ProjectPreview key={project.id} id={project.id} />
                    )
                })}
            </div>


        </div>
    );
}

export default Projects