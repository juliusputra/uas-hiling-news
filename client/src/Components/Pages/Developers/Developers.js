import { useEffect, useState } from "react";
import $ from "jquery";

import styles from './Developers.module.css'

import jsonApi from '../../../API/jsonApi'
import DevelopersList from "./DevelopersList";

export default function Developers() {
	useEffect(() => {
		$('body').removeClass().addClass(styles.background)
	})

	const [developers, setDevelopers] = useState(null)

	useEffect(() => {
		(async () => {
			const response = await jsonApi.get('/developers')
			setDevelopers(response.data)
		})()
	}, [])

	return (
		developers && <DevelopersList developers={developers} />
	);
}