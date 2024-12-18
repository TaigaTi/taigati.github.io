import designs from "../data/designs"

const id = parseInt(window.location.href.split("/").pop())
const design = designs.find((design) => design.id === id)

function DesignDetails() {
    return (
        <>
            <div className="">
                <h1>{design.id}</h1>
            </div>
        </>
    )
}

export default DesignDetails