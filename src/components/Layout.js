import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from 'react-router-dom';
import { AlertProvider } from '../context/alertContext';
import Header from './Header';
import Footer from './Footer';
import Alert from './Alert';

function Layout() {
    return (
        <div className="App">
            <ChakraProvider>
                <AlertProvider>
                    <Header />
                    <Outlet />
                    <Footer />
                    <Alert />
                </AlertProvider>
            </ChakraProvider>
        </div>
    )
}

export default Layout;