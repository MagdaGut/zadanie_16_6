import React from 'react';

const TodoList = props => {
	const {data, remove} = props;

	return (
		<div className="todo">
			<span>{data.text}</span>
			<button onClick={() => remove(data.id)}>Remove</button>
		</div>
	)
}

export default TodoList;