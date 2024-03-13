import { Fragment } from "vue/jsx-runtime";


export const readme = async () => {
  const data = await $fetch('/api/getReadme');

  return (
    <Fragment>
      <div className="whitespace-pre-wrap">
        <span>{`Opening GitHub README...`}</span>
        <br />
        ${data}
      </div>
    </Fragment>
  );
};