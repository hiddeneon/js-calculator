import React from "react";

export default function Button({ name, id, key, operation }) {
    return (
        <button className="button" onClick={() => operation(name)} key={key} id={id}>{name}</button>
    )
}