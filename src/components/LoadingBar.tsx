export default defineComponent({
  name: "LoadingBar",
  props: {
    throttle: {
      type: Number,
      default: 200,
    },
    duration: {
      type: Number,
      default: 2000,
    },
    height: {
      type: Number,
      default: 3,
    },
    color: {
      type: [String, Boolean],
      default:
        "text-light-foreground dark:text-dark-foreground bg-light-foreground dark:bg-dark-foreground",
    },
    estimatedProgress: {
      type: Function as unknown as () => (
        duration: number,
        elapsed: number
      ) => number,
      required: false,
    },
  },
  setup: (props) => {
    const { progress, isLoading } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress,
    });
    const barContainer = ref(undefined);
    const barLoader = ref(undefined);
    const barBackground = ref(undefined);

    const percentage = computed(
      () => Math.round((progress.value + Number.EPSILON) * 100) / 100
    );

    onUpdated(() => {
      if (barContainer.value) {
        barContainer.value.focus();
      }
    });

    return () => (
      <div
        ref={barContainer}
        class={`flex flex-row flex-nowrap justify-center w-full ${
          isLoading.value ? `` : `hidden`
        }`}
      >
        <p class={`pl-2`}>{`[`}</p>
        <div class={`relative w-full flex flex-nowrap`}>
          <div
            ref={barLoader}
            class={`overflow-hidden z-10 absolute left-0 top-0 ${props.color}`}
            style={`width: ${percentage.value}%;`}
            // style={`width: ${50}%; background: ${props.color};`}
          >
            test
          </div>
          <div
            ref={barBackground}
            class={`bar-background h-[${props.height}px] w-full relative top-0`}
          ></div>
        </div>
        <p class={`min-w-20`}>{`] ${percentage.value}%`}</p>
      </div>
    );
  },
});
