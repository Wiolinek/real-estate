const Footer = () => {

  const year = new Date().getFullYear()
  
  return (
    <footer>
        <p>{`Copyright \u00A9 ${year} Wiola Polok www.u-v.codes. All Rights Reserved`}</p>
    </footer>
  );
}

export default Footer