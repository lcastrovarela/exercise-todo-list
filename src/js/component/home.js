import React, { useState } from "react";

//create your component

export function Home() {
	const [list, setList] = useState([]);

	//agregar item
	function addItem(e) {
		if (e.key === "Enter") {
			setList([...list, e.target.value]);
		}
	}

	//eliminar item
	const deleteItem = indexItem => {
		setList(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	//renderizacion
	return (
		<div>
			<div className="text-center mt-5">
				<h1>todos</h1>
			</div>

			<div className="container">
				<input
					type="text"
					className="form-control"
					id="floatingInput"
					placeholder="Escriba un item..."
					onKeyDown={e => addItem(e)}
				/>
				<ul className="list-group list-group-flush">
					{list.map((item, index) => {
						return (
							<li className="list-group-item" key={index}>
								{item}{" "}
								<button
									type="button"
									className="btn btn-light"
									onClick={() => deleteItem(index)}>
									X
								</button>
							</li>
						);
					})}
					<br />
					<p>{list.length + "   items left"}</p>
				</ul>
			</div>
		</div>
	);
}
