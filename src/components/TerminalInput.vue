<script setup>
import { shell } from "~/utils/shell";

const props = defineProps({
  containerRef: {
    type: Object,
  },
  setCommand: {
    type: Function,
  },
  setHistory: {
    type: Function,
  },
  clearHistory: {
    type: Function,
  },
  setLastCommandIndex: {
    type: Function,
  },
});
const {
  containerRef,
  setCommand,
  setHistory,
  clearHistory,
  setLastCommandIndex,
} = props;

const history = useState("history");
const command = useState("command");
const lastCommandIndex = useState("lastCommandIndex");

console.log(props);
const inputRef = ref();
const [terminalModal, modifier] = defineModel("input");
console.log(terminalModal);
const onChange = (e) => {
  // console.log(history.value, command.value, lastCommandIndex.value, setCommand);
  // console.log(e);
  // console.log(terminalModal);
  // console.log(terminalModal.value);
  const { target } = e;
  target.style.removeProperty("height");
  target.style.padding = "0px";
  target.style.height = target.scrollHeight + "px";
  target.style.removeProperty("padding");
  setCommand(terminalModal.value);
};
const onSubmit = async (e) => {
  // console.log(e);
  const commands = history.value
    .map(({ command }) => command.value)
    .filter((command) => command);

  console.log(commands, history.value);
  if (!terminalModal.value) return;
  console.log(terminalModal.value);
  if (e.ctrlKey && e.key === "c") {
    e.preventDefault();
    setCommand("");
    setHistory("");
    setLastCommandIndex(0);
  }
  if (e.key === "Enter" || e.keyCode === 13) {
    console.log("submitting", terminalModal.value, [containerRef]);
    setLastCommandIndex(0);
    await shell(command.value, setHistory, clearHistory, setCommand);
    window.scrollTo(0, containerRef.scrollHeight);
    e.target.value = null;
  }
};

defineExpose({
  inputRef,
});
</script>

<template>
  <div>
    <section>
      <p>Terminal Input</p>
    </section>
    <label><UserIdentifier /></label>
    <textarea
      ref="inputRef"
      type="text"
      class="bg-light-background dark:bg-dark-background"
      v-model.trim="terminalModal"
      @input.prevent="onChange"
      @keydown.enter.prevent="onSubmit"
      @keydown.ctrl="onSubmit"
    ></textarea>
  </div>
</template>
