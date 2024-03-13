import * as commands from './commands';

export const checkCommandExists = (command) => {
  const commandList = ['clear', ...Object.keys(commands)];
  return commandList.indexOf(command?.split(' ')[0].toLowerCase()) !== -1;
};