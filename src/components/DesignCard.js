import '../styles/DesignCard.css'
import designs from '../data/designs'

function DesignCard({ id }) {
    const design = designs.find((design) => design.id === id)

    return (
        <>
            <a className="design-card container text-start" href='/#/designs/1' >
                <img className="design-image h-1/2" src={design.cardImage} alt={design.title} />
                <div className='design-info h-1/2 container p-6 pt-4 pb-8 flex flex-col justify-evenly'>
                    <div className="design-text pb-1">
                        <h1 className="text-lg mb-2">{design.title}</h1>
                        <p className="text-sm opacity-80">{design.shortDescription}</p>
                    </div>
                    <div className="design-tags flex gap-2 mt-3 text-sm flex-wrap">
                        {design.tags.map((tag) => {
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

export default DesignCard