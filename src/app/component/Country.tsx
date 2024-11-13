export default function Country_comp(info: {country_prop?:{name:string, population:string, capital:string}}) {
  return (
    <div>
      {info.country_prop ? (
        <>
          <h1>Country name: {info.country_prop.name}</h1>
          <h1>Country population: {info.country_prop.population}</h1>
          <h1>Country capital: {info.country_prop.capital}</h1>
        </>
      ) : (
        <h1>country not found</h1>
      )}
      
    </div>
  );


  }

 
 
