import styled from "styled-components";

export const SearchBoxContainer = styled.section`
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: var(--mainSpacing);
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4rem;
  margin: 4rem 0 10rem;
`;

export const SearchGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchLabel = styled.label`
  padding-bottom: 0.5rem;
`;

export const SearchInput = styled.select`
  font-size: inherit;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const SizeInput = styled.input`
  width: 8rem;
  margin-right: 3px;
  padding: 0.3rem 0.2rem 0.3rem 1rem;
  border-radius: 0.5rem;
  outline: none;
`;

export const CheckBoxLabel = styled.label`
  padding-left: 0.75rem;
`;
