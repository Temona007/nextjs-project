import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const router = useRouter();

    async function addMeetupHandler(enteredFormData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredFormData),
            headers: {
                'Content-Type':'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.push('/');
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
};

export default NewMeetupPage;