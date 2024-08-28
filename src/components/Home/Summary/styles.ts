import styled from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    gap: 2rem;
    margin-top: -5rem;
`;

interface ISummaryCard {
    variant?: "green";
}

export const SummaryCard = styled.div<ISummaryCard>`
    background-color: ${(props) => props.theme["gray-600"]};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;

    .title {
        display: flex;
        justify-content: space-between;

        h2 {
            font-size: 1rem;
        }
    }

    h3 {
        font-size: 2rem;
        font-weight: bold;
    }
`;
