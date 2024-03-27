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
        "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)",
    },
    estimatedProgress: {
      type: Function as unknown as () => (
        duration: number,
        elapsed: number
      ) => number,
      required: false,
    },
  },
  render: (props: any) => {
    // console.log("duration", props.duration);
    // console.log("throttle", props.throttle);
    const { progress, isLoading } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress,
    });
    const barContainer = ref(undefined);
    const barLoader = ref(undefined);

    return (
      <div
        ref={barContainer}
        class={`w-full ${isLoading.value ? `` : `hidden`}`}
      >
        <div
          ref={barLoader}
          class={`h-[${props.height}px]`}
          style={{
            width: `${progress.value}%`,
            background: props.color,
          }}
        >
          Loading Bar Test...
        </div>
      </div>
    );
  },
});
