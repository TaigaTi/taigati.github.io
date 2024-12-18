import designs from "../data/designs"

function DesignDetails() {
    const id = parseInt(window.location.href.split("/").pop())
    const design = designs.find((design) => design.id === id)

    return (
        <>
            <div className="p-10 mt-5">
                <h1 className="text-3xl">{design.title}</h1>
                <div className="de"
            </div>
        </>
    )
}

export default DesignDetails