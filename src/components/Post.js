import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
	state = {
			country: null
		}
	componentDidMount(){
		let code = this.props.match.params.country_code

		axios.get('https://countriesnode.herokuapp.com/v1/countries/' + code)
			.then(res => {
				this.setState({
					country: res.data
				})
				console.log(this.state)
			})
}
	render() {
		const country = this.state.country ? (
			<div className="country">
				<h4 className='center'>{this.state.country.name}</h4>
				<p>Currency: {this.state.country.currency}</p>
				<p>Area code (phone): {this.state.country.phone}</p>
			</div>
			) : (
			<div className="center">Loading Post...</div>
			)
		return (
			<div className='container'>
				{ country }
			</div>
			)
	}

}

export default Post
