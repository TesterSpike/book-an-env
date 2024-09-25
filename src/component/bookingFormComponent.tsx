const bookingFormComponent = () => (
    <form action="/booking" className={"Form"}>
        <div className={"FormInputSection"}>
            <label className={"FormLabel"} htmlFor='Environment'>Environment: </label>
            <select className={"FormInput"} name='Environment' aria-describedby='Environment name' required={true}>
                <option id='TST1'>TST1</option>
                <option id='TST2'>TST2</option>
                <option id='TST3'>TST3</option>
            </select>
        </div>
        <div className={"FormInputSection"}>
            <label className={"FormLabel"} htmlFor='Name'>Name: </label>
            <input className={"FormInput"} name='Name' aria-label='Name'
                   aria-describedby='Name of the person booking'
                   type='text'/>
        </div>
        <div className={"FormInputSection"}>
            <label className={"FormLabel"} htmlFor='Office'>Office: </label>
            <select className={"FormInput"} name='Office'
                    aria-describedby='Office of the person making the booking'>
                <option id='LDN'>LDN</option>
                <option id='VAN'>VAN</option>
                <option id='NYC'>NYC</option>
            </select>
        </div>
        <div className={"FormInputSection"}>
            <label className={"FormLabel"} htmlFor='BookingDate'>Booking Date: </label>
            <input className={"FormInput"} name='BookingDate' aria-describedby='The date of the booking'
                   type='date'/>
        </div>
        <div className={"FormInputSection"}>
            <label className={"FormLabel"} htmlFor='Shareable'>Shareable? </label>
            <input className={"FormInput"} name='Shareable' aria-describedby='Is this ennvironment shareable?'
                   type='checkbox'/>
        </div>
        <div className={"FormInputSection"}>
            <label className={"FormLabel"} htmlFor='Notes'>Notes: </label>
            <textarea className={"FormInput"} name='Notes'
                      aria-describedby='Description of anything that may be important to other people who want to use the environment'
                      cols={30} rows={5}/>
        </div>
        <div className={"FormButtonSection"}>
            <button type="submit" className={"FormButton"}>Book Environment</button>
        </div>
    </form>
)

export default bookingFormComponent;