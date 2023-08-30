import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Layout(props) {
  return (
    
    <>
      <Header />
      <Sidebar/>
        <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
