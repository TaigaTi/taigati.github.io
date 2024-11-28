import ProjectPreview from "./ProjectPreview";
import '../styles/Projects.css'

function Projects() {
    return (
        <div className="projects flex flex-col items-center pt-10 min-h-[90vh]">
            <h1 className="text-3xl md:text-4xl mb-1 pt-10">Projects</h1>

            <div className="search flex flex-col md:flex-row items-center gap-4 p-8">
              <input className="search-input" placeholder="Search Projects"/>
            </div>

            <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
            </div>


        </div>
    );
}

export default Projects