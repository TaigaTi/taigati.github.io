import designs from "../data/designs"

function DesignDetails() {
    const id = parseInt(window.location.href.split("/").pop())
    const design = designs.find((design) => design.id === id)

    return (
        <div className="design-details flex flex-col items-center px-5 md:px-8 md:px-10 min-h-[80vh]">
            <div className="flex flex-col items-center p-5 md:p-8 md:px-10 rounded-xl min-w-[90%]">
                <h1 className="text-4xl">{design.title}</h1>

                <div className="px-3 flex flex-col items-center">
                    <p className="text-center leading-relaxed tracking">{design.longDescription}</p>
                </div>
    
                <img src={design.headerImage} alt={design.title} width={800} className="rounded-xl mt-5" />

                <div className="design-tags flex gap-2 text-sm flex-wrap  mt-5 mb-2">
                    {design.tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DesignDetails
