// Definindo a interface para uma opção de resposta
export interface QuizOption {
    optionId: string;
    optionText: string;
  }
  
  // Definindo a interface para uma pergunta
export interface QuizQuestion {
    questionId: number;
    questionText: string;
    options: QuizOption[];
    correctOption: string;
    justification: string;
  }
  
  // Definindo a interface para o quiz completo
export interface Quiz {
    title: string;
    description: string;
    questions: QuizQuestion[];
  }


//exemplo
// {
//     "quiz": {
//       "title": "Exemplo de Quiz",
//       "description": "Este é um exemplo de quiz para demonstrar o modelo JSON.",
//       "questions": [
//         {
//           "questionId": 1,
//           "questionText": "Qual é a capital da França?",
//           "options": [
//             {
//               "optionId": "A",
//               "optionText": "Berlim"
//             },
//             {
//               "optionId": "B",
//               "optionText": "Madrid"
//             },
//             {
//               "optionId": "C",
//               "optionText": "Paris"
//             },
//             {
//               "optionId": "D",
//               "optionText": "Roma"
//             }
//           ],
//           "correctOption": "C",
//           "justification": "Paris é a capital da França. É uma das cidades mais conhecidas do mundo e um importante centro cultural, econômico e político da Europa."
//         },
//         {
//           "questionId": 2,
//           "questionText": "Qual é o maior planeta do Sistema Solar?",
//           "options": [
//             {
//               "optionId": "A",
//               "optionText": "Terra"
//             },
//             {
//               "optionId": "B",
//               "optionText": "Júpiter"
//             },
//             {
//               "optionId": "C",
//               "optionText": "Saturno"
//             },
//             {
//               "optionId": "D",
//               "optionText": "Marte"
//             }
//           ],
//           "correctOption": "B",
//           "justification": "Júpiter é o maior planeta do Sistema Solar, com um diâmetro cerca de 11 vezes maior que o da Terra."
//         }
//       ]
//     }
//   }