import { FaSearch } from "react-icons/fa";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { FormContainer } from "./styles";
import { TransactionsContext } from "../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const Form = () => {
    const fetchTransactions = useContextSelector(
        TransactionsContext,
        (context) => {
            return context.fetchTransactions;
        }
    );

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
      } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
      })

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query);
    }

    return (
        <FormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque uma transação"
                {...register("query")}
            />
            <button type="submit" disabled={isSubmitting}>
                <FaSearch size={20} />
                Buscar
            </button>
        </FormContainer>
    );
};
