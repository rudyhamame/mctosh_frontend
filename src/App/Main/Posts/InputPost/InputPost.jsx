import React from "react";
import Search from "../../../Header/Search/Search";

const InputForm = (props) => {
  ////////////////////////////////AUTO RESIZE TEXTAREA///////////////////////////////////
  function auto_grow(event) {
    let textarea = document.getElementById("InputPost_textarea");
    textarea.style.height = textarea.scrollHeight + "px";

    if (event.which === 8) {
      textarea.style.height = textarea.scrollHeight - 20 + "px";
    }
  }
  function minimizeHeight() {
    let textarea = document.getElementById("InputPost_textarea");

    if (textarea.value === "") {
      textarea.style.height = 0 + "px";
    }
  }
  return (
    <article id="InputPost_article" className="fc">
      <section className="fr" id="InputPost_textarea_container">
        <section id="InputPost_greeting_container" className="fc">
          <h1 id="InputPost_greeting_text">Hello {props.state.firstname}</h1>
        </section>
        <textarea
          id="InputPost_textarea"
          placeholder="Wants to post something?"
          onKeyDown={(event) => auto_grow(event)}
          onChange={(event) => minimizeHeight(event)}
        ></textarea>
      </section>
      <section className="InputPost_inputs_container" className="fr">
        <select id="InputPost_category" title="dsf">
          <option value="" disabled selected hidden>
            Category
          </option>
          <option value="General Principles">General Principles</option>
          <option value="Individual Organ">Individual Organ</option>
        </select>

        <select id="InputPost_subject" name="subject">
          <option value="" disabled selected hidden>
            Subject
          </option>
          <option value="Pathology">Pathology</option>
          <option value="Physiology">Physiology</option>
          <option value="Pharmacology">Pharmacology</option>
          <option value="Biochemistry">Biochemistry</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Microbiology">Microbiology</option>
          <option value="Immunology">Immunology</option>
          <option value="Gross Anatomy">Gross Anatomy</option>
          <option value="Embryology">Embryology</option>
          <option value="Histology">Histology</option>
          <option value="Cell Biology">Cell Biology</option>
          <option value="Behavioral Sciences">Behavioral Sciences</option>
          <option value="Genetics">Genetics</option>
        </select>

        <input
          type="text"
          name="textbook"
          id="InputPost_resourse"
          placeholder="Resourse"
        />

        <input
          type="text"
          name="page"
          id="InputPost_page"
          placeholder="Page Number"
        />
        <button
          id="InputPost_post_button"
          value="unclicked"
          onClick={props.postingPost}
        >
          post
        </button>
      </section>
      <Search
        searchPosts={props.searchPosts}
        RetrievingMyPosts={props.RetrievingMyPosts}
      />
    </article>
  );
};

export default InputForm;
