import { useState, useEffect } from 'react'

function NewEntry() {
    const [curDate, setDate] = useState([])
    useEffect(() => {
        const today = new Date().toString().slice(0, 15);
        setDate(today)
    }, [])

    const submit = () => {

    }
    return(
        <section>
            <p id='date'>Date: {curDate}</p>
            <form id='entry-container' onSubmit={submit}>
                <input id='entry-text' placeholder='Today...'/>
                <input id='entry-button' type='submit' />
            </form>
        </section>
    )
}

export default NewEntry;