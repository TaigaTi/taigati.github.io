const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

// "Nov 2018", "June 2025", "November 2019" -> sortable number; undated -> null
export function dateValue(issued) {
    if (!issued) return null
    const [month, year] = issued.trim().split(/\s+/)
    const m = MONTHS.indexOf((month || '').slice(0, 3).toLowerCase())
    const y = parseInt(year, 10)
    if (Number.isNaN(y)) return null
    return y * 12 + (m === -1 ? 0 : m)
}

// Undated items always sort last; ties fall back to title.
export function byDate(direction) {
    return (a, b) => {
        const da = dateValue(a.issued)
        const db = dateValue(b.issued)
        if (da === null && db === null) return a.title.localeCompare(b.title)
        if (da === null) return 1
        if (db === null) return -1
        return direction * (da - db) || a.title.localeCompare(b.title)
    }
}

export const newestFirst = byDate(-1)
