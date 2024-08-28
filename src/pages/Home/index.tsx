import { HomeContainer } from "./styles"
import { Summary } from "../../components/Home/Summary"
import { Table } from "../../components/Home/Table"

export const Home = () => {
    return (
        <HomeContainer>
            <Summary />
            <Table />
        </HomeContainer>
    )
}