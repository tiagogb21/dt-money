import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import logoImage from '../../assets/imgs/logo.png';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to="/">
                    <img className="" src={logoImage} alt="logo dt money" />
                    DT Money
                </Link>
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}