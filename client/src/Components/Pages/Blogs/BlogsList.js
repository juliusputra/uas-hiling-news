import { Link } from "react-router-dom"

export default function BlogList({ blogs }) {
	const DISPLAY_CONTENT_LIMIT = 80

	function truncate(str, n){
		return (str.length > n) ? str.substr(0, n-1) + ' . . .' : str
	}

	return (
		<div className="d-flex flex-column gap-3">
			{blogs.map(obj => (
				<div className="card bg-dark text-white" key={obj.id}>
					<div className="card-body">
						<h5 className="card-title">{obj.title}</h5>
						<p className="card-title position-absolute bottom-0 end-0 px-2 py-2">{obj.date}</p>
						<p className="card-text">{obj.content}</p>
						{obj.content.length > DISPLAY_CONTENT_LIMIT && <Link className="btn btn-dark" to={`/blogs/${obj.slug}`}>Read more</Link>}
					</div>
				</div>
			))}
		</div>
	)
}