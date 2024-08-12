import GlobalContainer from "./components/GlobalContainer";
import PricingCards from "./components/PricingCards";


function App(){
  return (
    <GlobalContainer>
      <PricingCards 
      title="First"
      storage="50GB"
      price="$1.00/ Month"
      bgColor="bg-slate-700"
      features={["50GB of Storage","Only 1 member","No member Benefits"]}/>
      <PricingCards
      title="Basic"
      storage="100GB"
      price="$1.99/Month"
      bgColor="bg-slate-700"
      features={["100GB of storage","Option to add members", "Extra member benefits"]} />
      <PricingCards
      title="Standard"
      storage="200GB"
      price="$3.99/Month"
      bgColor="bg-violet-600"
      features={["200GB of storage","Option to add members", "Extra member benefits"]} />
      <PricingCards
      title="Premium"
      storage="2 TB"
      price="$8.99/Month"
      bgColor="bg-slate-700"
      features={["2 TB of storage","Option to add members", "Extra member benefits"]} />
    </GlobalContainer>
  )
}

export default App;
