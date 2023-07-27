import React from "react";

export default function Button({ name, id }) {
    return (
        <button class="button" id={id}>{name}</button>
    )
}