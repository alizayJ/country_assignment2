import Country from "@/app/component/Country"

export default function CountryName({params}:{params:{country_name: string}}) {
    const country_data: {
        name: string;
        population: string;
        capital: string;
      }[] = [
        {
          name: "Pakistan",
          population: "225 million",
          capital: "Islamabad",
        },
        {
          name: "Qatar",
          population: "2.8 million",
          capital: "Doha",
        },
        {
          name: "Turkiye",
          population: "85 million",
          capital: "Ankara",
        },
        {
          name: "Bangladesh",
          population: "166 million",
          capital: "Dhaka",
        },
        {
          name: "Brunei",
          population: "440,000",
          capital: "Bandar Seri Begawan",
        },
      ];

      
  function getData(url: string) {
    return country_data.find(
      (properties) => url.toLowerCase() == properties.name.toLowerCase()
    );}
    const result = getData(params.country_name);
return (

<div>
 <Country country_prop = {result}/>
</div>
    );
  }