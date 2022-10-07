import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        // TODO Tell event listener what it is listening for. In this case "metal"
        if (event.target.name === "metal") {

            //TODO Then tell it to give a window alert of which metal, by primary key, was chosen.
            // window.alert(`User chose metal ${event.target.value}`)

            // Instead of windows alert, set corresponsing property of the order builder object in application state
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

