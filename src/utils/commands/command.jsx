// import font from 'figlet/importable-fonts/DOS Rebel';
import * as commandList from './index';
import { Fragment } from 'vue/jsx-runtime';


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

export const about = async () => {
  const config = await $fetch('/api/getRuntimeConfig').catch(err =>
    import('../config.json'));
  return (
    <Fragment>
      <div className="flex flex-col">
        <span>{`Hello, I am ${config.NAME}, and welcome to my portfolio!`}</span>
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
  const config = await $fetch('/api/getRuntimeConfig').catch(err =>
    import('../config.json'));
  window.open(config.GITHUB_REPO, '_blank');
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
  const config = await $fetch('/api/getRuntimeConfig').catch(err =>
    import('../config.json'));
  window.open(`mailto:${config.EMAIL}`, '_blank');
  return (
    <Fragment>
      <div>
        <span>{`Opening email to:${config.EMAIL}...`}</span>
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
  const config = await $fetch('/api/getRuntimeConfig').catch(err =>
    import('../config.json'));
  window.open(`https://github.com/${config.GITHUB}/`, '_blank');
  return (
    <Fragment>
      <div>
        <span>{`Opening ${config.GITHUB}'s github...`}</span>
      </div>
    </Fragment>
  );
};

export const linkedin = async () => {
  const config = await $fetch('/api/getRuntimeConfig').catch(err =>
    import('../config.json'));
  window.open(`https://www.linkedin.com/in/${config.LINKEDIN}/`, '_blank');
  return (
    <Fragment>
      <div>
        <span>{`Opening ${config.LINKEDIN}'s linkedin...`}</span>
      </div>
    </Fragment>
  );
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

// export const whoami = async (args) => {
//   return `${config.ps1_username}`;
// };

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