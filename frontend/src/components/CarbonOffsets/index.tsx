import { useState } from "react";
import CarbonOffsetForm from "@/components/CarbonOffsets/CarbonOffsetForm";
import CarbonOffsetData from "@/components/CarbonOffsets/CarbonOffsetData";

const index = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");
  const [budget, setBudget] = useState<number>(0);

  return formSubmitted ? (
    <CarbonOffsetData country={country} budget={budget} undoSubmit={(submitted: boolean) => setFormSubmitted(submitted)} />
  ) : (
    <CarbonOffsetForm
      submit={(submitted: boolean) => setFormSubmitted(submitted)}
      setCountry={(country: string) => setCountry(country)}
      setBudget={(budget: number) => setBudget(budget)}
    />
  );
};

export default index;
