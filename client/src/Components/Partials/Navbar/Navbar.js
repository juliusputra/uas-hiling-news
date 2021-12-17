import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import $ from "jquery";

export default function Navbar() {
	useEffect(() => {
		$(window).on('click', function(event) {
			let $clickOver = $(event.target)
		
			if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && $clickOver.closest('.navbar').length === 0) {
				$('button[aria-expanded="true"]').click();
			}
		})
	})

	const logoutRefresh = (e) => {
		e.preventDefault()

		localStorage.removeItem('acc_logged_in')
		localStorage.removeItem('acc_username')

		window.location.href = '/'
	}

	const location = useLocation()

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
			<div className="container">
				<Link className="navbar-brand" to="/">Hiling News</Link>
				
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className={`nav-link ${location.pathname == '/' || location.pathname == '/news' ? 'active' : ''}`} to="/news">News</Link>
						</li>

						<li className="nav-item">
							<Link className={`nav-link ${location.pathname == '/blogs' ? 'active' : ''}`} to="/blogs">Blogs</Link>
						</li>

						<li className="nav-item">
							<Link className={`nav-link ${location.pathname == '/developers' ? 'active' : ''}`} to="/developers">Developers</Link>
						</li>
					</ul>

					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						{localStorage.getItem('acc_logged_in') == 'true' ? (
							<li className="nav-item">
								<form onSubmit={logoutRefresh}>
									<button type="submit" className="nav-link btn btn-dark">Logout</button>
								</form>
							</li>
						) : (
							<li className="nav-item">
								<Link className={`nav-link btn btn-dark ${location.pathname == '/login' ? 'active' : ''}`} to="/login">Login</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	)
}