import AllCreatures from "./AllCreatures"

// For each series array, map each name to a list item
const all = AllCreatures.map(eachSeries => eachSeries
    .map((name) => <li>{name}</li>)
)
    // Then map each series to a title and an OL
    .map((each, index) => <div>Mysterious Creatures Series {index + 1}<ol>{each}</ol></div>)


const Names = () => (
    <div>{all}</div>
)

export default Names
