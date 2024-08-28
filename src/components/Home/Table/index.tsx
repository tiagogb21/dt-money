import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { PriceHighlight, TransactionsContainer, Warning } from "./style";
import { dateFormatter, priceFormatter } from "../../../utils/functions/formatters";

export const Table = () => {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });

    if(transactions.length === 0) {
        return (
            <Warning>
                <p>Ainda não há transações!</p>
            </Warning>
        )
    }

    return (
        <TransactionsContainer>
            {transactions?.map((transaction) => (
                <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                        <PriceHighlight variant={transaction.type}>
                            {transaction.type === "outcome" && "- "}
                            {priceFormatter.format(transaction.price)}
                        </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                        {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                </tr>
            ))}
        </TransactionsContainer>
    );
};
