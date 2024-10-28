const language = {
  ka: {
    name: "სახელი",
    population: "მოსახლეობა",
    capital: "დედაქალაქი",
    title: "ტურისტული კომპანია",
    home: "მთავარი",
    about: "ჩვენს შესახებ",
    contact: "კონტაქტი",
    aboutPage: "ეს არის ებაუთ ფეიჯი",
    copyRight: "მარტივი ბლოგი. ყველა უფლება დაცულია.",
    moreinfo: "დამატებითი ინფორმაცია",
    delete: "წაშლა",
    create: "შექმნა",
    notfound: "გვერდი ვერ მოიძებნა",
    restore: "აღდგენა",
    addcountry: "ქვეყნის დამატება",
  },
  en: {
    name: "name",
    population: "population",
    capital: "capital",
    title: "Travel Company",
    home: "Home",
    about: "About Us",
    contact: "Contact",
    aboutPage: "This is about page",
    copyRight: "Simple Blog. All Rights Reserved.",
    moreinfo: "More Info",
    delete: "delete",
    create: "create",
    notfound: "page not found",
    restore: "restore",
    addcountry: "add country",
  },
};

export default language;

export const locale = Object.keys(language);

export function getTranslationContent(lang?: string) {
  if (!lang || !locale.includes(lang)) {
    console.log("we dont have such language");
  }

  const selectedNamespace = language[lang as keyof typeof language];

  return (key: keyof (typeof language)["ka"]) => {
    return selectedNamespace[key];
  };
}
