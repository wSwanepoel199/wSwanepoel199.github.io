

export const useHistory = (defaultValues = []) => {
  const history = useState('history', () => defaultValues);
  const command = useState("command", () => "");
  const lastCommandIndex = useState("lastCommandIndex", () => 0);

  const setHistory = (value) => {
    const history = useState("history");
    const command = useState('command');
    history.value.push({
      id: history.value.length,
      date: new Date(),
      command: command.value,
      output: value,
    });
  };
  const clearHistory = () => {
    const history = useState("history");
    history.value.length = 0;
  };
  const setCommand = (value) => {
    const command = useState("command");
    command.value = value;
  };
  const setLastCommandIndex = (index) => {
    const lastCommandIndex = useState("lastCommandIndex");
    lastCommandIndex.value = index;
  };
  return reactive({
    history,
    command,
    lastCommandIndex,
    setHistory,
    clearHistory,
    setCommand,
    setLastCommandIndex,
  });
};
