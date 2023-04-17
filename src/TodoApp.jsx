import React, { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {
	const [count, setCount] = useState(1);

	// const { data: todos = [], isLoading } = useGetTodosQuery();
	const { data: todo, isLoading } = useGetTodoByIdQuery(count);

	return (
		<>
			<h1>Todos - RTK Query</h1>
			<hr />

			<h4>is loading: {isLoading ? 'true' : 'false'}</h4>

			<pre>{isLoading ? 'loading...' : JSON.stringify(todo)}</pre>

			<button
				onClick={() => setCount(count - 1)}
				disabled={isLoading || todo.id == 1}
			>
				previous
			</button>

			<button onClick={() => setCount(count + 1)} disabled={isLoading}>
				next
			</button>

			{/* 
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<strong>{todo.completed ? 'DONE' : 'Pending'}: </strong>
						{todo.title}
					</li>
				))}
			</ul> */}
		</>
	);
};
