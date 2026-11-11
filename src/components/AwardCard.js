import { useState } from 'react'
import { Dialog } from '@mui/material'
import '../styles/AwardCard.css'
import awards from '../data/awards'

function AwardCard({ id }) {
    const [open, setOpen] = useState(false)
    const award = awards.find(award => award.id === id)
    const isCertificate = award.type === "certificate"

    const content = (
        <>
            {isCertificate
                ? <img loading="lazy" src="assets/certificate.png" alt="" className='w-20 h-20' />
                : <img loading="lazy" src="assets/award.png" alt="" className='w-20 h-20' />}
            <div className="award-info text-center md:text-start w-full">
                <h1 className="lg:text-lg">{award.title}</h1>
                <h2 className="opacity-60">{award.issuer}</h2>
                {award.issued && <p className="opacity-60 text-sm">Issued: {award.issued}</p>}
                {(award.image || award.url) && (
                    <p className="award-action text-sm mt-2">
                        {award.image ? 'View certificate' : 'Verify'}
                        <i className={`fa-solid ${award.image ? 'fa-expand' : 'fa-arrow-up-right-from-square'} ml-2`} aria-hidden="true"></i>
                    </p>
                )}
            </div>
        </>
    )

    const cardClass = "award-card flex flex-col md:flex-row items-center p-6 gap-4 text-start"

    if (award.image) {
        return (
            <>
                <button type="button" className={`${cardClass} award-card-clickable w-full`} onClick={() => setOpen(true)}>
                    {content}
                </button>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    maxWidth="md"
                    fullWidth
                    aria-labelledby={`award-dialog-${award.id}`}
                    PaperProps={{ className: 'award-dialog' }}
                >
                    <div className="flex justify-between items-start gap-4 p-5 pb-3">
                        <div className="text-start">
                            <h2 id={`award-dialog-${award.id}`} className="text-lg">{award.title}</h2>
                            <p className="text-sm opacity-60">{award.issuer}{award.issued && ` · ${award.issued}`}</p>
                        </div>
                        <button type="button" className="award-dialog-close" onClick={() => setOpen(false)} aria-label="Close">
                            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="px-5">
                        <img src={award.image} alt={`${award.title} certificate`} className="w-full rounded-lg" />
                    </div>
                    {award.url && (
                        <div className="flex justify-end p-5">
                            <a href={award.url} target="_blank" rel="noopener noreferrer" className="award-verify-button">
                                Verify<i className="fa-solid fa-arrow-up-right-from-square ml-2" aria-hidden="true"></i>
                            </a>
                        </div>
                    )}
                </Dialog>
            </>
        )
    }

    if (award.url) {
        return (
            <a href={award.url} target="_blank" rel="noopener noreferrer" className={`${cardClass} award-card-clickable`}>
                {content}
            </a>
        )
    }

    return <div className={cardClass}>{content}</div>
}

export default AwardCard
