import React, { useState } from "react";
import Accordion from "./Accordion";
//import Accordion from "./Accordion";
//import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from './Translate';
import Route from "./Route";
import Search from "./Search";
import Header from "./Header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a JS Framework'
    },
    {
        title: 'Why use Resct?',
        content: 'React is a fav JS lib among developers'
    },
    {
        title: 'How to use Resct?',
        content: 'You can use React by creating components'   
    }
]

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
    <div>
        <br />
        <Header />
        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown
            label="Select a color"
            onSelectedChange={setSelected}
            options={options}
            selected={selected}
             />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
    </div>
    )

};

export default App;