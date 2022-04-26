import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

// Imported components
import Navigation from './components/Navigation'

// Imported pages
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App