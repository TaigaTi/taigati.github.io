import '../styles/AwardCard.css'
import awards from '../data/awards'

function AwardCard({id}) {
    console.log(id)
     const award = awards.find(award => award.id === id)
     const type = award.type

    return (
        <div className="award-card flex flex-col md:flex-row items-center p-6 gap-4 text-start">
           { type === "award" && <img src="assets/award.png" alt="Award" className='w-20 h-20'/>}
           { type === "certificate" && <img src="assets/certificate.png" alt="Award" className='w-20 h-20'/>}
            <div className="award-info text-center md:text-start">
                <h1 className="lg:text-lg">{award.title}</h1>
                <h2 className="opacity-60">{award.issuer}</h2>
                <p className="opacity-60 text-sm">Issued: {award.issued}</p>
            </div>
        </div>
    )
}

export default AwardCard