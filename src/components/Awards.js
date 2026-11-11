import AwardCard from './AwardCard'
import awards from '../data/awards'

function AwardSection({ id, title, type }) {
    return (
        <section id={id} className="w-full flex flex-col items-center scroll-mt-6 mb-10">
            <h2 className="text-2xl md:text-3xl">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 w-full">
                {awards
                    .filter((award) => award.type === type)
                    .map((award) => (
                        <AwardCard key={award.id} id={award.id} />
                    ))}
            </div>
        </section>
    )
}

function Awards() {
    return (
        <div className="flex flex-col items-center px-6 md:px-16 pb-16 min-h-[100vh]">
            <h1 className="text-3xl md:text-4xl pt-10 pb-10">Awards & Certificates</h1>
            <AwardSection id="awards" title="Awards" type="award" />
            <AwardSection id="certificates" title="Certificates" type="certificate" />
        </div>
    )
}

export default Awards
