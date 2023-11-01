import { B, Button, Img, ItemElementsDiv } from "./Item.styled"

export const Item = ({item, handleOpenItem}) => {

  const picture = process.env.REACT_APP_PICTURE

  const text = (item) => {
    if (item.name.length > 46) {
      return `${item.name.slice(0 ,46)}...`
    }

    return item.name
  }

  return (
    <>
      <Button type="button" onClick={() => handleOpenItem(item)}>
        <Img
          src={`${picture}${item.pictures[0]}`}
          alt={item.name}
        />
        <B>{text(item)}</B>
        <ItemElementsDiv>
          <div>
            {item.price}$
          </div>
        </ItemElementsDiv>
      </Button>
    </>
  )
}