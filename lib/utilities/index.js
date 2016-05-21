
export function prettyDate(date) {
    const pDate = new Date(date)
    const day = pDate.getDay()
    const month = pDate.getMonth() + 1
    const year = pDate.getFullYear()

    return `${month}/${day}/${year}`
}
