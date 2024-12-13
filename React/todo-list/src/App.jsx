import { useState } from 'react';
import SearchComponents from './components/search';
import './App.css';
import InputComponents from './components/input';
import Content from './components/content';
import { LuListTodo } from "react-icons/lu";


function App() {

	const values = JSON.parse(localStorage.getItem('todo_list'));

	const [items, setItem] = useState(values ? values : []);

	const [lineItem, setLineItem] = useState('');

	const [searchitem, setSearchItem] = useState('');

	return (
		<div className='App'>
			
			<h1 className='todo'>TODO-LIST <LuListTodo size={30} color="194e80"/> </h1>

			<InputComponents lineItem={lineItem} setLineItem={setLineItem} items={items} setItem={setItem}/>

			<SearchComponents searchitem={searchitem} setSearchItem={setSearchItem} />

			{
				items.length
					?
					<Content items={ items.filter(item => (item.name).toLowerCase().includes(searchitem.toLowerCase()) )} setItem={setItem} />
					:
					<h3>No data available</h3>
			}

		</div>
	);
}

export default App;
