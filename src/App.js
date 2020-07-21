import React from 'react';
//import PropTypes from "prop-types"

// function renderFood(dish) {
// console.log(dish)
//     return (
//         <Food name={dish.name} picture={dish.image}/>
//     )
// }
class App extends React.Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 3000)
    }

    render() {
        const {isLoading} = this.state
        return (
            <div>
                {
                    isLoading ? "Londing" : "we are ready"
                }
            </div>
        )
    }
}

export default App;
