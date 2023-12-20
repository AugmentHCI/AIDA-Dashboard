import React, { useEffect, useState } from "react";
import IconButton from "./components/button/IconButton";
import Modal from "./components/modal/Modal";
import H3 from "./components/typography/H3";
import QueryInput from "./views/QueryInput";
import DistractorsView from "./views/DistractorsView";
import FeedbackView from "./views/FeedbackView";
import ExplanationView from "./views/ExplanationView";
import { twMerge } from "tailwind-merge";
import { HIGH_CUTOFF } from "/constants";
import Icon from "./components/displays/Icon";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HR from "./components/displays/HR";
import { Distractor } from "/types/distractorTypes";

const conditions = ["Baseline", "Feedback", "Control", "Explanation"] as const;
type Condition = typeof conditions[number];

const context = ["TP", "TN", "FN", "FP"] as const;
export type Context = typeof context[number];

//const isCondition = (x: any): x is Condition => conditions.includes(x);

function App() {
  const [distractors, setDistractors] = useState<Distractor[]>([]);

  const [selectedCondition, setCondition] = useState<Condition>("Baseline");

  const [selectedContext, setContext] = useState<Context>("TP");

  const [showSettings, toggleShowSettings] = useState(false);

  const [weight, updateWeight] = useState<number>(20);

  const [isFetching, updateIsFetching] = useState<boolean>(false);

  const [isGoodQuality, updateIsGoodQuality] =
    useState<boolean | undefined>(false);

  const [hoverDistractor, updateHoverDistractor] =
    useState<Distractor | undefined>(undefined);

  /*

  const [selectedDistractors, updateSelectedDistractor] = useState<string[]>(
    []
  );

  function toggleDistractor(distractor: string, isAdd: boolean): void {
    if (isAdd) {
      updateSelectedDistractor([...selectedDistractors, distractor]);
    } else {
      const newDistractors = [...selectedDistractors];
      const index = newDistractors.indexOf(distractor);
      if (index > -1) {
        newDistractors.splice(index, 1);
      }
      updateSelectedDistractor(newDistractors);
    }
  }

  function renderDistractorChoices() {
    return distractors ? (
      <div className="flex flex-col mt-8">
        <p className="mb-4 text-lg text-slate-500 dark:text-slate-200">
          Hier zijn je geselecteerde distractors:
        </p>
        <div className="flex flex-wrap max-w-lg gap-4 p-6 bg-white border-2 border-slate-200 rounded-2xl dark:bg-slate-700 dark:border-slate-600">
          {selectedDistractors.length === 0 && (
            <p className="font-semibold text-slate-400">
              Selecteer enkele distractors links
            </p>
          )}
          {selectedDistractors.map((distractor: string) => {
            return (
              <span className="px-4 py-1 rounded-full bg-slate-200 text-slate-600 w-fit">
                {distractor}
              </span>
            );
          })}
        </div>
      </div>
    ) : null;
  }
  */

  function test() {
    let value = 4;
    function printValue(value) {
      let value = 5;
      console.log(value);
    }
    printValue(3);
  }

  test();

  useEffect(() => {
    updateWeight(20);
  }, [selectedContext, selectedCondition]);

  useEffect(() => {
    setCondition("Baseline");
    setDistractors([]);
  }, [selectedContext]);

  useEffect(() => {
    if (distractors) {
      const value = [...distractors]
        .splice(0, 5)
        .reduce(
          (acc, distractor) =>
            acc +
            (weight * distractor.dsimilarity) / 100 +
            ((100 - weight) * distractor.qsimilarity) / 100,
          0
        );
      if (value / 5 > HIGH_CUTOFF) updateIsGoodQuality(true);
      else {
        updateIsGoodQuality(false);
      }
    } else {
      updateIsGoodQuality(undefined);
    }
  }, [distractors, weight]);

  function renderModal() {
    return (
      <Modal
        title="Settings"
        show={showSettings}
        onConfirm={() => toggleShowSettings(false)}
      >
        <div className="flex flex-col">
          <h3 className="mb-4 text-lg font-semibold text-slate-700 dark:text-slate-200">
            Stel de conditie in:
          </h3>
          <div className="grid w-full grid-cols-2 gap-4">
            {conditions.map((option: Condition) => {
              const selectedClass =
                option === selectedCondition
                  ? "bg-primary-100 border-primary-700 text-primary-700 font-semibold dark:bg-primary-700 dark:border-primary-600 dark:text-slate-200 dark:text-slate-200 hover:bg-primary-200 dark:hover:bg-primary-800"
                  : "bg-slate-100 border-slate-200 text-slate-500 dark:border-slate-500 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 hover:bg-slate-200 hover:border-slate-300";
              return (
                <div
                  className={twMerge(
                    "p-4 text-lg border-2 rounded-xl cursor-pointer transition-all",
                    selectedClass
                  )}
                  onClick={() => setCondition(option)}
                >
                  {option}
                </div>
              );
            })}
          </div>
          <HR />
          <h3 className="mb-4 text-lg font-semibold text-slate-700 dark:text-slate-200">
            Stel de context in:
          </h3>
          <div className="grid w-full grid-cols-2 gap-4">
            {context.map((option: Context) => {
              const selectedClass =
                option === selectedContext
                  ? "bg-primary-100 border-primary-700 text-primary-700 font-semibold dark:bg-primary-700 dark:border-primary-600 dark:text-slate-200 hover:bg-primary-200 dark:hover:bg-primary-800"
                  : "bg-slate-100 border-slate-200 text-slate-500 dark:border-slate-500 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700 hover:bg-slate-200 hover:border-slate-300";
              return (
                <div
                  className={twMerge(
                    "p-4 text-lg border-2 rounded-xl cursor-pointer transition-all",
                    selectedClass
                  )}
                  onClick={() => setContext(option)}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    );
  }

  function renderTextualFeedback(isGood: boolean | undefined) {
    if (isGood)
      return (
        <div className="flex items-center gap-2 mt-4 text-green-600">
          <Icon icon="check-fill" size="16px" />
          <p className="text-sm font-semibold">
            De kwaliteit van de afleiders is vrij hoog
          </p>
        </div>
      );
    if (!isGood)
      return (
        <div className="flex items-center gap-2 mt-4 text-red-600">
          <Icon icon="warning" size="22px" />
          <p className="text-sm font-semibold">
            De kwaliteit van de afleiders is aan de lage kant, hou hier rekening
            mee!
          </p>
        </div>
      );
    return null;
  }

  function leftView() {
    return (
      <div>
        <div className="flex items-center gap-2">
          <H3 className="flex items-center gap-2 text-3xl font-bold text-primary-700 dark:text-primary-600">
            Genereer vragen en afleiders
          </H3>
        </div>
        <QueryInput
          setDistractors={setDistractors}
          showControl={selectedCondition === "Control"}
          weight={weight}
          updateWeight={updateWeight}
          updateFetchingStatus={updateIsFetching}
          context={selectedContext}
        />
        {distractors.length > 0 && renderTextualFeedback(isGoodQuality)}
        {selectedCondition === "Feedback" && <FeedbackView />}
        {selectedCondition === "Explanation" && (
          <ExplanationView
            hoverDistractor={hoverDistractor}
            data={distractors.map((d) => {
              return d.qsimilarity;
            })}
          />
        )}
      </div>
    );
  }

  function rightView() {
    return (
      <DistractorsView
        isFetching={isFetching}
        distractors={distractors}
        feedback={selectedCondition === "Feedback"}
        explanation={selectedCondition === "Explanation"}
        weight={weight}
        updateHoverDistractor={(e) => updateHoverDistractor(e)}
      />
    );
  }

  return (
    <div className="relative">
      <ToastContainer />
      <IconButton
        className="absolute flex top-4 right-4 hover:border hover:border-slate-300"
        icon="settings"
        onClick={() => toggleShowSettings(true)}
      />
      {renderModal()}
      <div className="flex flex-col items-start justify-center w-full h-screen gap-4 overflow-hidden lg:gap-12 md:flex-row bg-slate-100 dark:bg-slate-800">
        <div className="flex h-full max-w-6xl gap-10 m-12 xl:gap-24">
          <div className="flex flex-col w-full gap-4 h-full md:w-1/2 md:pr-0 max-w-[650px]">
            {leftView()}
          </div>
          <div className="w-full h-[90%] overflow-x-visible">{rightView()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
