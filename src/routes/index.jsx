import { Form, redirect, useLoaderData, Link } from "react-router-dom";
import { createContact, updateContact, getContacts } from "../contacts";


export async function action() {
    const contact = await createContact();
    const updates = { first: "Tochukwu", last: "Ewiwilem", twitter: "@ewiwilems", avatar: "https://amayei.nyc3.digitaloceanspaces.com/2022/06/61B74571-5AF1-4B33-A590-353C0BE37AE9-780x470.jpeg", notes: "Author and Finisher" };
    await updateContact(contact.id, updates);
    return redirect(`/contacts/${contact.id}`);

}

export async function loader() {
    const contact = await getContacts("Tochukwu");
    return contact;
}


export default function Index() {
    const contact = useLoaderData();

    return (
        <div id="zero-state">
            <p >
                This is a repo for your close contacts.
                <br />
                If you need any assistance
            </p>
            {contact[0] ? (
                <button><Link to={`/contacts/${contact[0].id}`} style={{ textDecoration: "None" }}>
                    Contact Author
                </Link>
                </button>

            ) : (
                <Form method="post">
                    <button type="submit">
                        Add Author As Contact
                    </button>
                </Form>
            )}

        </div>
    );
}