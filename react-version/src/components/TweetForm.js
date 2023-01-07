function TweetForm() {
  const question = "What are you humming about?";
  const doSubmit = (event) => {
    event.preventDefault();
    console.log(`The request body contains: ${ event.target.text.value }`);
  };
  
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={ doSubmit }>
        <textarea className="form__textarea" name="text" placeholder={ question }></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;