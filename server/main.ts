import { Meteor } from "meteor/meteor";
import { fetch, Headers } from "meteor/fetch";
import { QUESTION_FETCH_POOL_SIZE } from "../constants";

Meteor.startup(async () => {
  console.log("👋 Meteor server started");
});

Meteor.methods({
  getQDistractors: async function ({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) {
    const params = {
      query: question,
      answer: answer,
      topk: QUESTION_FETCH_POOL_SIZE,
    };
    const response = await fetch("http://193.190.127.236:5083/process", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  },
  getDDistractors: async function ({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) {
    const params = {
      query: question,
      answer: answer,
      topk: QUESTION_FETCH_POOL_SIZE,
    };
    //const response = await fetch("http://193.190.127.236:5099/process", {
    const response = await fetch(
      "http://aida-distractors.ilabt.imec.be/process",
      {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(params),
      }
    );
    const data = await response.json();
    return data;
  },
});
