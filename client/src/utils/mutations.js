import { gql } from "@apollo/client";
//TODO: bring in addPlayer & removePlayer
export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_QUESTION = gql`
  mutation addQuestion(
    $question: String!
    $answerOptions: [String]!
    $correctAnswer: String!
  ) {
    addQuestion(
      question: $question
      answerOptions: $answerOptions
      correctAnswer: $correctAnswer
    ) {
      title
      questions
      _id
    }
  }
`;

export const REMOVE_QUIZ = gql`
  mutation removeQuiz {
    removeQuiz {
      _id
    }
  }
`;

export const ADD_QUIZ = gql`
  mutation addQuiz($profileId: ID!, $title: String, $questions: [String]!) {
    addQuiz(profileId: $profileId, title: $title, questions: $questions) {
      title
      questions
      _id
    }
  }
`;

export const ACTIVATE_QUIZ = gql`
  mutation activateQuiz($id: ID!) {
    activateQuiz(id: $id) {
      _id
      title
      isActive
    }
  }
`;

