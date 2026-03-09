function handleFormSubmit(evt) {
  evt.preventDefault();
  console.log("I Submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}
