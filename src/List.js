import React from "react"
import Card from "./Card"
import "./List.css"

export default function List(props) {
	return (
		<section className="List">
			<header className="List-header">
				<h2>{props.header}</h2>
			</header>
			<div className="List-cards">
				{props.cards.map((card) => (
					<Card
						key={card.id}
						cardId={card.id}
						title={card.title}
						content={card.content}
						onDeleteItem={props.onDeleteItem}
					/>
				))}{" "}
				console.log(key)
				<button
					type="button"
					className="List-add-button"
					onClick={props.onAddCard}
				>
					+ Add Random Card
				</button>
			</div>
		</section>
	)
}
