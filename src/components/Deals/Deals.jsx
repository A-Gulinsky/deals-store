import { useEffect, useState } from "react"
import { DealsContainer, H2, InfoContainer } from "./Deals.styled"
import { DealsList } from "./components/DealsList/DealsList"
import { InfoBlock } from "./components/InfoBlock/InfoBlock"
import { MainDeal } from "./components/MainDeal/MainDeal"

import { fetchItems } from "redux/fetch/fetchData"
import { useDispatch, useSelector } from "react-redux"

export const Deals = () => {

  const dispatch = useDispatch()

  const [currentItem, setCurrentItem] = useState(1)

  useEffect(() => {
    dispatch(fetchItems());
    
  }, [dispatch])

  const handleItemClick = (idx) => {
    setCurrentItem(idx + 1)
  }

  const data = useSelector(state => state.data.data)

  const item = data[currentItem - 1]

  return (
    
    <DealsContainer>
      <H2>Deals of the day</H2>
      <DealsList handleItemClick={handleItemClick} data={data} />
      <InfoContainer>
        <MainDeal item={item} />
        <InfoBlock />
      </InfoContainer>
    </DealsContainer>
  )
}