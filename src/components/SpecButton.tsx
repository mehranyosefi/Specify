import "../assets/styles/components/SpecButton.scss"
import type { PropsButton } from "src/types"

// function ButtonPrepend(prepend) {
//     return (
//         <>
//             {prepend}
//         </>
//     )
// }
// function ButtonAppend(append) {
//     return (
//         <>
//             {append}
//         </>
//     )
// }
// SpecButton.Prepend = ButtonPrepend
// SpecButton.Append = ButtonAppend
function SpecButton(props: PropsButton) {
    const { prepend = null, content, append = null, styles, to = null, className = null, onButtonClick } = props
    return (
        <>
            {!to ?
                <button className={`button ${className}`} style={styles} onClick={onButtonClick}>
                    {prepend}
                    {content}
                    {append}
                </button>
                :
                <a className={`button ${className}`} href={to} style={styles}>
                    {prepend}
                    {content}
                    {append}
                </a>}

        </>
    )
}
export default SpecButton