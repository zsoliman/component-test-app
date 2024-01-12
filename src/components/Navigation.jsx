import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

const Navigation = ({ onSelect, activeKey, ...props }) => {
    return (
        <div>
            <Navbar {...props}>
                <Navbar.Brand href="#">SOLIMAN</Navbar.Brand>
                <Nav onSelect={onSelect} activeKey={activeKey}>
                    <Nav.Item eventKey="1" icon={<HomeIcon />}>
                        Home
                    </Nav.Item>
                    <Nav.Item eventKey="2">About</Nav.Item>
                    <Nav.Item eventKey="3">Events</Nav.Item>
                    <Nav.Menu title="More">
                        <Nav.Item eventKey="4">Company</Nav.Item>
                        <Nav.Item eventKey="5">Team</Nav.Item>
                        <Nav.Item eventKey="6">Contact</Nav.Item>
                    </Nav.Menu>
                </Nav>
                {/* <Nav pullRight>
                    <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
                </Nav> */}
            </Navbar>
        </div>
    )
}

export default Navigation;