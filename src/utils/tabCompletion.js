import * as commands from './commands';

export const handleTabComplete = (command, setCommand) => {
  const commandList = Object.keys(commands).filter((entry) => {
    return entry.startsWith(command);
  });

  if (commandList.length === 1) {
    setCommand(commandList[0]);
  }
};