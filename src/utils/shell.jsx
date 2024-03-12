import * as commands from "./commands";

import { Fragment } from "vue/jsx-runtime";

export const shell = async (
  command,
  setHistory,
  clearHistory,
  setCommand
) => {
  const args = command.split(" ");
  args[0] = args[0].toLowerCase();

  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(commands).indexOf(args[0] === -1)) {
    setHistory(<Fragment>
      <span>
        {`\nshell: command not found: ${args[0]}. \n\nTry 'help' to get started.`}
      </span>
    </Fragment>);
  } else {
    const output = await commands[args[0]](args.slice(1));
    setHistory(output);
  }
  setCommand('');
};