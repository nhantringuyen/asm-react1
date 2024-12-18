import React from "react";
import styles from "./Button.module.css";

function Button({ text, onClick, type = "button", className = "primary", disabled = false }) {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles[className]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;
