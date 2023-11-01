
export const CurrentItem = ({currentItem, handleCloseItem}) => {

  return (
    <div>
      <button type="button" onClick={handleCloseItem}>close</button>
      <h2>{currentItem.name}</h2>
    </div>
  )
}