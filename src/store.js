export default {
  state: {
    categories: [
      {
        category: 'JavaScript',
        icon: 'js-icon',
        quizes: [
          [
            {
              question: 'Which expression is false in JavaScript:',
              answers: ['1 < 2 < 3', '0.1 < 0.2 < 1', '0.1 < 0.2 <= 1', '0 < 1 < 2'],
              correctAnswer: 1
            },
            {
              question: 'How we can get the count of object’s properties?',
              answers: ['obj.length', 'obj.keys.length', 'Object.keys(obj).length', 'Object.Keys(obj).count'],
              correctAnswer: 2
            },
            {
              question: 'What will be the output after commands:<br><code>let a = [1, 2];<br>let b = {3 : 4};<br>console.log(a + b);</code>',
              answers: ['[ 1, 2 ]{ 3: 4 }', '1,2,3:4', 'Array[1, 2]Object{ 3: 4 }', '1,2[object Object]'],
              correctAnswer: 3
            },
            {
              question: 'What is the result of:<br><code>(true + false) > 0 + true;</code>',
              answers: ['true', 'false', 'NaN', 'TypeError'],
              correctAnswer: 1
            },
            {
              question: 'What will be the output after:<br><code>var x=10;<br>var y=x++;<br>var z=++x;<br>console.log(x,y,z);</code>',
              answers: ['x: 12, y: 11, z : 11', 'x: 12, y: 10, z : 12', 'x: 11, y: 10, z : 12', 'x: 11, y: 10, z : 11'],
              correctAnswer: 1
            },
            {
              question: 'What will be the output, when we run this code in console?<br><code>if(0) console.log(‘I am 0’);<br>else if(10) console.log(‘I am 10’);<br>else if(100) console.log(‘I am 100’);<br>else console.log(‘Nothing.’);</code>',
              answers: ['I am 10', 'I am 0', 'I am 100', ') Nothing.'],
              correctAnswer: 0
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
        category: 'PHP',
        icon: 'php-icon',
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
