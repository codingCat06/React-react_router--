import data from '../db/data.json'
import { useParams } from 'react-router'

export default function Day() {
    const day = useParams().day
    const words_list = data.words.filter(word => word.day == day)
    console.log(day)
    return (
        <table>
            <tbody>
                {words_list.map(word => (
                    <tr>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}