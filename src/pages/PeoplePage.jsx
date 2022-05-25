// API
import SW_API from "../services/SWAPI"

// Imported react
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"

// Helper
import getIdFromUrl from '../helper/index'

import Loading from '../components/Loading'


const PeoplePage = () => {
    const [character, setCharacter] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    // Get character from API
	const fetchCharacter = async (id) => {
        // get data
		const data = await SW_API.getPeople(id)

        // set data results to character
		setCharacter(data)

        // Set loading to true for the load to be visible.
        setLoading(true)
	}

    // Get people from api when component is first mounted
	useEffect(() => {
		fetchCharacter(id)
	}, [id])

    if(!loading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <ListGroup className="card border-1 rounded  mb-5 p-0">
                <div className="card-header p-3">
                    <h4 className="m-0">{character.name}</h4>
                </div>

                <div className="card-body">
                    <h5>Attributes</h5>

                    <p>
                        <strong>Gender: </strong>
                        {character.gender}
                    </p>

                    <p>
                        <strong>Birth year: </strong>
                        {character.birth_year}
                    </p>

                    <p>
                        <strong>Height: </strong>
                        {character.height}cm
                    </p>

                    <p>
                        <strong>Mass: </strong>
                        {character.mass}kg
                    </p>

                    <p>
                        <strong>Hair color: </strong>
                        {character.hair_color}
                    </p>

                    <p>
                        <strong>Skin color: </strong>
                        {character.skin_color}
                    </p>

                    <p>
                        <strong>Eye color: </strong>
                        {character.eye_color}
                    </p>

                    <br />

                    <ListGroup>
                        <h3>Links</h3>
                        <h4>Films</h4>
                        
                        {character.films.length > 0 && (
                            character.films.map((film, index) => 
                            <Link 
                                key={index} 
                                to={`/films/${getIdFromUrl(film)}`} 
                                className="list-group-item col-md-4" 
                            >
                                Film {getIdFromUrl(film)}
                            </Link>
                        ))}
                    </ListGroup>
                </div>
                <div className="buttons d-flex justify-content-between p-3">
                    <button
                            type='button' 
                            onClick={() => navigate(-1)} 
                            className='btn btn-secondary' 
                        >
                            Back
                    </button>
                </div>
            </ListGroup>
        </>
    )
}

export default PeoplePage