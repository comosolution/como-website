"use client";
import games from "../../data/clubspiele.json";
import Image from "next/image";
import Button from "../../components/button";
import { ChangeEvent, useState } from "react";
import Checkbox from "@/app/components/checkbox";
import { validateEmail } from "@/app/utils/utils";
import Link from "next/link";
import { card } from "@/app/style/style";
import FormSuccess from "@/app/components/form";
import { HOOK_API } from "@/app/config/api";

export default function GameForm() {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });
  const [companion, setCompanion] = useState(false);
  const [selectedGames, setSelectedGames] = useState<Array<string>>([]);
  const [privacy, setPrivacy] = useState(false);

  const handleChange = (e: ChangeEvent<any>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleCheck = (id: string) => {
    selectedGames.length < 3 && !selectedGames.includes(id)
      ? setSelectedGames([...selectedGames, id])
      : setSelectedGames(selectedGames.filter((g) => g !== id));
  };

  return !success ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetch(`${HOOK_API}&src=clubspiele`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              name: `${data.firstName} ${data.lastName}`,
              company: data.company,
              email: data.email,
              companion,
              games: selectedGames,
            },
            null,
            2
          ),
        })
          .then((res) => res.text())
          .then((data) => {
            setSuccess(true);
          })
          .catch((error) => console.error(error));
      }}
      className={`flex flex-col gap-8 p-8 ${card}`}
    >
      <div className="flex flex-col gap-4">
        <h4>Ihre Daten</h4>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Vorname"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nachname"
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="company"
          placeholder="Unternehmen"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="E-Mail"
          onChange={handleChange}
        />
      </div>
      <Checkbox checked={companion} onChange={() => setCompanion(!companion)}>
        <p>Ich komme in Begleitung einer weiteren Person.</p>
      </Checkbox>
      <div>
        <header className="flex justify-between">
          <h4>Wählen Sie bis zu 3 Partien</h4>
          <p className="muted small">{selectedGames.length} / 3</p>
        </header>
        <div className="flex flex-col gap-2 mt-2 p-4 max-h-[280px] overflow-y-auto overscroll-y-contain rounded backdrop-blur-sm bg-black/50 ring-1 ring-white/10 shadow-2xl">
          {games.map((game, index) => {
            return (
              <Checkbox
                key={index}
                checked={selectedGames.includes(game.id)}
                onChange={() => handleCheck(game.id)}
                disabled={game.booked}
                className="items-center"
              >
                <div className="flex justify-between items-center h-10">
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/clubspiele/${game.id}.png`}
                      width={36}
                      height={36}
                      alt={`Logo ${game.name}`}
                    />
                    <p className="tracking-tighter">{game.name}</p>
                  </div>
                </div>
                <p className="muted small">
                  {game.booked ? "Ausgebucht" : game.date}
                </p>
              </Checkbox>
            );
          })}
        </div>
      </div>
      <Checkbox checked={privacy} onChange={() => setPrivacy(!privacy)}>
        <p>
          Ich habe die{" "}
          <Link href="/legal/privacy" target="_blank">
            Datenschutzerklärung
          </Link>{" "}
          zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur
          Beantwortung meiner Anfrage elektronisch erhoben und gespeichert
          werden.
        </p>
      </Checkbox>
      <Button
        type="primary"
        text="Anfrage abschicken"
        className="w-full flex justify-center"
        disabled={
          data.firstName.length === 0 ||
          data.lastName.length === 0 ||
          data.company.length === 0 ||
          !validateEmail(data.email) ||
          selectedGames.length === 0 ||
          !privacy
        }
      />
    </form>
  ) : (
    <FormSuccess />
  );
}
