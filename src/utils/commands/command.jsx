import figlet from 'figlet';
import font from 'figlet/importable-fonts/DOS Rebel';
import * as commandList from './index';
import { Fragment } from 'vue/jsx-runtime';
import themes from '../../../theme';

const config = {
  repo: '',
  name: 'Will',
  email: 'contact@email.com',
  social: {
    github: 'wSwanepoel199',
    linkedin: 'wSwanepoel'
  }
};


export const help = async () => {
  const commands = ['clear', ...Object.keys(commandList)].sort().join(', ');
  return (
    <Fragment>
      <div className="whitespace-pre-wrap flex flex-col">
        <span>{`Welcome! The available commands are:`}</span>
        <br />
        <span className="ml-4 max-w-sm">{`${commands}`}</span>
        <br />
        <span>{`[tab]: trigger completion.\n[ctrl+l] or clear: clear terminal.\n`}</span>
        <span>{`Type 'fetchsum' to display summary.`}</span>
      </div>
    </Fragment>
  );
};

export const banner = async () => {
  figlet.parseFont("DOS Rebel", font);

  const bannerText = await figlet.text(
    "Portfolio\nTerminal",
    {
      font: "DOS Rebel",
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
        <a className="text-xs">{`inpired by Cveinnt's Liveterm`}</a>
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

export const about = async () => {

  return (
    <Fragment>
      <div className="flex flex-col">
        <span>{`Hello, I am ${config.name}, and welcome to my portfolio!`}</span>
        <span>{`To learn more about me, try one of the following commands:`}</span>
        <br />
        <div className="ml-4 flex flex-col">
          <span>{`'fetchsum' - returns a summary of my details.`}</span>
          {/* <span>{`'resume' - returns my most up to date resume.`}</span> */}
          <span>{`'readme' - returns my github README`}</span>
        </div>
        <br />
        <span>{`If you haven't, try 'help' to view all available commands.`}</span>
      </div>
    </Fragment>
  );
};

export const repo = async () => {
  window.open(`https://github.com/wSwanepoel199/terminalPortfolio`, '_blank');
  return (
    <Fragment>
      <div>
        <span>{`Opening GitHub repository...`}</span>
      </div>
    </Fragment>
  );
};

// export const resume = () => {
//   window.open('/resume_will.pdf', '_blank');
//   return (
//     <Fragment>
//       <span>{`Opening resume...`}</span>
//     </Fragment>
//   );
// };

export const email = async () => {
  window.open(`mailto:${config.email}`, '_blank');
  return (
    <Fragment>
      <div>
        <span>{`Opening email to:${config.email}...`}</span>
      </div>
    </Fragment>
  );
};

export const liveterm = async () => {
  window.open('https://github.com/Cveinnt/LiveTerm', '_blank');
  return (
    <Fragment>
      <span>{`Opening liveterm repo...`}</span>
    </Fragment>
  );
};

export const github = async () => {
  window.open(`https://github.com/${config.social.github}/`, '_blank');
  return (
    <Fragment>
      <div>
        <span>{`Opening ${config.social.github}'s github...`}</span>
      </div>
    </Fragment>
  );
};

export const linkedin = async () => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`, '_blank');
  return (
    <Fragment>
      <div>
        <span>{`Opening ${config.social.linkedin}'s linkedin...`}</span>
      </div>
    </Fragment>
  );
};

export const theme = async (options) => {
  const optionsAvailable = ['--help', '--select'];
  switch (options[0]) {
    case optionsAvailable[0]: {
      return (
        <>
          <div className='whitespace-pre-wrap text-xs sm:text-sm md:text-base'>
            {`Welcome to Theme!\nTheme allows you to alter the appearance of the terminal by selecting from a list of themes.
\nHere are all the available options that you can use:
\n  ${optionsAvailable.join(', ')}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n`}
          </div>
        </>
      );
    }
    case optionsAvailable[1]: {
      const validOptions = Object.keys(themes).sort();
      var t = '';
      const maxLength = Object.keys(themes).length;
      for (let i = 1; i <= maxLength; i++) {
        if (i === maxLength) {
          t += validOptions[i - 1] + '\n';
          // } else if (i % 7 === 0) {
          //   t += validOptions[i - 1] + '\n';
        } else {
          t += validOptions[i - 1] + ', ';
        }
      }
      if (!options[1]) {
        return (
          <>
            <div className='whitespace-pre-wrap'>
              {`No theme provided. Please select one of the following themes:
              \n  ${t}
              \nA theme can be applied by entering "theme ${optionsAvailable[1]} 'theme'"`}
            </div>
          </>
        );
      }
      if (!validOptions.includes(options[1])) {
        return (
          <>
            <div className='whitespace-pre-wrap'>
              {`'${options[1]}' is not a valid theme. Please select a valid theme:
              \n  ${t}`}
            </div>
          </>
        );
      }
      const themeSelected = options[1];
      // const html = document.querySelector('html').classList = [themeSelected];
      // const theme = await $fetch('/api/setTheme', { method: 'POST', body: { theme: themeSelected } });
      const theme = useCookie('theme');
      theme.value = themeSelected;
      return (
        <>
          <div className='whitespace-pre-wrap'>
            {`Setting theme to '${themeSelected}'`}
          </div>
        </>
      );

    }
    default: {
      return (
        <>
          <div className='whitespace-pre-wrap'>
            {`No valid options where provided. 
            \nEnter 'theme ${optionsAvailable[0]}' to see all available options.`}
          </div>
        </>
      );
    }
  }
};

// Search
export const google = async (args) => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return (<Fragment>
    <div>
      <span>{`Searching google for ${args.join(' ')}...`}</span>
    </div>
  </Fragment>);
};

