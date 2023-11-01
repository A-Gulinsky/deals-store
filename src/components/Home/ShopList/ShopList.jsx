import { useEffect, useState } from "react";
import { Button, Li, ShopListContainer, Ul } from "./ShopList.styled";
import { Item } from "./Item/Item";
import { CurrentItem } from "./CurrentItem/CurrentItem";
import { fetchQuery,fetchStoreItems, loadMoreBtnQueryItems, loadMoreBtnStoreItems } from "redux/storeFetch/storeFetch";
import { useDispatch, useSelector } from "react-redux";

export const ShopList = () => {
    
  const data = useSelector(state => state.storeData.storeData)

  const [isCardOpen, setIsCardOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)

  const query = useSelector(state => state.query.query)

  const [page, setPage] = useState(1)

  const dispatch = useDispatch()

  useEffect(() => {

    async function fetchData() {
    if (query) {
      await dispatch(fetchQuery(query));
      setPage(1)
    } else {
      dispatch(fetchStoreItems());
      setPage(1)
    }
  }
  fetchData();
}, [dispatch, query]);


  const handleOpenItem = (item) => {
    setCurrentItem(item)
    setIsCardOpen(true)
  }

  const handleCloseItem = () => {
    setCurrentItem(null)
    setIsCardOpen(false)
  }

  // BTN LOAD MORE
  
  const handleBtnLoadMore = () => {
  setPage((prevPage) => {
    const nextPage = prevPage + 1;

    if (query) {
      dispatch(loadMoreBtnQueryItems({query, page: nextPage}));
    } else {
      dispatch(loadMoreBtnStoreItems(nextPage));
    }

    return nextPage;
  });
  };

  

  return (
    <ShopListContainer>
      
      {!isCardOpen && <>
        <Ul>
          {data.map(item => (
            <Li key={item.name}>
              <Item item={item} handleOpenItem={handleOpenItem} />
            </Li>
          ))}
        </Ul>
        
        <Button type="button" onClick={handleBtnLoadMore}>Load More...</Button>
      </>
      }

      {isCardOpen && <CurrentItem currentItem={currentItem} handleCloseItem={handleCloseItem} />}

    </ShopListContainer>
  );
};
