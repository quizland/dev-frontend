export default {
  state: {
    categories: [
      {
        category: 'JavaScript',
        icon: 'js-icon',
        quizes: [
          [
            {
              question: 'question 1',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 0
            },
            {
              question: 'question 2',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 2
            }
          ],
          [
            {
              question: 'question 1',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 1
            },
            {
              question: 'question 2',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 2
            }
          ]
        ]
      },
      {
        category: 'jQuery',
        icon: 'jquery-icon',
        quizes: [
          [
            {
              question: 'question 1',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 0
            },
            {
              question: 'question 2',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 2
            }
          ],
          [
            {
              question: 'question 1',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 0
            },
            {
              question: 'question 2',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 3
            }
          ]
        ]
      },
      {
        category: 'HTML',
        icon: 'html-icon',
        quizes: [
          [
            {
              question: 'question 1',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 0
            },
            {
              question: 'question 2',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 2
            }
          ],
          [
            {
              question: 'question 1',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 0
            },
            {
              question: 'question 2',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 3
            }
          ]
        ]
      },
      {
        category: 'CSS',
        icon: 'css-icon',
        quizes: [
          [
            {
              question: 'question 1',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 0
            },
            {
              question: 'question 2',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 2
            }
          ],
          [
            {
              question: 'question 1',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 0
            },
            {
              question: 'question 2',
              answers: ['answer1', 'answer2', 'answer3', 'answer4'],
              correctAnswer: 3
            }
          ]
        ]
      }
    ]
  },
  mutations: {
  },
  getters: {
    getCategories: state => {
      return state.categories
    }
  }
}
