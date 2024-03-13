import { Fragment } from "vue/jsx-runtime";
import markdownit from 'markdown-it';

export const readme = async () => {
  const data = await $fetch('/api/getReadme');
  const md = markdownit('commonmark', {
    linkify: true,
    typographer: true,
  });
  const result = md.render(data);
  return (
    <Fragment>
      <div className="whitespace-pre-wrap">
        <span>{`Opening GitHub README...`}</span>
        <br />
        <div innerHTML={result}>
        </div>
      </div>
    </Fragment>
  );
};