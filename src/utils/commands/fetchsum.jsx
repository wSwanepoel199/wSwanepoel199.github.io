import { Fragment } from "vue/jsx-runtime";

const fetchsum = async () => {
  const config = await $fetch('/api/getRuntimeConfig');
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
            >{`
      |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
      | |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾| |
      | |       Portfolio       | |
      | |       Terminal        | |
      | |       >_              | |
      | |_______________________| |
      |___________________________|
      ____\\_____   []    _____/_____,
     /        /___________\\        /|
    /_____________________________/ |
    |  _ _ _            [-------] | | 
    |  o o o            [-------] | /
    |_____________________________|/
      _______________________
     //̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅- //
    / /̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-//
    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`}</pre>
          </div>

          <div className="whitespace-pre-wrap w-full mx-auto md:mx-0 my-4 sm:my-auto flex-grow-1">
            <ul className="">
              <li className="min-w-full border-y-light-foreground : dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4 list-none" > ABOUT</li>
              <li className="pl-4">{config.NAME}</li>
              <li className="pl-4"><u><a href={`${config.RESUME}`} target="_blank">Resume</a></u></li>
              <li className="pl-4"><u><a href={`${config.GITHUB_REPO}`} target="_blank">GitHub Repo</a></u></li>
              <li className="min-w-full border-y-light-foreground : dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4 list-none" > CONTACT</li>
              <li className="pl-4"><u><a href={`mailto:${config.EMAIL}`} target="_blank">{config.EMAIL}</a></u></li>
              <li className="pl-4"><u><a href={`https://github.com/${config.GITHUB}`} target="_blank">github.com/{config.GITHUB}</a></u></li>
              <li className="pl-4"><u><a href={`https://linkedin.com/in/${config.LINKEDIN}`} target="_blank">linkedin.com/in/{config.LINKEDIN}</a></u></li>
              {/* <li className="min-w-full border-y-light-foreground : dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4  list-none" > DONATE</li>
              <li className="pl-2 md:pl-4"><u><a href={`${config.DONATE_PAYPAL}`} target="_blank">{config.DONATE_PAYPAL}</a></u></li> */}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default fetchsum;