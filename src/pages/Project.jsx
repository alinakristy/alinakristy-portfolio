import { useParams } from 'react-router-dom'

function Project() {
    const {id} = useParams()
    return <div>ABC: {id}</div>
}

export default Project;