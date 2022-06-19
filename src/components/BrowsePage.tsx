import { Link } from "react-router-dom"
import Pills from "./shared/Pills"
import RecipeItem from "./shared/RecipeItem"
import Search from "./shared/Search"

function BrowsePage() {
  function pillItems() {
    return []
  }

  function recipes(): any[] {
    return [{
      id: 1,
      title: "Lorem ipsum",
      type: "Main"
    }, {
      id: 13,
      title: "Foo bar",
      type: "Breakfast"
    }, ]
  }

  return (
    <article className="browsable-content">
      <Search onSubmit={() => console.warn("TODO")} hasButton={false} />
      <Pills items={pillItems()} />
      <h1>Results</h1>

      {recipes().map(rec => (
        <Link to={`/recipe/${rec.id}`}>
          <RecipeItem item={rec} />
        </Link>
      ))}
    </article>
  )
}

export default BrowsePage