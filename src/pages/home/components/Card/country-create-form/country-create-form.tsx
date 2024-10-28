import { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { getTranslationContent } from "../static/language";

type CountryCreateFormProps = {
  onCountryCreate: (e: FormEvent<HTMLFormElement>) => void;
};

const CountryCreateForm: React.FC<CountryCreateFormProps> = ({
  onCountryCreate,
}) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [capital, setCapital] = useState("");
  const [imageError, setImageError] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === "image/png" || file.type === "image/jpeg") {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          setImagePreview(base64String);
        };
        reader.readAsDataURL(file);

        setImageError("");
      } else {
        setImageError("გთხოვთ ატვირთოთ მხოლოდ JPG ან PNG ტიპის ფაილი.");
      }
    }
  };

  const params = useParams();
  const lang = params.lang as string;
  const itemTranslation = getTranslationContent(lang);

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 2 }}
      onSubmit={onCountryCreate}
    >
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
      {imageError && <p style={{ color: "red" }}>{imageError}</p>}
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        />
      )}

      <input
        value={name}
        placeholder={itemTranslation("name")}
        onChange={handleChangeCountryName}
        name="name"
      />

      <input
        value={population}
        placeholder={itemTranslation("population")}
        onChange={handleChangeCountryPopulation}
        name="population"
      />
      <input
        value={capital}
        placeholder={itemTranslation("capital")}
        onChange={handleChangeCountrycapital}
        name="capital"
      />

      <button type="submit"> {itemTranslation("addcountry")} </button>
    </form>
  );
};

export default CountryCreateForm;
