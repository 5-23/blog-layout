import { RefObject } from "react";
export default function Header(){
    return(
        <header>
            <input type="checkbox" id="open-list"/>
            <nav></nav>

            <label htmlFor="open-list">
                <p></p>
                <p></p>
                <p></p>
            </label>
            <h1>Blog</h1>
        </header>
    )
}