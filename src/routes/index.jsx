export default function Index() {
    const handleAddAuthor = () => {

    }
    return (
        <p id="zero-state">
            This is a repo for your close contacts.
            <br />
            If you need any assistance,{" "}
            <button type= "button" onClick={handleAddAuthor}>
                add author as contact
            </button>
            
        </p>
    );
}