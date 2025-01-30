import designs from "../data/designs"
import "../styles/DesignDetails.css"

function DesignDetails() {
    const id = parseInt(window.location.href.split("/").pop())
    const design = designs.find((design) => design.id === id)

    return (
        <>
            <div className="design-details flex flex-col items-center p-5 md:p-8 md:px-10 min-h-[80vh]">
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                    <div className="design-header-container rounded-xl flex items-center justify-center col-span-3 order-1 sm:order-2">
                        <img src={design.headerImage} alt={design.title} width={"100%"} />
                    </div>
                    <div className="design-info-container container p-7 rounded-xl min-h-[80vh] col-span-1 order-2 sm:order-1 mt-5 md:mt-0">
                        <div className="mt-5 p-3">
                            <h1 className="text-3xl">{design.title}</h1>
                            <div className="px-3">
                                <p className="text-start text-sm leading-relaxed opacity-90">{design.longDescription.map((p) => <p><br />{p}</p>)}</p>
                            </div>
                        </div>
                        <div className="w-full rounded-xl mt-5 mb-2">
                            <div className="design-tags flex gap-2 text-sm flex-wrap">
                                {design.tags.map((tag) => {
                                    return (
                                        <p key={tag}>{tag}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignDetails