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
const labelRef = ref();
const commandRef = ref();
const divFormatted = ref(false);
const renderKey = ref(0);

const [terminalModal, modifier] = defineModel("input");
console.log(terminalModal);

const reRender = () => {
  renderKey.value++;
};
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

let observer;

onMounted(() => {
  observer = new ResizeObserver((entries) => {
    console.log("entries", entries);
    entries.forEach((entry) => {
      // console.log(indentAmount.value, dropInput.value);
      // console.log(labelRef.value, inputRef.value);
      const cr = entry.contentRect;
      console.log("Entry: ", entry);
      console.log("Element: ", entry.target);
      console.log("Element size: ", cr.width, cr.height);
      console.log("Element padding: ", cr.top, cr.left);
      if (inputRef.value) {
        const el = inputRef.value;
        const elLabel = labelRef.value;
        console.log([el.offsetWidth, elLabel.offsetWidth]);
        el.style.left = -elLabel.offsetWidth + "px";
        el.style.textIndent =
          el.offsetWidth <= elLabel.offsetWidth + 10
            ? "0px"
            : elLabel.offsetWidth + 5 + "px";
        el.style.marginTop =
          el.offsetWidth <= elLabel.offsetWidth + 10 ? "20px" : "0px";
      }
    });
  });

  console.log([labelRef.value, inputRef.value]);
  if (inputRef.value) {
    const el = inputRef.value;
    const elLabel = labelRef.value;
    console.log([el.offsetWidth, elLabel.offsetWidth]);
    el.style.left = -elLabel.offsetWidth + "px";
    el.style.textIndent =
      el.offsetWidth <= elLabel.offsetWidth + 10
        ? "0px"
        : elLabel.offsetWidth + 5 + "px";
    el.style.marginTop =
      el.offsetWidth <= elLabel.offsetWidth + 10 ? "20px" : "0px";
  }
  // if (labelRef.value && inputRef.value) {
  //   console.log(labelRef.value, inputRef.value);
  //   const indentArray = labelRef.value.map((el) => el.offsetWidth);
  //   // indentAmount.value =
  //   const dropArray = inputRef.value.map(
  //     (el, index) => el.offsetWidth <= indentAmount.value[index]
  //   );
  //   // dropInput.value =
  //   console.log(indentArray, dropArray);
  // }

  if (commandRef.value) observer.observe(commandRef.value);
});

onUpdated(() => {
  if (commandRef.value) observer.observe(commandRef.value);

  console.log(inputRef.value);
});

defineExpose({
  inputRef,
});
</script>

<template>
  <div id="terminal-input" ref="commandRef">
    <section class="flex flex-row max-w-full">
      <label ref="labelRef" class="flex-shrink z-10">
        <UserIdentifier />
      </label>
      <textarea
        ref="inputRef"
        type="text"
        class="bg-light-background dark:bg-dark-background relative flex-grow min-w-full mr-1 focus:outline-none break-words text-wrap resize-none"
        v-model.trim="terminalModal"
        @input.prevent="onChange"
        @keydown.enter.prevent="onSubmit"
        @keydown.ctrl="onSubmit"
        autofocus
        autocomplete="off"
        spellcheck="false"
      ></textarea>
    </section>
  </div>
</template>
