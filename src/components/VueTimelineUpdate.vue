<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
article(
  :class=`[
    "c-vue-timeline-update",
    "js-vue-timeline-update",
    {
      "c-vue-timeline-update--is-last": isLast
    }
  ]`
)
  .c-vue-timeline-update__left
    span.c-vue-timeline-update__ago {{ ago }}

  .c-vue-timeline-update__center
    base-number(
      :color="color"
      :icon="icon"
      class="c-vue-timeline-update__bullet"
      icon-size="16px"
      size="small"
    )

    span.c-vue-timeline-update__line

  .c-vue-timeline-update__right
    .c-vue-timeline-update__header
      base-badge(
        v-if="category"
        :color="color"
        :filled="true"
        class="c-vue-timeline-update__category"
        size="small"
      ) {{ category }}

      h2(
        v-html="title"
        class="c-vue-timeline-update__title"
      )

    img(
      v-if="thumbnail"
      :src="thumbnail"
      class="c-vue-timeline-update__thumbnail"
    )

    p(
      v-html="description"
      class="c-vue-timeline-update__description"
    )

    div(
      v-if="$slots.default"
      class="c-vue-timeline-update__slot"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import { BaseBadge, BaseNumber } from "@growthbunker/vuedarkmode";
import { format } from "timeago.js";

export default {
  components: {
    BaseBadge,
    BaseNumber
  },

  props: {
    animation: {
      type: Boolean,
      default: true
    },
    animationContainer: {
      type: String,
      default: null
    },
    animationDuration: {
      type: Number,
      default: 1500
    },
    category: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return [
          "black",
          "blue",
          "green",
          "orange",
          "purple",
          "red",
          "turquoise",
          "white"
        ].includes(x);
      }
    },
    date: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    isLast: {
      type: Boolean,
      default: false
    },
    thumbnail: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    }
  },

  computed: {
    ago() {
      return format(this.date);
    }
  },

  mounted() {
    if (this.animation) {
      const ScrollReveal = require("scrollreveal").default;

      ScrollReveal().reveal(".js-vue-timeline-update", {
        container: this.animationContainer,
        duration: this.animationDuration
      });
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "src/assets/stylesheets/settings/_settings.colors.scss";
@import "src/assets/stylesheets/tools/_tools.mq.scss";

// VARIABLES
$c: ".c-vue-timeline-update";

#{$c} {
  display: flex;
  overflow: hidden;
  color: $white;

  a {
    color: $white;
    text-decoration: underline;
  }

  #{$c}__left {
    display: none;
  }

  #{$c}__center {
    position: relative;
    flex: 0 0 auto;
    margin-right: 30px;
    margin-left: 16px;

    #{$c}__bullet {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    #{$c}__line {
      display: inline-block;
      margin-top: 32px;
      width: 1px;
      height: 100%;
      background-color: $oxford-blue;
    }
  }

  #{$c}__right {
    flex: 1;
    padding-bottom: 40px;

    #{$c}__title,
    #{$c}__description {
      font-size: 16px;
      line-height: 26px;
    }

    #{$c}__header {
      display: flex;
      flex-direction: column;
      margin-top: 4px;

      #{$c}__category {
        align-self: flex-start;
        flex: 0 0 auto;
        margin-bottom: 10px;
      }

      #{$c}__title {
        flex: 1;
        margin: 0 0 4px;
        text-transform: uppercase;
        font-weight: bold;
      }
    }

    #{$c}__description {
      margin: 0;
    }

    #{$c}__thumbnail {
      margin: 6px 0 12px;
      max-width: 100%;
      user-select: none;
    }

    #{$c}__description {
      color: $regent-st-blue;
    }

    #{$c}__slot {
      margin-top: 20px;
    }
  }

  // --> BOOLEANS <--

  &--is-last {
    #{$c}__center {
      #{$c}__line {
        background: linear-gradient($oxford-blue 50%, rgba($oxford-blue, 0));
      }
    }

    #{$c}__right {
      padding-bottom: 20px;
    }
  }
}

// --> BREAKPOINT: TABLET <--

@include mq($from: tablet) {
  #{$c} {
    #{$c}__left {
      display: block;
      flex: 0 0 auto;
      width: 120px;
      text-align: right;

      #{$c}__ago {
        color: $regent-st-blue;
        font-size: 14px;
        line-height: 32px; // Size of the badge to align horizontally
        user-select: none;
      }
    }

    #{$c}__center {
      margin-right: 40px;
      margin-left: 40px;
    }

    #{$c}__right {
      #{$c}__title,
      #{$c}__description {
        font-size: 18px;
        line-height: 28px;
      }

      #{$c}__header {
        flex-direction: row;

        #{$c}__category {
          margin-right: 10px;
        }

        #{$c}__title {
          margin-bottom: 8px;
        }
      }

      #{$c}__thumbnail {
        margin: 8px 0 16px;
      }
    }
  }
}
</style>
