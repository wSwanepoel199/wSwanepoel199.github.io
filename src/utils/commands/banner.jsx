import figlet from 'figlet';
import font from 'figlet/importable-fonts/DOS Rebel';
import { Fragment } from 'vue/jsx-runtime';

const bannerGen = async ({ fontSelect = 'DOS Rebel', text = 'Portfolio\n Terminal' } = {}) => {

  const config = await $fetch('/api/getRuntimeConfig').catch(err =>
    import('../config.json'));
  figlet.parseFont(fontSelect, font);

  const bannerText = await figlet.text(
    text?.replace(/\\n/g, '\n'),
    {
      font: fontSelect,
      // horizontalLayout: "full",
      verticalLayout: "controlled smushing",
    },
    function (err, data) {
      if (err) {
        // console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      return data;
    }
  );

  return (
    <Fragment>
      <div
        id="banner"
        className="pt-4"
      >
        <div className={`whitespace-pre-wrap h-max max-w-full leading-[normal] md:leading-[normal] lg:leading-[normal] text-[1.5vw] md:text-sm lg:text-base`}
        >
          {bannerText}
        </div>
        <sup><a className="text-[10px]">{`inpired by Cveinnt's Liveterm`}</a></sup>
      </div>
      <div
        className="whitespace-pre-wrap text-xs sm:text-sm md:text-base w-fill max-w-full "
        style={{
          wordBreak: 'break-word'
        }}
      >
        <ul
          className='list-none text-xs sm:text-sm md:text-base pl-4'>
          <li className='pt-1'>
            {`Type 'banner --help' to see banner customization options.`}
          </li>
          <li className='pt-1'>
            {`Type 'help' to see the list of available commands.`}
          </li>
          <li className='pt-1'>
            {`Type 'fetchsum' to display summary.`}
          </li>
          <li className='pt-1'>
            {`Type 'repo' or click `}
            <u><a className="text-light-blue dark:text-dark-blue underline" href={config?.GITHUB_REPO} target="_blank">here</a></u>
            {` for the Github repository.`}
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export const banner = async (args = []) => {
  const bannerCookie = useCookie('banner');
  if (args.length === 0) {
    const banner = await bannerGen(bannerCookie.value);
    return banner;
  }
  const validOptions = ['--help', '--text', '--set'];
  if (args.includes('--help')) {
    return (<Fragment>
      <div className="whitespace-pre-wrap flex flex-col">
        <span>{`Welcome to Banner! These are the available commands that can be used:`}</span>
        <br />
        <span className="ml-4 max-w-sm">{`${validOptions.join(', ')}`}</span>
        <br />
        <span className="whitespace-pre-wrap">{`Entering 'banner --text=<text>' will alter the banners text. \nEntering 'banner --set' will save the current banner as default, \nalternatively 'banner --set=false' will reset the banner`}</span>
      </div>
    </Fragment>);
  }

  const argWithInput = args.join(' ').split('--').map((arg) => {
    const argSplit = arg.split('=');
    if (!validOptions.includes('--' + argSplit[0])) {
      return;
    }
    if (argSplit.length <= 1) {
      argSplit.push(undefined);
    }
    return argSplit;
  });
  const bannerSettings = {};
  let errorTriggered = false;
  argWithInput.forEach((arg, index) => {
    if (!arg || !arg[0]) {
      return;
    }
    switch (arg[0]) {
      case 'text': {
        if (!arg[1] || arg[1] === ' ') {
          errorTriggered = '--text';
          return;
        }
        bannerSettings.text = arg[1].trim();
        return;
      }
      // case 'font': {
      //   if (!arg[1] || arg[1] === ' ') {
      //     errorTriggered = '--font';
      //     return;
      //   }
      //   bannerSettings.font = arg[1].trim();
      //   return;
      // }
      case 'set': {
        if (arg[1] === 'false') {
          bannerSettings.reset = true;
          return;
        }
        bannerSettings.saveBanner = true;
        return;
      }
      default: {
        return;
      }
    }
  });

  if (errorTriggered === '--text') {
    return (
      <Fragment>
        <div>
          <span className="whitespace-pre-wrap">{`No text was provided. \nPlease do not use the '--text' option if no text will be provided`}</span>
          <br />
        </div>
      </Fragment>
    );
  }
  // if (errorTriggered === '--font') {
  //   const fonts = await $fetch('/api/getFonts');
  //   return (
  //     <Fragment>
  //       <div>
  //         <span className="whitespace-pre-wrap">{`No font was provided. Please select from the following fonts:`}</span>
  //         <br /><br />
  //         <span>{fonts.join(', ')}</span>
  //       </div>
  //     </Fragment>
  //   );
  // }

  if (bannerSettings.saveBanner) {
    bannerCookie.value = bannerSettings;
  }
  if (bannerSettings.reset) {
    bannerCookie.value = null;
  }
  return await bannerGen(bannerSettings);

};