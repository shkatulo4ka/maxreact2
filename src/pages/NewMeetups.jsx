import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const addMeetupHandler = (meetupData) => {
        fetch(
            'https://maxreact-7bbcd-default-rtdb.firebaseio.com/meetups',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
    return (
        <section>
        <h1>New Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;