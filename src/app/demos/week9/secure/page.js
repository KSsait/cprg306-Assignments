import { userAuth  } from '../../../utils/auth';

export default function Page() {

    const { user } = useUserAuth();

    if(!user) {
    return(
        <main>
            <h1>Week 9 Demo - Secure Page, aka your shopping list</h1>
            <p>Go Away</p>
        </main>
    );
}

    return (
        <main>
            <h1>Week 9 Demo</h1>
            <p>This is a secure page. Welcome!.</p>
        </main>
    )
}