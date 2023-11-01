import { useEffect, useState } from "react"
import { AllCategoryDiv, CategoryButton, CategoryContainer, CategoryElDiv, ElementsContainer, SubCat } from "./ShopElements.styled"

export const ShopElements = () => {

  const [categories, setCategories] = useState([])

  // test sub cat
  const [currentCatId, setCurrentCatId] = useState(null)

  const [firstCategoriesVisible, setFirstCategoriesVisible] = useState(false)

  // CATEGORIES HOVER
  const handleOnHover = () => {
    setFirstCategoriesVisible(true)
  }

  const handleOffHover = () => {
    setFirstCategoriesVisible(false)
  }

  // HANDLE CLICK SUB CATEGORY
  
  const handleToggleSubCategory = (id) => {
    if (id === currentCatId) {
      // Если нажатая категория совпадает с текущей, скрыть подкатегории
      setCurrentCatId(null);
    } else {
      setCurrentCatId(id);
    }
  }
  

  // FETCH CATEGORIES
  const fetchData = async () => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data)
      } catch (error) {
        console.error("Произошла ошибка при выполнении fetch-запроса:", error);
      }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ElementsContainer>
      <CategoryContainer>
        <AllCategoryDiv onMouseEnter={handleOnHover} onMouseLeave={handleOffHover}>
          <h2>All Categories</h2>
          
          {firstCategoriesVisible && 
            <>
              {categories
                // .filter(el => !el.parent) // Фильтрация элементов с parent
              // eslint-disable-next-line array-callback-return
              .map(el => {
                const isOpen = currentCatId === el.id;
                if (!el.parent) return (
                  
                  <CategoryElDiv key={el.id}>
                    <CategoryButton type="button" onClick={() => handleToggleSubCategory(el.id)}>{el.name}</CategoryButton>
                    
                    {isOpen && <>
                      {categories.filter(category => category.parent).map(subCat => (
                        <div key={subCat.id}>
                          {subCat.parent.name === el.name &&
                            <SubCat>{subCat.name}</SubCat>
                          }</div>
                      ))}
                    </>}

                  </CategoryElDiv>
                  
                )  
              })}
            </>
          }
        </AllCategoryDiv>
      </CategoryContainer>

      {/* <JoinUsContainer>
        Join Us
      </JoinUsContainer> */}
    </ElementsContainer>
  )
}