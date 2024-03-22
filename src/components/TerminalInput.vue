<script setup>
import { shell, checkCommandExists, handleTabComplete } from "~/utils";
import { banner } from "~/utils/commands";

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
    console.log(entries);
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
  if (endRef.value.wrapperRef) observer.observe(endRef.value.wrapperRef);
});

onUpdated(() => {
  commandCheckRef.value = checkCommandExists(terminalModal.value);

  if (commandRef.value) observer.observe(commandRef.value);
  if (endRef.value.wrapperRef) observer.observe(endRef.value.wrapperRef);

  containerRef.scrollTo(0, containerRef.scrollHeight);
  if (inputRef.value) {
    const el = inputRef.value;
    const elLabel = labelRef.value;
    const elLabelEndPoint =
      endRef.value.endRef || elLabel.children[0].children[3];

    setElDimentions(el);
    setCommandWrap(el, elLabelEndPoint);
  }
});

const onChange = (e) => {
  const { target } = e;
  setElDimentions(target);
  setCommand(terminalModal.value);
};
const onSubmit = async (e) => {
  if (!terminalModal.value) return;

  if (e.key === "Enter" || e.keyCode === 13) {
    setLastCommandIndex(0);
    await shell(command.value, setHistory, clearHistory, setCommand);
    containerRef.scrollTo(0, containerRef.scrollHeight);
  }
  terminalModal.value = command.value;
};

const onCtrl = async (e) => {
  if (e.key === "c") {
    setCommand("");
    setHistory("");
    setLastCommandIndex(0);
  }
  if (e.key === "l") {
    clearHistory();
  }
  terminalModal.value = command.value;
  reRender();
};

const onTab = (e) => {
  if (e.key === "Tab") {
    handleTabComplete(command.value, setCommand);
  }
  terminalModal.value = command.value;
  reRender();
};

const onArrowKeys = (e) => {
  const commands = history.value
    .map(({ command }) => command)
    .filter((command) => command);

  if (e.key === "ArrowUp") {
    if (!commands.length) {
      return;
    }
    const index = lastCommandIndex.value + 1;
    if (index <= commands.length) {
      setLastCommandIndex(index);
      setCommand(commands[commands.length - index]);
    }
  }

  if (e.key === "ArrowDown") {
    if (!commands.length) {
      return;
    }
    const index = lastCommandIndex.value - 1;
    if (index > 0) {
      setLastCommandIndex(index);
      setCommand(commands[commands.length - index]);
    } else {
      setLastCommandIndex(0);
      setCommand("");
    }
  }

  terminalModal.value = command.value;
};

defineExpose({
  inputRef,
});
</script>

<template>
  <div :key="renderKey" id="terminal-input" ref="commandRef">
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
        @keydown.ctrl.c.prevent="onCtrl"
        @keydown.ctrl.l.prevent="onCtrl"
        @keydown.tab.prevent="onTab"
        @keydown.enter.prevent="onSubmit"
        @keydown.up.prevent="onArrowKeys"
        @keydown.down.prevent="onArrowKeys"
        @input.prevent="onChange"
        autofocus
        autocomplete="off"
        spellcheck="false"
      >
      </textarea>
    </section>
  </div>
</template>
