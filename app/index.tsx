import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Options from "../components/Options";
import { QuizOption } from "@/Model/quizModel";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  pergunta: {
    fontSize: 20,
  },
  questionBox: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
  },
  answerBox: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
    borderWidth: 3,
  },
});

const opcoes = [
  { optionId: "A", optionText: "Advogada" },
  { optionId: "B", optionText: "Veterinaria" },
  { optionId: "C", optionText: "Engenheiro" },
];

export default function Index() {
  const darkMode = false;
  const background = darkMode
    ? require("../assets/images/darkBackground.jpg")
    : require("../assets/images/decorative-grunge-frame-background.jpg");

  const [question, setQuestion] = useState("Primeira pergunta");

  const [options, setOptions] = useState<QuizOption[]>(opcoes);

  const getPerguntas = () => {
    let opcoes = [
      { optionId: "A", optionText: "Advogada" },
      { optionId: "B", optionText: "Veterinaria" },
      { optionId: "C", optionText: "Engenheiro" },
    ];
    setOptions(opcoes);

    return;
  };

  const selectAnswer = (value: string) => {
    console.log("issae", value);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.questionBox}>
            <Text style={styles.pergunta}>{question}</Text>
          </View>
        </View>
        {options
          ? options.map((item) => (
              <TouchableOpacity
                key={item.optionId}
                style={styles.answerBox}
                onPress={() => selectAnswer(item.optionText)}
              >
                <Options
                  optionId={item.optionId}
                  optionText={item.optionText}
                />
              </TouchableOpacity>
            ))
          : ""}
      </ImageBackground>
    </View>
  );
}
