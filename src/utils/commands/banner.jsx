import figlet from 'figlet';
import { Fragment } from 'vue/jsx-runtime';
const config = {
  repo: ''
};

const bannerGen = async ({ font = 'DOS Rebel', text = 'Portfolio\n Terminal' } = {}) => {
  const fontFile = await $fetch('/api/getFonts', { method: 'POST', body: { font } });
  figlet.parseFont(font, fontFile);

  const bannerText = await figlet.text(
    text?.replace(/\\n/g, '\n'),
    {
      font: font,
      horizontalLayout: "fitted",
      verticalLayout: "fitted",
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
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
        className="whitespace-pre-wrap"
        style={{
          paddingTop: '1rem',
          gridTemplateRows: 'minmax(2rem, 20vmin) 1fr 5rem'
        }}
      >
        <pre className={`min-w-max`}
          style={{
            fontSize: "max(0.1rem, 2vmin)",
            lineHeight: 'normal',
          }}
        >
          {bannerText}
        </pre>
        <a className="text-[10px]">{`inpired by Cveinnt's Liveterm`}</a>
      </div>
      <div
        className="whitespace-pre-wrap text-xs sm:text-sm md:text-base w-fill max-w-full"
        style={{
          wordBreak: 'break-word'
        }}
      >
        <ul
          className='list-none text-xs sm:text-sm md:text-base'
          style={{ paddingLeft: '1rem' }}>
          <li style={{ paddingTop: '0.2rem' }}>
            {`Type 'help' to see the list of available commands.`}
          </li>
          <li style={{ paddingTop: '0.2rem' }}>
            {`Type 'fetchsum' to display summary.`}
          </li>
          <li style={{ paddingTop: '0.2rem' }}>
            {`Type 'repo' or click `}
            <u><a className="text-light-blue dark:text-dark-blue underline" href={config?.repo} target="_blank">here</a></u>
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
  const validOptions = ['--help', '--text', '--font', '--set'];
  if (args.includes('--help')) {
    return (<Fragment>
      <div className="whitespace-pre-wrap flex flex-col">
        <span>{`Welcome to Banner! These are the available commands that can be used:`}</span>
        <br />
        <span className="ml-4 max-w-sm">{`${validOptions.join(', ')}`}</span>
        <br />
        <span className="whitespace-pre-wrap">{`Entering 'banner --text=<text>' will alter the banners text. \nEntering 'banner --font=<font>' will alter the font.\nEntering 'banner --set' will save the current banner as default, \nalternatively 'banner --set=false' will reset the banner`}</span>
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
      case 'font': {
        if (!arg[1] || arg[1] === ' ') {
          errorTriggered = '--font';
          return;
        }
        bannerSettings.font = arg[1].trim();
        return;
      }
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
  if (errorTriggered === '--font') {
    const fonts = await $fetch('/api/getFonts');
    return (
      <Fragment>
        <div>
          <span className="whitespace-pre-wrap">{`No font was provided. Please select from the following fonts:`}</span>
          <br /><br />
          <span>{fonts.join(', ')}</span>
        </div>
      </Fragment>
    );
  }

  if (bannerSettings.saveBanner) {
    bannerCookie.value = bannerSettings;
  }
  if (bannerSettings.reset) {
    bannerCookie.value = null;
  }
  return await bannerGen(bannerSettings);

};