import { FormEvent } from "react";

type CountryCreateFormProps = {
  onCountryCreate: (e: FormEvent<HTMLFormElement>) => void;
};

const CountryCreateForm: React.FC<CountryCreateFormProps> = ({
  onCountryCreate,
}) => {
  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
      onSubmit={onCountryCreate}
    >
      <input name="name" />
      <input name="population" />
      <input name="capital" />

      <button type="submit"> Add Country </button>
    </form>
  );
};

export default CountryCreateForm;
