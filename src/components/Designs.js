import designs from "../data/designs"
import DesignCard from "./DesignCard.js"

function Designs() {
    return (
        <div className="projects flex flex-col items-center pb-10 sm:p-10 min-h-[100vh]">
            <div className="pb-2">
                <h1 className="text-3xl md:text-5xl pt-10">Bringing Visions To Life</h1>
                <p className="py-3 opacity-70">Explore my work in graphic design, mobile design, web design, branding, and more.</p>
            </div>

            <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 pt-6">
                {designs.map((design) => {
                    return (
                        <DesignCard key={design.id} id={design.id} />
                    )
                })}
            </div>


        </div>
    )
}

export default Designs