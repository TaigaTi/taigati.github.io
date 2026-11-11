import { useMemo, useState } from 'react'
import AwardCard from './AwardCard'
import awards from '../data/awards'
import '../styles/Awards.css'

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

// "Nov 2018", "June 2025", "November 2019" -> sortable number; undated -> null
function dateValue(issued) {
    if (!issued) return null
    const [month, year] = issued.trim().split(/\s+/)
    const m = MONTHS.indexOf((month || '').slice(0, 3).toLowerCase())
    const y = parseInt(year, 10)
    if (Number.isNaN(y)) return null
    return y * 12 + (m === -1 ? 0 : m)
}

// Undated items always sort last; ties fall back to title.
function byDate(direction) {
    return (a, b) => {
        const da = dateValue(a.issued)
        const db = dateValue(b.issued)
        if (da === null && db === null) return a.title.localeCompare(b.title)
        if (da === null) return 1
        if (db === null) return -1
        return direction * (da - db) || a.title.localeCompare(b.title)
    }
}

const SORTS = {
    newest: { label: 'Newest first', compare: byDate(-1) },
    oldest: { label: 'Oldest first', compare: byDate(1) },
    az: { label: 'Title A–Z', compare: (a, b) => a.title.localeCompare(b.title) },
}

const issuers = [...new Set(awards.map((award) => award.issuer))].sort((a, b) => a.localeCompare(b))

function AwardSection({ id, title, items }) {
    if (items.length === 0) return null
    return (
        <section id={id} className="w-full flex flex-col items-center scroll-mt-6 mb-10">
            <h2 className="text-2xl md:text-3xl">
                {title} <span className="text-base opacity-60">({items.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 w-full">
                {items.map((award) => (
                    <AwardCard key={award.id} id={award.id} />
                ))}
            </div>
        </section>
    )
}

function Awards() {
    const [query, setQuery] = useState('')
    const [type, setType] = useState('all')
    const [issuer, setIssuer] = useState('all')
    const [sort, setSort] = useState('newest')

    const results = useMemo(() => {
        const q = query.trim().toLowerCase()
        return awards
            .filter((award) => type === 'all' || award.type === type)
            .filter((award) => issuer === 'all' || award.issuer === issuer)
            .filter((award) => !q || `${award.title} ${award.issuer} ${award.issued || ''}`.toLowerCase().includes(q))
            .sort(SORTS[sort].compare)
    }, [query, type, issuer, sort])

    const filtersActive = query || type !== 'all' || issuer !== 'all'
    const reset = () => {
        setQuery('')
        setType('all')
        setIssuer('all')
    }

    return (
        <div className="flex flex-col items-center px-6 md:px-16 pb-16 min-h-[100vh]">
            <h1 className="text-3xl md:text-4xl pt-10 pb-8">Awards & Certificates</h1>

            <div className="awards-toolbar w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-3 mb-4">
                <label className="awards-field">
                    <span className="sr-only">Search awards and certificates</span>
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                    <input
                        type="search"
                        placeholder="Search by title or issuer"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </label>
                <label className="awards-field">
                    <span className="sr-only">Type</span>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="all">All types</option>
                        <option value="award">Awards</option>
                        <option value="certificate">Certificates</option>
                    </select>
                </label>
                <label className="awards-field">
                    <span className="sr-only">Issuer</span>
                    <select value={issuer} onChange={(e) => setIssuer(e.target.value)}>
                        <option value="all">All issuers</option>
                        {issuers.map((name) => (
                            <option key={name} value={name}>{name}</option>
                        ))}
                    </select>
                </label>
                <label className="awards-field">
                    <span className="sr-only">Sort</span>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        {Object.entries(SORTS).map(([key, { label }]) => (
                            <option key={key} value={key}>{label}</option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="w-full flex justify-between items-center text-sm opacity-70 mb-8 min-h-[1.5rem]" aria-live="polite">
                <span>{results.length} of {awards.length} shown</span>
                {filtersActive && (
                    <button type="button" className="awards-reset" onClick={reset}>Clear filters</button>
                )}
            </div>

            {results.length === 0 ? (
                <p className="opacity-70 py-16">No awards or certificates match your search.</p>
            ) : (
                <>
                    <AwardSection id="awards" title="Awards" items={results.filter((a) => a.type === 'award')} />
                    <AwardSection id="certificates" title="Certificates" items={results.filter((a) => a.type === 'certificate')} />
                </>
            )}
        </div>
    )
}

export default Awards
