// API
import SW_API from "../services/SWAPI"

// Imported react
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"
import Button from 'react-bootstrap/Button'

import Loading from '../components/Loading'

const FilmsPage = () => {
	const [films, setFilms] = useState([])
	const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

	// Get films from api when component is first mounted
	useEffect(() => {
		// Get films from api
		const getFilms = async () => {
			// Set loading to true for the load to be visible.
			setLoading(true)

			// get data
			const data = await SW_API.getFilms()

			// set data results to people
			setFilms(data)

			// Set loading to false after getting data.
            setLoading(false)
		}

		getFilms()
	}, [page])

	return (
		<>
			{loading && <Loading />}

			<h1>Films</h1>

			{!loading && (
				<div className="row d-flex justify-content-between">
					{films.results?.map((film, index) => (
						<ListGroup.Item
							key={index} 
							className="card border-1 rounded m-3 p-0 col-lg-3 col-md-5 col-sm-12"
						>
							<div className="card-header p-3">
								<strong>{film.title}</strong>
							</div>

							<div className="card-body">
								<p className="card-header bg-white bold">
									<strong>Episode: </strong>
									{film.episode_id}
								</p>
								<p className="card-header bg-white bold">
									<strong>Released: </strong>
									{film.release_date}
								</p>
								<p className="card-header bg-white bold mb-3">
									{film.characters.length} 
									<strong> characters</strong>
								</p>

								<Link 
									type="button" 
									to={`/films/${index + 1}`} 
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
					disabled={page === 1}
                    variant="button" 
                    className="btn btn-primary border-secondary"
                    onClick={() => setPage(prevValue => prevValue - 1)}
				>
					Previous Page
				</Button>

				{page} / 1

				<Button
					disabled={!films.next}
                    variant="button" 
                    className="btn btn-primary border-secondary"
                    onClick={() => setPage(prevValue => prevValue + 1)}
				>
					Next Page
				</Button>
			</div>
		</>
	)
}

export default FilmsPage