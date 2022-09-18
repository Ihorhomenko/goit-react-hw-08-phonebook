import { UserMenu } from "./userMenu/userMenu";
import { Navigation } from "./navigation/navigation"
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


export const AppBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container> 
                    <Navigation/>
                    <UserMenu/>                    
            </Container>
        </Navbar>

    )
}