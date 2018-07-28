import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	const {data, remove} = props;
	const todos = data.map(t => <Todo key={t.id} data={t} remove={remove} />); 

	return (
		<div className="TodoList">
			{todos}
		</div>
	)
}

export default TodoList;