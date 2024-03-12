<script setup lang="jsx">
import { render } from "vue";
import { Fragment } from "vue/jsx-runtime";

const history = useState("history");
const labelRef = ref();
const inputRef = ref();
const historyRef = ref();
const renderKey = ref(0);
const divFormatted = ref(false);

const reRender = () => {
  renderKey.value++;
};

let observer;

onMounted(() => {
  observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      // const cr = entry.contentRect;
      // console.log("Entry: ", entry);
      // console.log("Element: ", entry.target);
      // console.log("Element size: ", cr.width, cr.height);
      // console.log("Element padding: ", cr.top, cr.left);
      if (inputRef.value) {
        inputRef.value.forEach((el, index) => {
          const elLabel = labelRef.value[index];
          el.style.left = -elLabel.offsetWidth + "px";
          el.style.textIndent =
            el.offsetWidth <= elLabel.offsetWidth + 10
              ? "0px"
              : elLabel.offsetWidth + 5 + "px";
          el.style.marginTop =
            el.offsetWidth <= elLabel.offsetWidth + 10 ? "20px" : "0px";
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

  if (!divFormatted.value && inputRef.value) {
    inputRef.value.forEach((el, index) => {
      const elLabel = labelRef.value[index];
      el.style.left = -elLabel.offsetWidth + "px";
      el.style.textIndent =
        el.offsetWidth <= elLabel.offsetWidth + 10
          ? "0px"
          : elLabel.offsetWidth + 5 + "px";
      el.style.marginTop =
        el.offsetWidth <= elLabel.offsetWidth + 10 ? "20px" : "0px";
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
        <div classList="flex flex-row" v-if="entry.command">
          <div ref="labelRef" id="label" class="flex-shrink z-10">
            <UserIdentifier />
          </div>
          <div
            ref="inputRef"
            class="relative flex-grow min-w-full mr-1 break-words"
          >
            {{ entry.command }}
          </div>
        </div>
        <div classList="mb-2 leading-[normal]">
          <RenderOutput :output="entry.output" />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.shrunk {
  margin-top: 20px;
  text-indent: 0;
}
</style>
