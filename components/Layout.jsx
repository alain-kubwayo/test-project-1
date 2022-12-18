import Footer from "./Footer";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

const Layout = ({children}) => {
    return ( 
        <Wrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Wrapper>
     );
}
 
export default Layout;