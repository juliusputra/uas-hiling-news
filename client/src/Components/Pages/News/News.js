import { useEffect, useState } from "react"
import $ from "jquery";

import styles from './News.module.css'

import jsonApi from '../../../API/jsonApi'
import NewsList from "./NewsList";

export default function News() {
	useEffect(() => {
		$('body').removeClass().addClass(styles.background)
	})

	const [news, setNews] = useState(null)

	useEffect(() => {
		(async () => {
			const response = await jsonApi.get('/news')
			setNews(response.data)
		})()
	}, [])

	return (
		news && <NewsList news={news} />
	)
}