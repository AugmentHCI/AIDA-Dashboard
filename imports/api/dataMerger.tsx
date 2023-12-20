import { Meteor } from "meteor/meteor";
import { Distractor } from "/types/distractorTypes";

export async function dataFetch(question: string, answer: string) {
  console.log("Fetching");
  //@ts-ignore
  const DDATA = Meteor.callPromise(
    "getDDistractors",
    { question: question, answer: answer },
    (error: any, result: any) => {
      if (error) console.log(error);
      return result.Result;
    }
  );
  //@ts-ignore
  const QDATA = Meteor.callPromise(
    "getQDistractors",
    { question: question, answer: answer },
    (error: any, result: any) => {
      if (error) console.log(error);
      return result;
    }
  );
  const result = await Promise.all([DDATA, QDATA]);

  const data = mergeData(result[0].Result, result[1].Result);
  console.log(data);
  return data;
}

export function mergeData(dataD: any, dataQ: any): Distractor[] {
  const data = dataD.map((result: (string | number)[]) => {
    const distractor = result[0] as string;
    let topQuestion = "";
    let qScore = 0;
    for (const question of dataQ) {
      if (question.distractors.includes(distractor)) {
        topQuestion = question.question;
        qScore = question.score;
        break;
      }
    }
    if (topQuestion)
      return {
        distractor: distractor,
        qsimilarity: qScore,
        dsimilarity: result[1],
        question: topQuestion,
      } as Distractor;
  });

  return data.filter(
    (distractor: Distractor | undefined) => distractor !== undefined
  ) as Distractor[];
}
