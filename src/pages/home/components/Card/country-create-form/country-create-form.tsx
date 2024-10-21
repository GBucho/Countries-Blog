import { ChangeEvent, FormEvent, useState } from "react";

type CountryCreateFormProps = {
  onCountryCreate: (e: FormEvent<HTMLFormElement>) => void;
};

const CountryCreateForm: React.FC<CountryCreateFormProps> = ({
  onCountryCreate,
}) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [capital, setCapital] = useState("");

  const handleChangeCountryName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handleChangeCountryPopulation = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPopulation(value);
  };

  const handleChangeCountrycapital = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCapital(value);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
      onSubmit={onCountryCreate}
    >
      <input value={name} onChange={handleChangeCountryName} name="name" />
      <input
        value={population}
        onChange={handleChangeCountryPopulation}
        name="population"
      />
      <input
        value={capital}
        onChange={handleChangeCountrycapital}
        name="capital"
      />

      <button type="submit"> Add Country </button>
    </form>
  );
};

export default CountryCreateForm;
