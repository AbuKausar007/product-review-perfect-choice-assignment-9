import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <section className="text-justify w-4/5 m-auto py-3">
        <h1 className="question text-4xl font-semibold">
          Question: What is Context API?
        </h1>
        <p className="text-2xl answer">
          <b>
            <u>Answer</u>
          </b>
          : The Context API is a React structure that provides a way to pass
          data through the component tree without having to pass props down
          manually at every level of our component in a React application. This
          is the alternative to "prop drilling" or moving props from grandparent
          to child to parent, and so on. To work with Context API, first we need
          to create the context, which we can later use to create providers and
          consumers. Once that’s done, we can import the context and use it to
          create our provider. In provider, we initialize a state with some
          values, which you can share via value prop our provider component. To
          make the provider accessible to other components, we need to wrap our
          app with this context provider.
        </p>
      </section>
      <article className="text-justify w-4/5 m-auto py-3">
        <h1 className="question text-4xl font-semibold">
          Question: What is semantic tag?
        </h1>
        <p className="text-2xl answer">
          <b>
            <u>Answer</u>
          </b>
          : Semantic tag means tag with a meaning. A semantic element clearly
          describes its meaning to both the browser and the developer. By adding
          semantic tags in a document, user provide additional information about
          that document, which aids in communication. Specifically, semantic
          tags make it clear to the browser what the meaning of a page and its
          content is. That clarity is also communicated with search engines,
          ensuring that the right pages are delivered for the right queries. It
          has greater accessibility. People finds semantic elements easier to
          understand. Overall, semantic elements also lead to more consistent
          code. <br />
          Examples of non-semantic elements: 'div' and 'span' - Tells nothing
          about its content.
          <br />
          Examples of semantic elements: form, table, and article - Clearly
          defines its content.
        </p>
      </article>
    </div>
  );
};

export default Blogs;
