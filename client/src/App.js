import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import Navbar from './Components/Partials/Navbar/Navbar';
import News from './Components/Pages/News/News';
import NewsDetail from './Components/Pages/News/NewsDetail';
import Blogs from './Components/Pages/Blogs/Blogs';
import Developers from './Components/Pages/Developers/Developers';
import Login from './Components/Pages/Login/Login';
import Error from './Components/Pages/Error/Error';
import BlogsDetail from './Components/Pages/Blogs/BlogsDetail';

export default function App() {
	return (
		<Router>
			<Navbar />
			
			<div className='container py-5'>
				<Routes>
					<Route path="/" element={<News />} />
					<Route path="/news" element={<News />} />
					<Route path="/news/:slug" element={<NewsDetail />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/blogs/:slug" element={<BlogsDetail />} />
					<Route path="/developers" element={<Developers />} />

					<Route path="/login" element={<Login />} />

					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</Router>
	);
}