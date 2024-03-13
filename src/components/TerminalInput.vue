<script setup>
import { shell, checkCommandExists } from "~/utils";

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

const [terminalModal, modifier] = defineModel("input");

const inputRef = ref();
const labelRef = ref();
const commandRef = ref();
const endRef = ref();
const divFormatted = ref(false);
const renderKey = ref(0);
const commandCheckRef = ref(checkCommandExists(terminalModal.value));

const classObject = computed(() => ({
  "text-light-green dark:text-dark-green": commandCheckRef.value,
  "text-light-foreground dark:text-dark-foreground":
    !commandCheckRef.value || command.value === "",
}));

const reRender = () => {
  renderKey.value++;
};

const setElDimentions = (el) => {
  el.style.removeProperty("height");
  el.style.padding = "0px";
  el.style.height = el.scrollHeight + "px";
  el.style.removeProperty("padding");
};

const setCommandWrap = (el, elLabelEndPoint) => {
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
};

let observer;

onMounted(() => {
  observer = new ResizeObserver((entries) => {
    entries.forEach(async (entry) => {
      if (inputRef.value) {
        const el = inputRef.value;
        const elLabel = labelRef.value;
        const elLabelEndPoint =
          endRef.value.endRef || elLabel.children[0].children[3];

        setElDimentions(el);
        setCommandWrap(el, elLabelEndPoint);
      }
    });
  });

  if (inputRef.value) {
    const el = inputRef.value;
    const elLabel = labelRef.value;
    const elLabelEndPoint =
      endRef.value.endRef || elLabel.children[0].children[3];

    setElDimentions(el);
    setCommandWrap(el, elLabelEndPoint);
  }

  if (commandRef.value) observer.observe(commandRef.value);
});

onUpdated(() => {
  commandCheckRef.value = checkCommandExists(terminalModal.value);

  if (commandRef.value) observer.observe(commandRef.value);
  containerRef.scrollTo(0, containerRef.scrollHeight);
});

const onChange = (e) => {
  const { target } = e;
  setElDimentions(target);
  setCommand(terminalModal.value);
};
const onSubmit = async (e) => {
  const commands = history.value
    .map(({ command }) => command.value)
    .filter((command) => command);

  if (!terminalModal.value) return;
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
    e.target.value = null;
    containerRef.scrollTo(0, containerRef.scrollHeight);
  }
};

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
        :class="classObject"
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
