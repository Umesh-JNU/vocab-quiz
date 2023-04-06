import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Container from "../components/Container";

// utility function for shuffling array items
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [ans, setAns] = useState("");

  const getQuiz = async () => {
    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    console.log({ data });
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNext = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = (question) => {
    const options = [...question.incorrect_answers];
    options.push(question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const isCorrect = (answer) => {
    setAns(answer);
    if (answer === questions[ques].correct_answer) setScore(score + 5);
  };

  // method for navigating to result screen while passing score parameter.
  const handleRoute = () => {
    navigation.navigate("Result", { score });
  };

  return (
    <Container
      child={
        <>
          {questions && (
            <>
              <View style={styles.card.header}>
                <Text style={styles.question}>
                  Q. {decodeURIComponent(questions[ques].question)}
                </Text>
              </View>
              <View style={styles.card.body}>
                {options.length > 0 &&
                  options.map((o) => (
                    <TouchableOpacity
                      style={[
                        styles.optionBtn,
                        { backgroundColor: o === ans ? "orange" : "#34A0A4" },
                      ]}
                      key={o}
                      onPress={() => isCorrect(o)}
                    >
                      <Text style={styles.option}>{decodeURIComponent(o)}</Text>
                    </TouchableOpacity>
                  ))}
              </View>
              <View style={styles.card.footer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
                {ques !== 9 ? (
                  <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>NEXT</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.button} onPress={handleRoute}>
                    <Text style={styles.buttonText}>Show Result</Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}
        </>
      }
    />
  );
};

export default Quiz;

const styles = StyleSheet.create({
  card: {
    header: {
      marginVertical: 16,
    },
    body: {
      marginVertical: 16,
      flex: 1,
    },
    footer: {
      width: "100%",
      marginBottom: 12,
      paddingVertical: 16,
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
  button: {
    backgroundColor: "#1A759F",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "500",
  },
  question: {
    fontSize: 28,
  },
  optionBtn: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
  },
  option: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "500",
  },
});
