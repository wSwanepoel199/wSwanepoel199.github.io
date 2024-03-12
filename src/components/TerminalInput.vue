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
const endRef = ref();
const divFormatted = ref(false);
const renderKey = ref(0);

const [terminalModal, modifier] = defineModel("input");
console.log(terminalModal);

const reRender = () => {
  renderKey.value++;
};
const onChange = (e) => {
  // console.log(history.value, command.value, lastCommandIndex.value, setCommand);
  console.log(e);
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
    // console.log("entries", entries);
    entries.forEach((entry) => {
      // console.log(indentAmount.value, dropInput.value);
      // console.log(labelRef.value, inputRef.value);
      // const cr = entry.contentRect;
      // console.log("Entry: ", entry);
      // console.log("Element: ", entry.target);
      // console.log("Element size: ", cr.width, cr.height);
      // console.log("Element padding: ", cr.top, cr.left);
      if (inputRef.value) {
        const el = inputRef.value;
        const elLabel = labelRef.value;
        const elLabelEndPoint = endRef.value.endRef;
        const indent =
          el.offsetWidth <=
          elLabelEndPoint.offsetWidth + elLabelEndPoint.offsetLeft + 10;

        el.style.removeProperty("height");
        el.style.padding = "0px";
        el.style.height = el.scrollHeight + "px";
        el.style.removeProperty("padding");

        el.style.left = -el.offsetWidth + "px";
        el.style.textIndent = indent
          ? "0px"
          : elLabelEndPoint.offsetWidth + elLabelEndPoint.offsetLeft + 5 + "px";
        el.style.marginTop = indent
          ? elLabelEndPoint.offsetTop + elLabelEndPoint.offsetHeight + "px"
          : elLabelEndPoint.offsetTop + "px";
      }
    });
  });

  // console.log([labelRef.value, inputRef.value]);
  if (inputRef.value) {
    const el = inputRef.value;
    const elLabel = labelRef.value;
    const elLabelEndPoint = endRef.value.endRef;
    const indent =
      el.offsetWidth <=
      elLabelEndPoint.offsetWidth + elLabelEndPoint.offsetLeft + 10;

    el.style.left = -el.offsetWidth + "px";
    el.style.textIndent = indent
      ? "0px"
      : elLabelEndPoint.offsetWidth + elLabelEndPoint.offsetLeft + 5 + "px";
    el.style.marginTop = indent
      ? elLabelEndPoint.offsetTop + elLabelEndPoint.offsetHeight + "px"
      : elLabelEndPoint.offsetTop + "px";
  }

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
    <section class="flex flex-row items-start min-w-full">
      <label
        ref="labelRef"
        for="command-input"
        class="flex-shrink flex-1 z-10 relative min-w-full break-words text-wrap"
      >
        <UserIdentifier ref="endRef" />
      </label>
      <textarea
        ref="inputRef"
        id="command-input"
        type="text"
        class="flex-1 bg-light-background dark:bg-dark-background relative flex-grow min-w-full mr-1 focus:outline-none resize-none break-words text-wrap"
        v-model.trim="terminalModal"
        @input.prevent="onChange"
        @keydown.enter.prevent="onSubmit"
        @keydown.ctrl="onSubmit"
        autofocus
        autocomplete="off"
        spellcheck="false"
      >
      </textarea>
    </section>
  </div>
</template>
