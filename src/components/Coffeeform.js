import React from 'react'
import Slider from 'react-rangeslider'
import * as styles from '../styles/form.module.css'

export default function CoffeeForm() {

    const [ value, setValue ] = React.useState(50);

    return ( 
        <div className={styles.div}>
            <form>
                <Slider
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <p>Enter your name</p>
                <input
                    type='text'
                />
                <p>Select roast level</p>
                <select>
                    <option value="1">Light</option>
                    <option value="2">Medium-Light</option>
                    <option value="3">Medium</option>
                    <option value="4">Medium-Dark</option>
                    <option value="5">Dark</option>
                </select>
                <p>How do you like your coffee to taste?</p>
                <select>
                    <option value="1">I like a classic and traditional coffee taste.</option>
                    <option value="2">I like the notes to have hints of something different.</option>
                    <option value="3">I like to have a taste explosion of different notes.</option>
                </select>
                <p>Select your top 3 notes</p>
                <input 
                    type='text'
                />
                <p>Select price range</p>
                <select>
                    <option value="1">10-20$</option>
                    <option value="2">20-30$</option>
                    <option value="3">30-50$</option>
                    <option value="4">+50$</option>
                </select>
                <p>Submit your answers and let our AI do its magic.</p>
                <button>Submit</button>
            </form>
        </div> 
    );
}