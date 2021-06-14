import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/localCafe.module.css'

export default function localCafe() {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Specialty coffee roasters</h2>
                <div>
                    <iframe title="coffeemap" class={styles.googlemap} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9000.
                    579919774576!2d12.6150629!3d55.669079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2c7ccb637f655ff!2sNordic%2
                    0Roasting%20Co!5e0!3m2!1sen!2sdk!4v1623486558162!5m2!1sen!2sdk" width="800" height="600" frameborder="0" 
                    style={{border:0}} allowfullscreen="" aria-hidden="false"></iframe>
                </div>
            </div>
        </Layout>
    )
}