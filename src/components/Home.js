import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component {
	state = {
		countries: []
	}
	componentDidMount(){
		axios.get('https://countriesnode.herokuapp.com/v1/countries/')
			.then(res => {
				console.log(res)
				this.setState({
					countries: res.data
				})
			})
	}

	render(){
		const { countries } = this.state
		const countryList = countries.length ? (
			countries.map(country => {
				return (
						<div className="country card" key={country.code}>
							{/* <img src={Pokeball} alt="A Pokeball"/> */}
							<div className="card-content">
								<Link to={'/' + country.code}>
								<span className="card-title red-text">
									Country Name: {country.name}
								</span>
								<span className="card-title red-text">
									Languages: {country.native }(Native) {country.languages}(Other)
								</span>
								<span className="card-title red-text">
									Continent: {country.continent}
								</span>

								</Link>
								<p>{country.body}</p>
							</div>
						</div>
					)
			})
			) : (
				<div className="center">
					Loading Countries
				</div>
			)
		return (
			<div className='container home'>
				<h4 className="center">Home</h4>
				{countryList}
			</div>
			)
	}
}

export default Home