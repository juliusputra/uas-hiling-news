import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import jsonApi from '../../../API/jsonApi'

export default function NewsDetail() {
	const { slug } = useParams()

	const [newsObj, setNewsObj] = useState(null)

	useEffect(() => {
		(async () => {
			const response = await jsonApi.get(`/news?slug=${slug}`)
			setNewsObj(response.data[0])
		})()
	}, [])

	return newsObj ? (
		<div className="card text-white bg-dark">
			<div className="card-body">
				<h5 className="card-title">{newsObj.title}</h5>
				<p className="card-title position-absolute bottom-0 end-0 px-2 py-2">{newsObj.date}</p>
				<p className="card-text">{newsObj.content}</p>
			</div>
		</div>
	) : (
		<div className="card text-white bg-dark">
			<div className="card-body">
				<h5>Berita tidak ditemukan</h5>
			</div>
		</div>
	)
}