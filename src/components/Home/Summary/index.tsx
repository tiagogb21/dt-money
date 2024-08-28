import { FaDollarSign, FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { priceFormatter } from "../../../utils/functions/formatters";
import { SummaryCard, SummaryContainer } from "./styles";

interface ISummaryCard {
    id: number;
    title: string;
    icon: JSX.Element;
    value: number;
}


export const Summary = () => {
    const summaryCard: ISummaryCard[] = [
        {
            id: 1,
            title: 'Entradas',
            icon: <FaRegArrowAltCircleUp fill="#00b37e" size={24} />,
            value: 17400,
        },
        {
            id: 2,
            title: 'Saídas',
            icon: <FaRegArrowAltCircleDown fill="#f75a68" size={24} />,
            value: 1259,
        },
        {
            id: 3,
            title: 'Total',
            icon: <FaDollarSign fill="#FFF" size={24} />,
            value: 16141,
        },
    ];

    return (
        <SummaryContainer>
                {
                summaryCard.map((card) => (
                    <SummaryCard key={card.id}>
                        <div className="title">
                            <h2>{card.title}</h2>
                            {card.icon}
                        </div>
                        <h3>{priceFormatter.format(card.value)}</h3>
                    </SummaryCard>
                ))
                }
        </SummaryContainer>
    )
}