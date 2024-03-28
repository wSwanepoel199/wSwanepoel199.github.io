import { Fragment } from "vue/jsx-runtime";
import markdownit from 'markdown-it';
import config from '../config.json';


export const readme = async () => {

  const data = await GET({
    url: config.GITHUB_README_URL,
    headers: {
      'Accept': 'application/vnd.github+json',
    },
  });

  const md = markdownit('commonmark', {
    linkify: true,
    typographer: true,
  });
  const result = md.render(data);
  return (
    <Fragment>
      <div className="whitespace-pre-wrap">
        <span>{`Displaying GitHub README...`}</span>
        <br />
        <div innerHTML={result}>
        </div>
      </div>
    </Fragment>
  );
};

export const projects = async () => {

  const data = await GET({
    url: config.GITHUB_REPOSITORIES_URL,
    headers: {
      'Accept': 'application/vnd.github+json',
    },
  });

  return (
    <Fragment>
      <div>
        <span className='text-light-foreground dark:text-dark-foreground'>GitHub Projects: </span>
        <table >
          <tbody >
            {data.map((project) => {
              return (
                <tr className={`flex flex-col sm:flex-row mt-4`}>
                  <td className={`text-left align-top w-full sm:w-1/3 break-all text-pretty`}>{project.name}</td>
                  <td className={`text-left align-top w-full sm:w-full`}>- <a className="text-light-blue dark:text-dark-blue underline break-words break-all text-wrap" href={project.html_url} target="_blank">{project.html_url}</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
