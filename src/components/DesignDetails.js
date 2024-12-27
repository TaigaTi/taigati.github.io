import designs from "../data/designs"
import "../styles/DesignDetails.css"

function DesignDetails() {
    const id = parseInt(window.location.href.split("/").pop())
    const design = designs.find((design) => design.id === id)

    return (
        <>
            <div className="design-details flex flex-col items-center p-10 pt-5">
                <div className="p-3">
                    <h1 className="text-4xl">{design.title}</h1>
                </div>
                
                <div className="design-header-container h-3/4 p-8 rounded-xl flex items-center justify-center">
                    <img src={design.headerImage} alt={design.title} width={"70%"} />
                </div>
                <div className="design-tags flex gap-2 mt-3 text-sm flex-wrap">
                    {design.tags.map((tag) => {
                        return (
                            <p key={tag}>{tag}</p>
                        )
                    })}
                </div>
                <p>{design.longDescription}</p>
            </div>
        </>
    )
}

export default DesignDetails