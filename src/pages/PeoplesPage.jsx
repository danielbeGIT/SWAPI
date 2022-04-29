// API
import SW_API from "../services/SWAPI"

// Imported react
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

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
                <div className="row d-flex justify-content-between">
                    {people.map((people, index) => (
                        <ListGroup.Item 
                            key={index} 
                            className="card border-1 rounded m-3 p-0 col-lg-3 col-md-5 col-sm-12"
                        >
                            <div className="card-header p-3">
                                <strong>{people.name}</strong>
                            </div>

                            <div className="card-body">
                                <p className="card-header bg-white">
                                    <strong>Gender: </strong>
                                    {people.gender}
                                </p>
                                <p className="card-header bg-white">
                                    <strong>Born: </strong>
                                    {people.birth_year}
                                </p>
                                <p className="card-header bg-white mb-3">
                                    <strong>In </strong>
                                    {people.films.length} films
                                </p>
                                
                                <Link 
                                    type="button" 
                                    to={`/people/${index + 1}`} 
                                    className="btn btn-primary" 
                                >
                                    Read More
                                </Link>

                            </div>
                        </ListGroup.Item>
                    ))}
                </div>
            )}
            <div className="d-flex justify-content-between mt-4">
                <Button
                    variant="primary"
                >
                    Previous Page
                </Button>

                (Amount of pages)

                <Button
                    variant="primary"
                >
                    Next Page
                </Button>
            </div>
		</>
	)
}

export default PeoplesPage