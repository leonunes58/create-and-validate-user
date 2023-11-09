import styled from "styled-components";

const cl_Font: string = "#ffff"
const bd_Input: string = "#30363d"
const bg_input: string = "#21262d"
const bg_button: string = "#238636"

export const TitleMain = styled.h1`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    color: ${cl_Font};
`

export const LabelInput = styled.label`
    display: flex;
    flex-direction: column;
    font-size: .8rem;
    color: ${cl_Font};
    width: 90%;
    gap: .5rem;
`

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    height: 2rem;
    background-color: ${bg_input};
    border: 2px solid ${bd_Input};
    outline: none;
    padding: 0 5px;
    color: ${cl_Font};
` 

export const ButtonMain = styled.button`
    width: 90%;
    padding: .5rem 0;
    display: flex;
    justify-content: center;
    background: ${bg_button};
    border: none;
    border-radius: 5px;
    color: ${cl_Font};
    cursor: pointer;
`
