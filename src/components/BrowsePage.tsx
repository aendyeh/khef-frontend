import Pills from "./shared/Pills"
import Search from "./shared/Search"

function BrowsePage() {
  function pillItems() {
    return []
  }

  return (
    <article className="browsable-content">
      <Search onSubmit={() => console.warn("TODO")} hasButton={false} />
      <Pills items={pillItems()} />
      <h1>Results</h1>
    </article>
  )
}

export default BrowsePage