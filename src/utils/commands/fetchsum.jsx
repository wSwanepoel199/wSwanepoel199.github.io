import { Fragment } from "vue/jsx-runtime";
const config = {
  readmeUrl: "https://raw.githubusercontent.com/cveinnt/cveinnt/master/README.md",
  title: "LiveTerm",
  name: "Will",
  social: {
    "github": "wSwanepoel199",
    "linkedin": "wswanepoel"
  },
  email: "contact@email.com",
  repo: "https://github.com/Cveinnt/LiveTerm",
  resume_url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Resume.pdf",
  donate_urls: {
    paypal: "https://paypal.me/cveinnt",
  },

};
const fetchsum = async () => {

  return (
    <Fragment>
      <div className='flex flex-col items-start'>
        {`fetchsum: summary display`}
        <div className='flex flex-row flex-wrap sm:flex-nowrap max-w-full'>
          <div
            className="whitespace-pre-wrap m-auto sm:mx-0 flex-grow-1"
            style={{
              // gridTemplateRows: 'minmax(1rem, 10vmin) 1fr 5rem'
            }}>
            <pre
              className=' leading-[normal]'
              style={{
                fontSize: "max(0.1rem, 2.5vmin)",
                lineHeight: 'normal',
              }}
            >
              {`
          |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
          | |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾| |
          | |                       | |
          | |     >Portfolio        | |
          | |      Terminal         | |
          | |                       | |
          | |_______________________| |
          |___________________________|
      ______\\_____     []     ______/_____,
     /          /______________\\         /|
    /__________________________________,/ |
    |  _ _ _                 [-------]  | | 
    |  o o o                 [-------]  | /
    |___________________________________|/
  ________________________________________
 //̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/ //
/ /̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅- //
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`}
            </pre>
          </div>

          <div className="whitespace-pre-wrap w-full mx-auto sm:ml-5 md:mx-0 my-4 sm:my-auto flex-grow-1">
            <ul className="list-disc sm:ml-5">
              <li className="min-w-full border-y-light-foreground : dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4 list-none" > ABOUT</li>
              <li>{config.name}</li>
              <li><u><a href={`${config.resume_url}`} target="_blank">resume</a></u></li>
              <li><u><a href={`${config.repo}`} target="_blank">GitHub repo</a></u></li>
              <li className="min-w-full border-y-light-foreground : dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4 list-none" > CONTACT</li>
              <li><u><a href={`mailto:${config.email}`} target="_blank">{config.email}</a></u></li>
              <li><u><a href={`https://github.com/${config.social.github}`} target="_blank">github.com/{config.social.github}</a></u></li>
              <li><u><a href={`https://linkedin.com/in/${config.social.linkedin}`} target="_blank">linkedin.com/in/{config.social.linkedin}</a></u></li>
              <li className="min-w-full border-y-light-foreground : dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4  list-none" > DONATE</li>
              <li><u><a href={`${config.donate_urls.paypal}`} target="_blank">{config.donate_urls.paypal}</a></u></li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default fetchsum;