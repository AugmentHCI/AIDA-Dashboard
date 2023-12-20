import React, { useEffect, useState } from "react";
import { Context } from "../App";
import Button from "../components/button/Button";
import Icon from "../components/displays/Icon";
import RangeSlider from "../components/input/RangeSlider";
import TextInput from "../components/input/TextInput";
import P from "../components/typography/P";
import { dataFetch } from "/imports/api/dataMerger";
import { Distractor } from "/types/distractorTypes";

interface QueryInputProps {
  setDistractors: (distractors: Distractor[]) => void;
  showControl: boolean;
  weight: number;
  updateWeight: (value: number) => void;
  updateFetchingStatus: (isFetching: boolean) => void;
  context: Context;
}

function QueryInput({
  setDistractors,
  showControl = false,
  weight = 20,
  updateWeight,
  updateFetchingStatus,
  context,
}: QueryInputProps) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [amount, setAmount] = useState<number>(20);

  async function fetchDistractors() {
    setDistractors([]);
    setIsFetching(true);
    const data: Distractor[] = await dataFetch(question, answer);
    setDistractors(data);
    setIsFetching(false);
  }

  useEffect(() => {
    switch (context) {
      case "TP":
        setQuestion("Wat is de hoofdstad van Spanje?");
        setAnswer("Madrid");
        break;
      case "FP":
        setQuestion(
          "Welk gehoorbeentje staat in contact met het trommelvlies?"
        );
        setAnswer("Stijgbeugel");
        break;
      case "TN":
        setQuestion("Welke tweelingen lijken het best op elkaar?");
        setAnswer("Eeneiige tweeling");
        break;
      case "FN":
        setQuestion("Welk gebergte ligt niet in Azië?");
        setAnswer("Andes");
        break;
      default:
        setQuestion("");
        setAnswer("");
    }
  }, [context]);

  useEffect(() => {
    updateFetchingStatus(isFetching);
  }, [isFetching]);

  function generateText(value: number) {
    if (value > 95)
      return (
        <P className="text-primary-700">
          Hou alleen rekening met afleiders die vaak met <b>antwoord</b>{" "}
          {answer} voorkomen
        </P>
      );
    if (value > 75)
      return (
        <P className="text-primary-700">
          Hou vooral rekening met afleiders die vaak met <b>antwoord</b>{" "}
          {answer} voorkomen
        </P>
      );
    if (value > 35)
      return (
        <P className="text-primary-700">
          Hou rekening met zowel mijn <b>vraag</b> als <b>antwoord</b>
        </P>
      );
    if (value > 15)
      return (
        <P className="text-primary-700">
          Hou vooral rekening met afleiders die in gelijke <b>vragen</b>{" "}
          voorkomen
        </P>
      );
    return (
      <P className="text-primary-700">
        Hou enkel rekening met afleiders die in gelijke <b>vragen</b> voorkomen
      </P>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <P className="text-xl text-slate-500">
        Vul een vraag in, alsook het juiste antwoord, om enkele gelijkaardige
        antwoordopties (afleiders) te genereren.
      </P>
      <TextInput
        label="Vraag"
        placeholder="Typ je vraag"
        value={question}
        onChange={setQuestion}
        size="lg"
      />
      <div className="flex flex-row gap-4">
        <TextInput
          label="Antwoord"
          placeholder="Typ je antwoord"
          value={answer}
          onChange={setAnswer}
        />
        <TextInput
          label="Aantal afleiders"
          placeholder="Getal"
          value={amount}
          size="sm"
          onChange={(e) => {
            setAmount(parseInt(e));
          }}
          type="number"
        />
      </div>
      {showControl && (
        <>
          <RangeSlider
            label="Belang antwoord/vraag"
            value={weight}
            onChange={(value) => updateWeight(value)}
            step={10}
            from={-1}
            to={100}
          />
          <div className="flex justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
            <p>Belang vraag</p>
            <p>Belang antwoord</p>
          </div>
          {
            <div className="font-semibold text-primary-700 dark:text-slate-100">
              {generateText(weight)}
            </div>
          }
          <div className="relative p-4 border rounded-xl dark:bg-slate-700 dark:border-slate-600 border-slate-300 bg-slate-50">
            <Icon
              icon="info"
              className="absolute fill-slate-400 dark:fill-slate-500 top-[-.5rem] left-[-.5rem] dark:text-slate-200"
              size={"1.5rem"}
            />
            <P className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-200">
              De kwaliteit van een afleider wordt berekend o.b.v. 2 factoren:
              <ul className="flex flex-col gap-2 pl-6 list-disc">
                <li>
                  hoe vaak dat het samen met het{" "}
                  <b className="text-primary-600 dark:text-primary-400">
                    antwoord
                  </b>{" "}
                  "{answer}" voorkomt in andere vragen
                </li>
                <li>
                  hoe gelijk de{" "}
                  <b className="text-primary-600 dark:text-primary-400">
                    vraag
                  </b>{" "}
                  is aan andere vragen waarin het antwoord "{answer}" ook
                  voorkomt
                </li>
              </ul>
              Je kan kiezen hoe sterk de twee doorwegen op het berekenen van de
              uiteindelijke kwaliteit.
            </P>
          </div>
        </>
      )}

      <Button
        onClick={() => fetchDistractors()}
        className="mt-4"
        disabled={isFetching || !(question && answer)}
        loading={isFetching}
      >
        Zoek afleiders
      </Button>
    </div>
  );
}

export default QueryInput;
