import Link from "next/link";
import { RefObject } from "react";
export default function Header(props: {name: string | string[] | undefined}){
    let arr: string[] = []
    let rust = [
        "1. 대충",
        "2. 엄청난",
        "3. 내용",
    ]
    let python = [
        "1. 대충",
        "2. 엄청난",
        "3. 내용",
    ]
    switch (props.name){
        case "rust": arr = [...rust]; break;
        case "python": arr = [...python]; break;
    }
    return(
        <header>
            <input type="checkbox" id="open-list"/>
            <nav>
                {arr.map((e, i) => (
                    <Link href={`/${props.name}/${i}`}>{e}</Link>
                ))}
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