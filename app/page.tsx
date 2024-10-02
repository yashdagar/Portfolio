import { BlogPosts } from "app/components/posts";
import { Background } from "./components/background";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hi, I'm Yash Dagar
      </h1>
      <p className="mb-4 flex text-justify">
        I'm a dedicated Flutter developer with a strong focus on creating
        intuitive and visually appealing mobile applications. My projects
        demonstrate my ability to work with various technologies, including
        Firebase, REST APIs. <br />
        <br />
        Check out my projects on GitHub and feel free to reach out for
        collaboration or to discuss potential opportunities.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
