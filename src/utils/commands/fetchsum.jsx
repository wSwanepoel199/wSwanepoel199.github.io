import { Fragment } from "vue/jsx-runtime";

const fetchsum = async () => {
  const config = await $fetch('/api/getRuntimeConfig').catch(err =>
    import('../config.json'));

  console.log(config);
  //   {`
  //   |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
  //   | |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾| |
  //   | |       Portfolio       | |
  //   | |       Terminal        | |
  //   | |       >_              | |
  //   | |_______________________| |
  //   |___________________________|
  //   ____\\_____   []    _____/_____,
  //  /        /___________\\        /|
  // /_____________________________/ |
  // |  _ _ _            [-------] | |
  // |  o o o            [-------] | /
  // |_____________________________|/
  //   _______________________
  //  //̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅- //
  // / /̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-/̅-//
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`}
  return (
    <Fragment>
      <div className='flex flex-col items-start w-full'>
        {`fetchsum: summary display`}
        <div className='flex flex-col sm:flex-row items-center sm:justify-start w-full'>
          <div
            className=" "
            style={{
              // gridTemplateRows: 'minmax(1rem, 10vmin) 1fr 5rem'
            }}>
            <div
              className='whitespace-pre-wrap text-[max(1vmin,2.5vmin)] sm:text-[3wmin] md:text-base lg:text-xl leading-[normal] md:leading-[normal] lg:leading-[normal] tracking-tighter'
            >{`
   ___________________________
  |  _______________________  |
  | |                       | |
  | |      Portfolio        | |
  | |      Terminal         | |
  | |      >_               | |
  | |_______________________| |
  |___________________________|
  _____\\___    []    ___/_____
 /        /__________\\       /|
/___________________________/ |
|  _ _ _                    | |
|  o o o          [-------] | /
|___________________________|/
   _______________________
  //`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/ /
 / /`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`/`}<a style="text-decoration: underline">-</a>{`//
/______________________/`}</div>
          </div>

          <div className="whitespace-pre-wrap w-full sm:w-min my-auto ml-0 sm:ml-4 flex-grow-1">
            <ul className="">
              <li className="w-full border-y-light-foreground dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4 list-none" > ABOUT</li>
              <li className="px-4">{config.NAME}</li>
              <li className="px-4"><u><a href={`${config.RESUME}`} target="_blank">Resume</a></u></li>
              <li className="px-4"><u><a href={`${config.GITHUB_REPO}`} target="_blank">GitHub Repo</a></u></li>
              <li className="w-full border-y-light-foreground dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4 list-none" > CONTACT</li>
              <li className="px-4"><u><a href={`mailto:${config.EMAIL}`} target="_blank">{config.EMAIL}</a></u></li>
              <li className="px-4"><u><a href={`https://github.com/${config.GITHUB}`} target="_blank">github.com/{config.GITHUB}</a></u></li>
              <li className="px-4"><u><a href={`https://linkedin.com/in/${config.LINKEDIN}`} target="_blank">linkedin.com/in/{config.LINKEDIN}</a></u></li>
              {/* <li className="min-w-full border-y-light-foreground : dark:border-y-dark-foreground border-solid border-y-2 py-2 my-4  list-none" > DONATE</li>
              <li className="pl-2 md:pl-4"><u><a href={`${config.DONATE_PAYPAL}`} target="_blank">{config.DONATE_PAYPAL}</a></u></li> */}
            </ul>
          </div>
        </div>
      </div>
      <br />
    </Fragment>
  );
};

export default fetchsum;