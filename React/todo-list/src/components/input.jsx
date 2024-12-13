import React from 'react'

const InputComponents = ({ lineItem, setLineItem, items,setItem }) => {

	const addItem = (name) => {
		// Dynamic id adding end of the object
		const id = items.length ? items[items.length - 1].id + 1 : 1
		const lineObject = {
			id: id,
			checked: false,
			name: name,
		}
		const listItems = [...items, lineObject]
		localStorage.setItem("todo_list", JSON.stringify(listItems))
		setItem(listItems)
	}

	const onSubmitHandle = (event) => {
		event.preventDefault()
		addItem(lineItem)
		setLineItem('')
	}

	return (
		<form onSubmit={onSubmitHandle}>
			<input type="text" placeholder='Text' id="items" required='required' tabIndex={0} onChange={(event) => setLineItem(event.target.value)} value={lineItem} />
			<button id="add" type='submit'>Add</button>
		</form>
	)
}

export default InputComponents