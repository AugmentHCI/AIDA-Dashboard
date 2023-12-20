import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import IconButton from "../components/button/IconButton";
import HR from "../components/displays/HR";
import { Distractor } from "/types/distractorTypes";

type Feedback = "like" | "dislike" | "neutral";

interface DistractorsViewProps {
  isFetching: boolean;
  distractors: Distractor[];
  feedback?: boolean;
  explanation?: boolean;
  weight: number;
  updateHoverDistractor: (arg0: Distractor | undefined) => void;
}

function DistractorsView({
  isFetching,
  distractors,
  feedback = true,
  explanation = false,
  weight = 20,
  updateHoverDistractor,
}: DistractorsViewProps) {
  const [distractorsFeedback, updateDistractorFeedback] = useState<Feedback[]>(
    []
  );

  useEffect(() => {
    updateDistractorFeedback(
      distractors.map((_) => {
        return "neutral" as Feedback;
      })
    );
  }, [distractors]);

  function handleFeedback(index: number, feedback: Feedback) {
    const newFeedback = [...distractorsFeedback];
    if (newFeedback[index] === feedback) newFeedback[index] = "neutral";
    else {
      newFeedback[index] = feedback;
      toast.info(
        `Suggestie gemarkeerd als ${
          feedback === "like" ? "nuttig" : "onnuttig"
        }`,
        {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
    updateDistractorFeedback(newFeedback);
  }

  function renderFeedback(index: number, feedback: Feedback) {
    return (
      <div
        className={`absolute items-center right-0 h-full ml-4 flex gap-4 transition-all group-hover:opacity-100 bg-gradient-to-l pl-20 dark:pl-48 from-white dark:from-slate-900 to-transparent ${
          feedback === "neutral" ? "opacity-0" : "opacity-100"
        }`}
      >
        <IconButton
          icon="thumbs-up"
          onClick={() => handleFeedback(index, "like")}
          className={
            feedback === "like"
              ? "bg-transparent dark:bg-green-800 dark:border-green-700 dark:hover:bg-green-700 text-green-700 hover:text-white hover:bg-green-800 dark:text-green-600 dark:bg-transparent dark:border-none"
              : "hidden group-hover:inline-flex"
          }
        />
        <IconButton
          icon="thumbs-down"
          onClick={() => handleFeedback(index, "dislike")}
          className={
            feedback === "dislike"
              ? "bg-transparent dark:bg-red-800 dark:border-red-700 dark:hover:bg-red-700 text-red-700 hover:text-white hover:bg-red-800 dark:text-red-600 dark:bg-transparent dark:border-none"
              : "hidden group-hover:inline-flex"
          }
        />
      </div>
    );
  }

  function hoverExplanation(qsimilarity: number, dsimilarity: number) {
    return (
      <div className="z-10 flex-col hidden w-28 group-hover:block">
        <p className="w-full text-xs text-orange-400">
          Antwoord: {Math.round(dsimilarity * 10000) / 100 + "%"}
        </p>
        <div className="w-full h-2 mb-2 mr-4 bg-gray-200 rounded-full dark:bg-slate-300">
          <div
            className="h-2 bg-orange-400 rounded-full"
            style={{ width: dsimilarity * 100 + "%" }}
          />
        </div>
        <p className="w-full text-xs text-purple-600">
          Vraag: {Math.round(qsimilarity * 10000) / 100 + "%"}
        </p>
        <div className="w-full h-2 mr-4 bg-gray-200 rounded-full dark:bg-slate-300">
          <div
            className="h-2 bg-purple-600 rounded-full"
            style={{ width: qsimilarity * 100 + "%" }}
          />
        </div>
      </div>
    );
  }

  function renderExplanation(
    similarity: number,
    qsimilarity: number,
    dsimilarity: number
  ) {
    return (
      <div className="ml-4 overflow-visible group">
        {hoverExplanation(qsimilarity, dsimilarity)}
        <div className="block w-28 group-hover:hidden">
          <p className="w-full text-sm text-primary-600">
            {Math.round(similarity * 10000) / 100 + "%"}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-slate-300 mr-4">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: similarity * 100 + "%" }}
            />
          </div>
        </div>
      </div>
    );
  }

  function distractorDifference(a: Distractor, b: Distractor) {
    return (
      (weight * b.dsimilarity) / 100 +
      ((100 - weight) * b.qsimilarity) / 100 -
      ((weight * a.dsimilarity) / 100 + ((100 - weight) * a.qsimilarity) / 100)
    );
  }

  return (
    <div className="relative w-full h-full px-8 py-4 overflow-auto bg-white border-2 shadow-xl rounded-2xl border-slate-200 dark:bg-slate-900 dark:border-slate-700">
      {distractors
        .sort((a, b) => {
          return distractorDifference(a, b);
        })
        .slice(0, 20)
        .map((distractor, i) => {
          const distractorFeedback: Feedback = distractorsFeedback[i];
          return (
            <div
              className={`relative group overflow-visible ${
                feedback ? "cursor-pointer" : "cursor-default"
              }`}
              key={distractor.distractor}
              onMouseEnter={() => updateHoverDistractor(distractor)}
              onMouseLeave={() => updateHoverDistractor(undefined)}
            >
              {i > 0 && <HR />}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-semibold text-slate-600 dark:text-slate-200">
                    {distractor.distractor}
                  </p>
                  <p className="italic text-slate-400">{distractor.question}</p>
                </div>
                {explanation &&
                  renderExplanation(
                    (weight * distractor.dsimilarity) / 100 +
                      ((100 - weight) * distractor.qsimilarity) / 100,
                    distractor.qsimilarity,
                    distractor.dsimilarity
                  )}
                {feedback && renderFeedback(i, distractorFeedback)}
              </div>
            </div>
          );
        })}
      {distractors.length === 0 && !isFetching && (
        <div className="flex items-center justify-center w-full h-full font-semibold text-slate-500">
          Vul eerst een vraag en antwoord in links.
        </div>
      )}
      {isFetching && (
        <div className="flex flex-col w-full">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i: number) => {
            return (
              <div className="flex flex-col w-full gap-4 min-w-[600px]">
                {i > 0 && <HR />}
                <div className="h-8 rounded-lg w-28 bg-slate-200 dark:bg-slate-800 animate-pulse" />
                <div className="w-full h-8 rounded-lg bg-slate-200 dark:bg-slate-800 animate-pulse" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DistractorsView;