export const duckduckgo = async (args) => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return (<Fragment>
    <div>
      <span>{`Searching duckduckgo for ${args.join(' ')}...`}</span>
    </div>
  </Fragment>);
};

export const bing = async (args) => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return (<Fragment>
    <div>
      <span>{`Searching bing for ${args.join(' ')}...seriously?`}</span>
    </div>
  </Fragment>);
};

export const reddit = async (args) => {
  if (args.length === 0) {
    return (<Fragment>
      <div className="whitespace-pre-wrap flex flex-col">
        <span>{`No valid options were provided.`}</span>
        <br />
        <span className="whitespace-pre-wrap">{`Enter 'reddit --help' to see all available options`}</span>
      </div>
    </Fragment>);
  }
  const validOptions = ['--help', '--search', '--type', '--sort'];
  if (args.includes('--help')) {
    return (<Fragment>
      <div className="whitespace-pre-wrap flex flex-col">
        <span>{`Welcome to Reddit! The available commands to search redditare:`}</span>
        <br />
        <span className="ml-4 max-w-sm">{`${validOptions.join(', ')}`}</span>
        <br />
        <span className="whitespace-pre-wrap">{`You are able to string multiple options together, for example: \n'reddit --search='SearchTerm' --type='link||comment||sr||user'`}</span>
      </div>
    </Fragment>);
  }
  const searchStringArray = args.join(' ').split('--').map((arg) => {
    const selection = arg.split('=');
    if (!validOptions.includes("--" + selection[0])) {
      return;
    }
    if (selection[0] === 'search') {
      return `q=` + selection[1];
    }
    if (selection[0] === 'type') {
      return `type=` + selection[1];
    }
    if (selection[0] === 'sort') {
      return `sort=` + selection[1];
    }
  });
  const searchString = searchStringArray.reduce((acc, val) => {
    if (!acc) {
      acc = val;
    } else if (val) {
      acc = acc + "&" + val;
    }
    return acc;
  });
  window.open(`https://www.reddit.com/search/?${searchString}`);
  return (<Fragment>
    <div>
      <span>{`Searching reddit for ${searchString}...`}</span>
    </div>
  </Fragment>);
};

// replicated linux commands

export const echo = async (args) => {
  const string = args.join(' ');
  return (<Fragment>
    <div className="whitespace-pre-wrap leading-[normal]">
      <pre className="whitespace-pre-wrap leading-[normal]">
        {`${string}`}
      </pre>
    </div>
  </Fragment>);
};

export const whoami = async (args) => {
  return `${config.ps1_username}`;
};

export const date = async () => {
  const date = new Date().toString();
  return (<Fragment>
    <div>
      <pre className="whitespace-pre-wrap leading-[normal] text-wrap break-words" >
        {`${date}`}
      </pre>
    </div>
  </Fragment>);
};