export default function BlogList({ blogs }) {
	return (
		<div className="d-flex flex-column gap-3">
			{blogs.map(obj => (
				<div className="card bg-dark text-white" key={obj.id}>
					<div className="card-body">
						<h5 className="card-title">{obj.title}</h5>
						<p className="card-title position-absolute bottom-0 end-0 px-2 py-2">{obj.date}</p>
						<p className="card-text">{obj.content}</p>
						<a className="link-light" href="#">Read more</a>
					</div>
				</div>
			))}
		</div>
	)
}