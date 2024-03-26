<script setup>
const history = useState("history");
const labelRef = ref();
const inputRef = ref();
const historyRef = ref();
const endRef = ref();
const renderKey = ref(0);
const divFormatted = ref(false);

const reRender = () => {
  renderKey.value++;
};

let observer;

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

onMounted(() => {
  observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      if (inputRef.value) {
        inputRef.value.forEach((el, index) => {
          const elLabel = labelRef.value[index];

          setCommandWrap(el, elLabel.children[0].children[3]);
          return el;
        });
      }
    });
  });
  if (history.value.length >= 1) {
    reRender();
  }
});

onUpdated(() => {
  if (historyRef.value) observer.observe(historyRef.value);
  if (endRef.value?.wrapperRef) observer.observe(endRef.value.wrapperRef);

  if (!divFormatted.value && inputRef.value) {
    inputRef.value.forEach((el, index) => {
      const elLabel = labelRef.value[index];

      setCommandWrap(el, elLabel.children[0].children[3]);

      return el;
    });
  }
});

onUnmounted(() => {
  if (renderKey.value && renderKey.value > 0) renderKey.value = 0;
});
</script>

<template>
  <div
    :key="renderKey"
    ref="historyRef"
    class="w-full"
    id="command_history"
    v-if="renderKey"
  >
    <section>
      <div v-for="entry in history" :key="entry">
        <div classList="flex flex-row" v-if="entry.id >= 1 || entry.command">
          <div
            ref="labelRef"
            id="label"
            class="flex-shrink flex-1 z-10 relative min-w-full max-w-max break-words text-wrap"
          >
            <UserIdentifier ref="endRef" />
          </div>
          <div
            ref="inputRef"
            class="relative flex-grow min-w-full mr-1 break-words"
          >
            {{ entry.command }}
          </div>
        </div>
        <div classList="mb-2 ">
          <RenderOutput
            v-if="typeof entry.output === 'object'"
            :output="entry.output"
          />
        </div>
      </div>
    </section>
  </div>
</template>
