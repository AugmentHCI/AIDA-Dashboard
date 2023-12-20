/*
import React from "react";
import Checkbox from "../components/input/Checkbox";
import { DistractorType, QueryResultType } from "/types/distractorTypes";

interface DistractorViewProps {
  distractors: QueryResultType;
  toggleDistractor: (distractor: string, value: boolean) => void;
}

function DistractorView({
  distractors,
  toggleDistractor,
}: DistractorViewProps) {
  return (
    <div className="w-full overflow-scroll">
      {distractors.Result.map((question: DistractorType) => {
        return (
          <div className="flex flex-col gap-4 py-4 border-b border-slate-200 dark:border-slate-700">
            <p className="text-lg font-medium text-slate-500 dark:text-slate-300">
              {question.question}
            </p>
            <div className="flex flex-row flex-wrap gap-4">
              <p className="flex items-center gap-2 px-4 py-1 bg-blue-100 rounded-full text-slate-600 w-fit dark:bg-slate-700 dark:text-slate-200">
                <Checkbox
                  checked={false}
                  onChange={(e) => toggleDistractor(question.answer, e)}
                />
                {question.answer}
              </p>
              {question.distractors.map((distractor: string) => {
                if (distractor)
                  return (
                    <p className="flex items-center gap-2 px-4 py-1 rounded-full bg-slate-200 text-slate-600 w-fit dark:bg-slate-500 dark:text-slate-200">
                      <Checkbox
                        onChange={(e) => toggleDistractor(distractor, e)}
                      />
                      {distractor}
                    </p>
                  );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DistractorView;
*/
