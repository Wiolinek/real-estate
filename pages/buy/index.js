import Link from 'next/link';
import Head from 'next/head';


function Buy() {

  
  return (
    <>
      <Head>
        <title>BUY something!</title>
        <meta name="" content=""/>
      </Head>
      <section class="buy">
        <header>
          <h1>Hledáte nemovitost ke koupi?</h1>
        </header>
        <main>
            <p>Se vsem vam pomuzeme. Stačí nám prozradit vaše představy. Vyplňte následující formular a my ho pošleme našim realitním kancelářím, které hend vás budou kontaktovat se svou nabídkou.</p>
            <Link href="/">Zpet</Link>
            <form>
              <label>Typ nemovitosti:<br />
                  <select type="select" name="estateType" >
                      <option hidden disabled selected> ----- </option>
                      <option value="byt">Byt</option>
                      <option value="dum">Dům</option>
                      <option value="pozemek">Pozemek</option>
                  </select>
              </label>
              <label>Kraj ve kterém se nemovitost nachází:<br />
                  <select type="select" name="region" >
                      <option hidden disabled selected value="-----"> ----- </option> 
                  </select>
              </label>
              <label>Okres ve kterém se nemovitost nachází:<br />
                  <select type="select" name="district">
                      <option hidden disabled selected value="-----"> ----- </option>
                  </select>
              </label>
              <Link href="/buy/results">Ukaz nabidky</Link>
          </form>
        </main>
      </section>
    </>
  );
}

export default Buy;