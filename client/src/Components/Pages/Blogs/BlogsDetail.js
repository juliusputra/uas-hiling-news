import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import jsonApi from '../../../API/jsonApi'

export default function BlogsDetail() {
	const { slug } = useParams()

	const [blogsObj, setBlogsObj] = useState(null)

	useEffect(() => {
		(async () => {
			const response = await jsonApi.get(`/blogs?slug=${slug}`)
			setBlogsObj(response.data[0])
		})()
	}, [])

	return blogsObj ? (
		<div className="card text-white bg-dark">
			<div className="card-body">
				<h5 className="card-title">{blogsObj.title}</h5>
				<p className="card-title position-absolute bottom-0 end-0 px-2 py-2">{blogsObj.date}</p>
				<p className="card-text">{blogsObj.content}</p>
			</div>
		</div>
	) : (
		<div className="card text-white bg-dark">
			<div className="card-body">
				<h5>Blog tidak ditemukan</h5>
			</div>
		</div>
	)
}