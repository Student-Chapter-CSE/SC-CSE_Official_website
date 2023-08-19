const DateElement = ({ date }) => {
    return (
        <span>{dateToText(date)}</span>
    )
}


const nth = (d) => {
    const dString = String(d)
    const last = +dString.slice(-2)
    if (last > 3 && last < 21) return 'th'
    switch (last % 10) {
        case 1: return "st"
        case 2: return "nd"
        case 3: return "rd"
        default: return "th"
    }
}

const dateToText = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return `${date.getDate()}${nth(date.getDate())}  ${months[date.getMonth()] - 1}, ${date.getFullYear()}`
}

export default DateElement