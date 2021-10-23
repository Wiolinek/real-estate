import Footer from './Footer';

function Layout({children}) {
  
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
}

export default Layout;