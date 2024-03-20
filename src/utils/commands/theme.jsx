import themes from './themes';

export const theme = async (options) => {
  const optionsAvailable = ['--help', '--select'];
  switch (options[0]) {
    case optionsAvailable[0]: {
      return (
        <>
          <div className='whitespace-pre-wrap text-xs sm:text-sm md:text-base flex flex-col'>
            <span>{`Welcome to Theme!\nTheme allows you to alter the appearance of the terminal by selecting from a list of themes.`}</span>
            <br />
            <span>{`Here are all the available options that you can use:`}</span>
            <br />
            <span className='pl-4 max-w-sm'>{`  ${optionsAvailable.join(', ')}`}</span>
            <br />
            <span>{`[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.`}</span>
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