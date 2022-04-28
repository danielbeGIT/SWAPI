// API
import SW_API from "../services/SWAPI"

// Imported react
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"
import Image from 'react-bootstrap/Image'

// Helper
// import getIdFromUrl from '../helper/index'

// Image
import LoadingYoda from '../assets/images/yoda-force.gif'

const PeoplesPage = () => {
    const [people, setPeople] = useState([])
	const [loading, setLoading] = useState(false)

	// Get people from API
	const fetchPeople = async () => {
        // get data
		const data = await SW_API.getPeoples()

        // set data results to people
		setPeople(data.results)

        // Set loading to true for the load to be visible.
		setLoading(true)
	}

	// Get people from api when component is first mounted
	useEffect(() => {
		fetchPeople()
	}, [])

	if(!loading) {
        return (
            <>
                <h2 className="loading">Channeling the force..</h2>
                <br />
                <Image src={LoadingYoda} fluid />
            </>
          
        )
    }

    return (
		<>
			<h1>People</h1>
			
			{people.length > 0 && (
                <ListGroup className="d-flex flex-wrap justify-content-center">
                    {people.map((people, index) => (
                        <ListGroup.Item 
                            key={index} 
                            className="card border-1 rounded mb-5 p-0 col-md-5 col-sm-3 col-xs-12"
                        >
                            <div className="card-header p-3">
                                <strong>{people.name}</strong>
                            </div>

                            <div className="card-body">
                                <p className="card-header bg-white bold">
                                    <strong>Gender: </strong>
                                    {people.gender}
                                </p>
                                <p className="card-header bg-white bold">
                                    <strong>Born: </strong>
                                    {people.birth_year}
                                </p>
                                <p className="card-header bg-white bold mb-3">
                                    <strong>In </strong>
                                    {people.films.length} films
                                </p>
                                
                                <Link 
                                    to={`/people/${index + 1}`} 
                                    type="button" 
                                    className="btn btn-primary" 
                                >
                                    Read More
                                </Link>

                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            <div className="buttons d-flex justify-content-between">
                <button 
                type="button" 
                className="btn btn-primary"
                >
                    Previous Page
                </button>
                
                <button 
                type="button" 
                className="btn btn-primary"
                >
                    Next Page
                </button>
            </div>
		</>
	)
}

export default PeoplesPage