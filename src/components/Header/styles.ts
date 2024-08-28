import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 70rem;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: bold;
        font-size: 2rem;

        img {
            width: 2.5rem;
            height: auto;
        }
    }
`;

export const NewTransactionButton = styled.button`
    background: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme["white"]};
    padding: 0.75rem 1.25rem;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
    }
`;
