export default function DevelopersList({ developers }) {
	return (
		<div className="card-group">
			{developers.map(obj => (
				<div className="card bg-dark text-white mx-3">
					<img src={obj.image} height={250} />
					<div className="card-body">
						<h5 className="card-title text-center">{obj.name}</h5>
						<h6 className="card-title text-center">{obj.nim}</h6>
						<p className="card-text text-center">{obj.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}