import '../styles/AwardCard.css'

function AwardCard({type}) {
    return (
        <div className="award-card flex flex-col md:flex-row items-center p-6 gap-4 text-start">
           { type === "award" && <img src="assets/award.png" alt="Award" className='w-20 h-20'/>}
           { type === "certificate" && <img src="assets/certificate.png" alt="Award" className='w-20 h-20'/>}
            <div className="award-info">
                <h1 className="text-lg">Award Name</h1>
                <h1 className="opacity-60">Issuer Name</h1>
                <p className="opacity-60 text-sm">Issued: Jan 2022</p>
            </div>
        </div>
    )
}

export default AwardCard