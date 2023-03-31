export const eventsData = [
  {
    id: 1,
    title: "Kurs kajakarstwa dla początkujących",
    date: "10 kwietnia 2023",
    time: "9:00 - 13:00",
    location: "Park nad rzeką",
    description:
      "Nasz kurs kajakarstwa dla początkujących jest przeznaczony dla osób, które dopiero zaczynają swoją przygodę z tym sportem. Naucz się podstawowych technik wiosłowania, procedur bezpieczeństwa i niezbędnej wiedzy na temat sprzętu.",
  },
  {
    id: 2,
    title: "Wycieczka kajakowa po rwących wodach",
    date: "20 kwietnia 2023",
    time: "8:00 - 18:00",
    location: "Rapidy na rzece",
    description:
      "Dołącz do nas na wycieczkę pełną adrenaliny po rwących wodach! Przeznaczona dla doświadczonych kajakarzy, ta wycieczka sprawdzi Twoje umiejętności i dostarczy ekscytujących wrażeń.",
  },
  {
    id: 3,
    title: "Spotkanie kajakowe nad jeziorem",
    date: "30 kwietnia 2023",
    time: "10:00 - 14:00",
    location: "Jezioro Leśne",
    description:
      "Przyłącz się do naszego spotkania kajakowego nad jeziorem. To doskonała okazja, aby spędzić miło czas z innymi entuzjastami kajakarstwa, wymienić się doświadczeniami i cieszyć się pięknem otaczającej przyrody.",
  },
  // Add more events as needed
];

export const formConfigData = [
  {
    type: "text",
    name: "fullName",
    label: "Imię i Nazwisko",
    placeholder: "Wpisz swoje imię i nazwisko",
    validation: {required: "Imię i Nazwisko są wymagane"},
  },
  {
    type: "email",
    name: "email",
    label: "Adres e-mail",
    placeholder: "Wpisz swój adres e-mail",
    validation: {
      required: "Adres e-mail jest wymagany",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Nieprawidłowy adres e-mail",
      },
    },
  },
  {
    type: "tel",
    name: "phoneNumber",
    label: "Numer telefonu",
    placeholder: "Wpisz swój numer telefonu",
    validation: {
      required: "Numer telefonu jest wymagany",
      pattern: {
        value: /^\+?[1-9]\d{1,14}$/i,
        message: "Nieprawidłowy numer telefonu",
      },
    },
  },
  {
    type: "date",
    name: "birthdate",
    placeholder: "Wpisz swoją datę urodzenia",
    validation: {
      required: "Data urodzenia jest wymagana",
    },
  },
  {
    type: "select",
    name: "membership",
    label: "Rodzaj członkostwa",
    placeholder: "Wybierz rodzaj członkostwa",
    options: [
      {value: "monthly", label: "Miesięczne członkostwo"},
      {value: "annual", label: "Roczne członkostwo"},
      {value: "lifetime", label: "Dożywotnie członkostwo"},
    ],
    validation: {
      required: "Rodzaj członkostwa jest wymagany",
    },
  },
  {
    type: "textarea",
    name: "additionalInfo",
    label: "Dodatkowe informacje",
    placeholder: "Wpisz dodatkowe informacje lub pytania",
  },
];
