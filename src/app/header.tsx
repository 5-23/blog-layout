import { RefObject } from "react";
export default function Header(){
    return(
        <header>
            <input type="checkbox" id="open-list"/>
            <nav>
                <a href="#1">1. 대충</a>
                <a href="#2">2. 엄청난</a>
                <a href="#1">3. 내용</a>
            </nav>

            <label htmlFor="open-list">
                <p></p>
                <p></p>
                <p></p>
            </label>
            <h1>Blog</h1>
        </header>
    )
}