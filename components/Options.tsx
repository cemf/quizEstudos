import { QuizOption } from "@/Model/quizModel";
import React from "react";
import { Text } from "react-native";


const Options = (props: QuizOption) => {
  return <Text>{props.optionId} {props.optionText}</Text>;
};

export default Options;
