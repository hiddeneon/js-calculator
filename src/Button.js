import React from "react";

export default function Button({ name, id }) {
    return (
        <button className="button" id={id}>{name}</button>
    )
}