import React, { Component } from "react"
import List from "./List"
import "./App.css"
import store from "./STORE"

class App extends Component {
	state = {
		lists: [
			{
				id: "1",
				header: "First list",
				cardIds: ["a", "b", "e", "f", "g", "j", "l", "m"],
			},
			{
				id: "2",
				header: "Second list",
				cardIds: ["b", "c", "d", "f", "h", "i", "k"],
			},
			{
				id: "3",
				header: "Third list",
				cardIds: [
					"a",
					"b",
					"c",
					"d",
					"e",
					"f",
					"g",
					"h",
					"i",
					"j",
					"k",
					"l",
					"m",
				],
			},
			{
				id: "4",
				header: "Fourth list",
				cardIds: ["l", "m"],
			},
		],
		allCards: {
			a: { id: "a", title: "First card", content: "lorem ipsum" },
			b: { id: "b", title: "Second card", content: "lorem ipsum" },
			c: { id: "c", title: "Third card", content: "lorem ipsum" },
			d: { id: "d", title: "Fourth card", content: "lorem ipsum" },
			e: { id: "e", title: "Fifth card", content: "lorem ipsum" },
			f: { id: "f", title: "Sixth card", content: "lorem ipsum" },
			g: { id: "g", title: "Seventh card", content: "lorem ipsum" },
			h: { id: "h", title: "Eighth card", content: "lorem ipsum" },
			i: { id: "i", title: "Ninth card", content: "lorem ipsum" },
			j: { id: "j", title: "Tenth card", content: "lorem ipsum" },
			k: { id: "k", title: "Eleventh card", content: "lorem ipsum" },
			l: { id: "l", title: "Twelfth card", content: "lorem ipsum" },
			m: { id: "m", title: "Thirteenth card", content: "lorem ipsum" },
		},
	}
	handleAddRandomCard = () => {
		console.log("Random card")
	}

	handleDeleteCard = (card) => {
		//console.log(card.cardId)
		//console.log(this.state.lists)
		const newCards = this.state.lists.map((currentList) => {
			//console.log(currentList.cardIds)
			return currentList.cardIds.filter(
				(currentCardId) => currentCardId !== card.cardId
			)
			//(currentCard) => currentCard.card.cardIds !== card.cardIds
		})
		console.log(newCards)
		this.setState({ lists: newCards })
	}

	render() {
		const { state } = this.props
		return (
			<main className="App">
				<header className="App-header">
					<h1>Trelloyes!</h1>
				</header>
				<div className="App-list">
					{state.lists.map((list) => (
						<List
							key={list.id}
							header={list.header}
							cards={list.cardIds.map((id) => state.allCards[id])}
							onAddCard={this.handleAddRandomCard}
							onDeleteItem={this.handleDeleteCard}
						/>
					))}
				</div>
			</main>
		)
	}
}

export default App
