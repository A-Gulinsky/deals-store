import { useState } from "react";
import { Button, Input, Label } from "./SearchField.styled";
import inputFieldIcon from 'assets/searchFieldIcon/magnifying-glass.png';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuery } from "redux/fetch/query";
import { fetchQuery } from "redux/storeFetch/storeFetch";

export const SearchField = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleSetQuery = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    dispatch(setQuery(encodeURIComponent(inputValue.trim())));

    if (location.pathname !== '/store') {
      navigate('/store');
      return;
    }

    dispatch(fetchQuery(inputValue));
  }

  return (
    <Label>
      <Input
        onChange={handleSetQuery}
        type="text"
        placeholder="Search Product"
      />
      <Button type="submit" onClick={handleSubmitForm}>
        <img
          src={inputFieldIcon}
          alt="inputIcon"
          width="20"
          height="20"
          style={{ marginRight: '10px' }}
        />
      </Button>
    </Label>
  );
}