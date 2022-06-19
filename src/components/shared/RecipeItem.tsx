type Props = {
  item: Recipe
}

type Recipe = {
  id: number
  title: string
  type: string
}

function RecipeItem({ item }: Props) {
  return (
    <p>
      <b>{item.title}</b>
      <br/>
      <i>{item.type}</i>
    </p>
  )
}

export default RecipeItem