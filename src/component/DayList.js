import data from '../db/data.json'
import { Link } from 'react-router-dom'
export default function DayList() {
    console.log('test')
    return (
        <ul className="list_day">
            {data.days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    )
}