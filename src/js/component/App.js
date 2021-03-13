// import React, { useState, useEffect } from "react";
// import { Component } from "react/cjs/react.production.min";

// export class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			newItem: "",
// 			list: []
// 		};
// 	}

// 	updateInput(key, value) {
// 		//actualizar react state
// 		this.setState({
// 			[key]: value
// 		});
// 	}

// 	addItem() {
// 		// crear un item con id único
// 		const newItem = {
// 			id: 1 + Math.random(),
// 			value: this.state.newItem.slice()
// 		};

// 		// copia de la lista actual de items
// 		const list = [...this.state.list];

// 		// agregar un nuevo item a la lista
// 		list.push(newItem);

// 		//actualizar state con lista nueva y reset newItem input
// 		this.setState({
// 			list,
// 			newItem: ""
// 		});
// 	}

// 	deleteItem(id) {
// 		// copiar la lista actualizada de items
// 		const list = [...this.state.list];

// 		// filtrar out el item que va a ser eliminado
// 		const updatedList = list.filter(item => item.id !== id);

// 		this.setState({ list: updatedList });
// 	}

// 	// necesito contar los items en list!

// 	render() {
// 		return (
// 			<div>
// 				<div className="text-center mt-5">
// 					<h1>todos</h1>
// 				</div>

// 				<div className="container">
// 					<form className="d-flex">
// 						<input
// 							type="text"
// 							className="form-control"
// 							id="floatingInput"
// 							placeholder="Escriba un item..."
// 							value={this.state.newItem}
// 							onChange={e =>
// 								this.updateInput("newItem", e.target.value)
// 							}
// 						/>
// 						<button
// 							type="button"
// 							className="btn btn-outline-success"
// 							onClick={() => this.addItem()}>
// 							Agregar
// 						</button>
// 					</form>
// 					<br />
// 					<ul className="list-group">
// 						{this.state.list.map(item => {
// 							return (
// 								<li className="list-group-item" key={item.id}>
// 									{item.value}
// 									<button
// 										type="button"
// 										className="btn btn-light"
// 										onClick={() =>
// 											this.deleteItem(item.id)
// 										}>
// 										{" "}
// 										X
// 									</button>
// 								</li>
// 							);
// 						})}
// 					</ul>
// 					<p>{"4" + "   item left"}</p>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default App;
