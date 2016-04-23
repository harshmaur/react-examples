import React, { Component } from 'react'
import QuestionList from "./quiz/QuestionList.jsx"
import Scorebox from "./quiz/Scorebox.jsx"
import Results from "./quiz/Results.jsx"

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: "What is your name?",
                    choices: [
                        {
                            id: "a",
                            text: "Michael"
                        },
                        {
                            id: "b",
                            text: "Harsh"
                        },
                        {
                            id: "c",
                            text: "John"
                        },
                        {
                            id: "d",
                            text: "Brad"
                        },
                    ],
                    correct: "b"
                },
                {
                    id: 2,
                    text: "What is your mother's name?",
                    choices: [
                        {
                            id: "a",
                            text: "Sarah"
                        },
                        {
                            id: "b",
                            text: "Scarlett"
                        },
                        {
                            id: "c",
                            text: "Donna"
                        },
                        {
                            id: "d",
                            text: "Michella"
                        },
                    ],
                    correct: "c"
                },
                {
                    id: 3,
                    text: "What is your father's name?",
                    choices: [
                        {
                            id: "a",
                            text: "Danny"
                        },
                        {
                            id: "b",
                            text: "Todd"
                        },
                        {
                            id: "c",
                            text: "Patrik"
                        },
                        {
                            id: "d",
                            text: "Banish"
                        },
                    ],
                    correct: "a"
                },
                {
                    id: 4,
                    text: "What is your brother's name?",
                    choices: [
                        {
                            id: "a",
                            text: "Stuart"
                        },
                        {
                            id: "b",
                            text: "Sheldon"
                        },
                        {
                            id: "c",
                            text: "Raj"
                        },
                        {
                            id: "d",
                            text: "Howard"
                        },
                    ],
                    correct: "d"
                }
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current){
        this.setState({
            current: current
        });
    }
    setScore(score){
        this.setState({
            score: score
        });
    }
    render () {
        if (this.state.current > this.state.questions.length) {
            var scorebox = "";
            var results = <Results {...this.state} />
        } else {
            var scorebox = <Scorebox {...this.state} />
            var results = "";
        }
        return (
            <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
                {results}
            </div>
        )
    }
}

export default App
