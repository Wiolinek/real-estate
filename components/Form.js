export const getStaticProps = async () => {
    
    const res = await fetch('http://localhost:3000/api/regions');
    const data = await res.json();
    console.log(data);

    return {
        props: { regions: data }
    }
}





function Form({ regions }) {

  
  return (
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
        <label>Jmeno:<br />
            <input type="text" name="name"/>
        </label>
        <label>Telefoní číslo:<br />
            <input type="tel" name="phone"/>
        </label>
        <label>Email:<br />
            <input type="email" name="email" />
        </label>
        <button type="submit">Posli</button>
    </form>
  );
}

export default Form;