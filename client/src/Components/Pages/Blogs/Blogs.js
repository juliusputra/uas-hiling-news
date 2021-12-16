import { useEffect, useState } from "react"
import $ from "jquery";

import styles from './Blogs.module.css'

import jsonApi from '../../../API/jsonApi'
import BlogsList from "./BlogsList";
import Login from "../Login/Login";

export default function Blogs() {
	useEffect(() => {
		$('body').removeClass().addClass(styles.background)
	})

	const [blogs, setBlogs] = useState(null)

	useEffect(() => {
		(async () => {
			const response = await jsonApi.get('/blogs')
			setBlogs(response.data)
		})()
	}, [])

	return localStorage.getItem('acc_logged_in') == 'true' ?
		(blogs && <BlogsList blogs={blogs} />) :
		<Login />
}