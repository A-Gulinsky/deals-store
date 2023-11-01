import { DealsHoldItems } from "./components/DealsHoldItems"
import { DealsItem } from "./components/DealsItem"
import { Ul } from "./DealsList.styled"

export const DealsList = ({handleItemClick, data}) => {

  return (
    <Ul>

      {data.length ? 
        <DealsItem data={data} handleItemClick={handleItemClick} />
      :
        <DealsHoldItems />
      }

    </Ul>
  )
}