import React from 'react'
import "./RecipeTile.css"
export default function RecipeTile({ recipe }) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null &&
        (
            <div className="recipe-tile">
                <a href={recipe["recipe"]["url"]} target="_blank">
                    <img className="recipe-tile-image" src={recipe["recipe"]["image"]} />
                </a>
                <p className="recipe-tile-desc">{recipe["recipe"]["label"]}</p>
            </div>
        )
    )
}