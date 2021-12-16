// import jsonApi from '../../../API/jsonApi'
// import { v4 as uuid } from 'uuid'

import { useState } from "react"

export default function Login() {
	const [cred, setCred] = useState({
		username: '',
		password: ''
	})

	// const loginCheckHandler = (cred) => {
	// 	const response = await jsonApi.post('/login', {
	// 		id: uuid(),
	// 		...cred
	// 	})
	// }
	
	const loginCheck = (e) => {
		e.preventDefault()

		if (!cred.username || !cred.password) {
			alert('Mohon login terlebih dahulu..')
			return
		}

		// loginCheckHandler(state)

		setCred({
			username: '',
			password: ''
		})

		localStorage.setItem('acc_logged_in', true)
		localStorage.setItem('acc_username', cred.username)

		window.location.href = '/'
	}

	return (
		<form onSubmit={loginCheck} className="col-12 col-sm-9 col-lg-6 mx-auto">
			<div className="form-floating mb-3">
				<input type="text" name="username" className="form-control" placeholder=" " value={cred.username} onChange={e => setCred({ username: e.target.value, password: cred.password })} autoFocus />
				<label>Username</label>
			</div>

			<div className="form-floating mb-3">
				<input type="password" name="password" className="form-control" placeholder=" " value={cred.password} onChange={e => setCred({ username: cred.username, password: e.target.value })} />
				<label>Password</label>
			</div>

			<button type="submit" className="btn btn-primary col-12 mb-5">Masuk</button>
		</form>
	)
}