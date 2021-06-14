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
                <p>How do you typically like your cofffee to be roasted?</p>
                <select>
                    <option value="1">Light</option>
                    <option value="2">Medium light</option>
                    <option value="3">Medium</option>
                    <option value="4">Medium dark</option>
                    <option value="5">Dark</option>
                    <option value="6">Very dark</option>
                </select>
                <p>How do you like your coffee to taste?</p>
                <select>
                    <option value="1">I like a classic and traditional coffee taste</option>
                    <option value="2">I like the notes to have hints of something different</option>
                    <option value="3">I like to have a taste explosion of different notes</option>
                </select>
                <p>Do you add anything to your coffee?</p>
                <select>
                    <option value="1">I take it black</option>
                    <option value="2">I like to add milk or cream</option>
                </select>
                <p>Select your top 3 notes</p>
                <input 
                    type='text'
                />
                <p>What type of coffee do you drink?</p>
                <select>
                    <option value="1">Original</option>
                    <option value="2">Decaf</option>
                </select>
                <p>Submit your answers and find your perfect match.</p>
                <button>Submit</button>
            </form>
        </div> 
    );
}