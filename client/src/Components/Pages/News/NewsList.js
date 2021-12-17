import { Link } from "react-router-dom";

export default function NewsList({ news }) {
	const DISPLAY_CONTENT_LIMIT = 80

	function truncate(str, n){
		return (str.length > n) ? str.substr(0, n-1) + ' . . .' : str
	}

	return (
		<div className="d-flex flex-column gap-3">
			{news.map(obj => (
				<div className="card text-white bg-dark" key={obj.id}>
					<div className="card-body">
						<h5 className="card-title">{obj.title}</h5>
						<p className="card-title position-absolute bottom-0 end-0 px-2 py-2">{obj.date}</p>
						<p className="card-text">{truncate(obj.content, DISPLAY_CONTENT_LIMIT)}</p>
						{obj.content.length > DISPLAY_CONTENT_LIMIT && <Link className="btn btn-dark" to={`/news/${obj.slug}`}>Read more</Link>}
					</div>
				</div>
			))}
		</div>
	)
}