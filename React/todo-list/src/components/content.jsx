import React from 'react'

const Content = ({ items,setItem }) => {

    // Checkbox Click
    const handleChange = (id) => {
        const listItems = items.map(item => (item.id === id ? { ...item, checked: !item.checked } : item));
        setItem(listItems);
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    // delete
    const handleClick = (id) => {
        const deleteitem = items.filter(item => item.id !== id)
        setItem(deleteitem);
        localStorage.setItem("todo_list", JSON.stringify(deleteitem))
    }

    return (
        <ul >
            {
                items.map(item => (
                    <li onDoubleClick={() => handleChange(item.id)} key={item.id} >
                        <input type="checkbox" checked={item.checked} onChange={() => handleChange(item.id)} ></input>
                        <label style={item.checked ? { textDecoration: 'line-through' } : null}>{item.name}</label>
                        <button id={item.id} onClick={() => handleClick(item.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default Content