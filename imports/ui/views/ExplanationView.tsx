import React, { useEffect, useState } from "react";
import HR from "../components/displays/HR";
import H4 from "../components/typography/H4";
import H5 from "../components/typography/H5";
import P from "../components/typography/P";
import { HIGH_CUTOFF, MID_CUTOFF } from "/constants";
import { Distractor } from "/types/distractorTypes";

interface ExplanationViewProps {
  data: number[];
  hoverDistractor?: Distractor;
}

function ExplanationView({ data, hoverDistractor }: ExplanationViewProps) {
  const [binnedData, setBinnedData] = useState<number[]>([]);

  useEffect(() => {
    binData();
  }, [data]);

  function binData() {
    const bins: number[] = Array(11).fill(0);
    data.forEach((number) => {
      bins[Math.round(number * 10)] += 1;
    });
    setBinnedData(bins.map((bin) => bin / data.length));
  }

  function renderDistractorTextualExplanation(score: number) {
    if (score > HIGH_CUTOFF)
      return (
        <P>
          Deze afleider komt <b>vaak</b> samen voor met je antwoord
        </P>
      );
    if (score > MID_CUTOFF)
      return (
        <P>
          Deze afleider komt <b>niet heel vaak</b> samen voor met je antwoord
        </P>
      );
    return (
      <P>
        Deze afleider komt <b>zelden</b> samen voor met je antwoord
      </P>
    );
  }
  function renderQuestionTextualExplanation(score: number) {
    if (score > HIGH_CUTOFF)
      return (
        <P>
          De bijbehorende vraag lijkt <b>sterk</b> op jouw vraag.
        </P>
      );
    if (score > MID_CUTOFF)
      return (
        <P>
          De bijbehorende lijkt een <b>beetje</b> op jouw vraag.
        </P>
      );
    return (
      <P>
        De bijbehorende vraag lijkt <b>weinig</b> op jouw vraag.
      </P>
    );
  }

  return (
    <div>
      <HR />
      <H4 className="text-primary-700">Inzichten</H4>
      <P className="mb-4">
        Hier zie je hoe de kwaliteit van de afleiders verdeeld is.
      </P>
      <div className="w-full p-4 pb-0 bg-white border rounded-xl border-slate-300 dark:bg-slate-900 dark:border-slate-700">
        <div className="relative h-36 ">
          <div className="absolute flex w-full h-32 gap-1 t-0 l-0 z-1">
            <div className="flex justify-center w-full h-full pt-2 transition-all hover:bg-primary-100 rounded-xl text-primary-900 dark:text-primary-500 dark:hover:bg-slate-800">
              Laag
            </div>
            <div className="flex justify-center w-full h-full pt-2 transition-all hover:bg-primary-100 rounded-xl text-primary-900 dark:text-primary-500 dark:hover:bg-slate-800">
              Gemiddeld
            </div>
            <div className="flex justify-center w-full h-full pt-2 transition-all hover:bg-primary-100 rounded-xl text-primary-900 dark:text-primary-500 dark:hover:bg-slate-800">
              Hoog
            </div>
          </div>
          <div className="absolute flex items-end w-full gap-1 px-10 border-b-2 pointer-events-none h-28 z-2 border-slate-300 b-0">
            {binnedData.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`flex flex-grow w-10 bg-primary-700 rounded-t-md dark:bg-primary-500`}
                  style={{ height: data * 95 + "%" }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-4 mt-4 bg-white border rounded-xl border-slate-300">
        {hoverDistractor && (
          <>
            <H5>Afleider: {hoverDistractor.distractor}</H5>
            <p className="w-full mb-1 text-sm font-semibold text-orange-400">
              Gelijkenis met jouw antwoord:{" "}
              {Math.round(hoverDistractor.dsimilarity * 10000) / 100 + "%"}
            </p>
            <div className="w-full h-2 my-2 mb-2 mr-4 bg-gray-200 rounded-full dark:bg-slate-300">
              <div
                className="h-2 bg-orange-400 rounded-full"
                style={{ width: hoverDistractor.dsimilarity * 100 + "%" }}
              />
            </div>
            {renderDistractorTextualExplanation(hoverDistractor.dsimilarity)}
            <p className="w-full mt-4 text-sm font-semibold text-purple-600">
              Gelijkenis met jouw vraag:{" "}
              {Math.round(hoverDistractor.qsimilarity * 10000) / 100 + "%"}
            </p>
            <div className="w-full h-2 my-2 mr-4 bg-gray-200 rounded-full dark:bg-slate-300">
              <div
                className="h-2 bg-purple-600 rounded-full"
                style={{ width: hoverDistractor.qsimilarity * 100 + "%" }}
              />
            </div>
            {renderQuestionTextualExplanation(hoverDistractor.qsimilarity)}
          </>
        )}
        {!hoverDistractor && <P>Hover over een afleider voor meer info</P>}
      </div>
    </div>
  );
}

export default ExplanationView;
