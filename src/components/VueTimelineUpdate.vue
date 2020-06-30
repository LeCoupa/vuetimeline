<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
article(
  :class=`[
    "gb-vue-timeline-update",
    "gb-vue-timeline-update--" + computedTheme,
    "js-vue-timeline-update",
    {
      "gb-vue-timeline-update--is-last": isLast
    }
  ]`
)
  .gb-vue-timeline-update__left
    span.gb-vue-timeline-update__ago {{ ago }}

  .gb-vue-timeline-update__center
    base-number(
      :color="color"
      :icon="icon"
      :theme="computedTheme"
      class="gb-vue-timeline-update__bullet"
      icon-size="16px"
      size="small"
    )

    span.gb-vue-timeline-update__line

  div(
    @click="onContentClick"
    :class=`[
      "gb-vue-timeline-update__right",
      {
        "gb-vue-timeline-update__right--clickable": $listeners.click
      }
    ]`
  )
    .gb-vue-timeline-update__information
      .gb-vue-timeline-update__meta
        base-badge(
          v-if="category"
          :color="color"
          :filled="true"
          :theme="computedTheme"
          class="gb-vue-timeline-update__category"
          size="small"
        ) {{ category }}

        span.gb-vue-timeline-update__ago {{ ago }}

      h2(
        v-html="title"
        @click="onTitleClick"
        :class=`[
          "gb-vue-timeline-update__title",
          {
            "gb-vue-timeline-update__title--clickable": $listeners["click:title"]
          }
        ]`
      )

    img(
      v-if="thumbnail"
      @click="onThumbnailClick"
      :class=`[
        "gb-vue-timeline-update__thumbnail",
        {
          "gb-vue-timeline-update__thumbnail--clickable": $listeners["click:thumbnail"]
        }
      ]`
      :src="thumbnail"
    )

    p(
      v-if="description"
      v-html="description"
      class="gb-vue-timeline-update__description"
    )

    div(
      v-if="$slots.default"
      class="gb-vue-timeline-update__slot"
    )
      slot(
        name="default"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import { BaseBadge, BaseNumber } from "@growthbunker/vuedarkmode"
import { format } from "timeago.js"

// PROJECT: MIXINS
import ThemeMixin from "../mixins/ThemeMixin.js"

export default {
  components: {
    BaseBadge,
    BaseNumber
  },

  mixins: [ThemeMixin],

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
        return ["black", "blue", "green", "orange", "purple", "red", "turquoise", "white"].includes(
          x
        )
      }
    },
    date: {
      type: Date,
      required: true
    },
    dateString: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
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
      return this.dateString ? this.dateString : format(this.date)
    }
  },

  mounted() {
    if (this.animation) {
      const ScrollReveal = require("scrollreveal").default

      ScrollReveal().reveal(this.$el, {
        container: this.animationContainer,
        duration: this.animationDuration
      })
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onContentClick(event) {
      this.$emit("click", event)
    },

    onThumbnailClick(event) {
      this.$emit("click:thumbnail", event)
    },

    onTitleClick(event) {
      this.$emit("click:title", event)
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_mq.scss";

// VARIABLES
$c: ".gb-vue-timeline-update";

#{$c} {
  display: flex;
  overflow: hidden;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;

  a {
    text-decoration: underline;
  }

  #{$c}__left,
  #{$c}__right  {
    #{$c}__ago {
      font-size: 14px;
      user-select: none;
    }
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

    #{$c}__information {
      display: flex;
      flex-direction: column;
      margin-top: 4px;

      #{$c}__meta {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        #{$c}__category {
          align-self: flex-start;
          flex: 0 0 auto;
          margin-right: 10px;
        }

        #{$c}__ago {
          line-height: 24px; // Size of the category to align horizontally
        }
      }

      #{$c}__title {
        flex: 1;
        margin: 0 0 4px;
        text-transform: uppercase;
        font-weight: bold;

        &--clickable {
          cursor: pointer;
        }
      }
    }

    #{$c}__description {
      margin: 0;
    }

    #{$c}__thumbnail {
      box-sizing: border-box;
      margin: 6px 0 12px;
      max-width: 100%;
      border-width: 1px;
      border-style: solid;
      border-radius: 6px;
      transition: all 250ms linear;
      user-select: none;

      &--clickable {
        cursor: pointer;
      }
    }

    #{$c}__slot {
      margin-top: 20px;
    }

    &--clickable {
      cursor: pointer;
    }
  }

  // --> BOOLEANS <--

  &--is-last {
    #{$c}__right {
      padding-bottom: 20px;
    }
  }

  // --> THEMES <--

  @each $theme in $themes {
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      color: mdg($theme, "fonts", "default", "primary");

      a {
        color: mdg($theme, "fonts", "default", "primary");
      }

      #{$c}__left,
      #{$c}__right  {
        #{$c}__ago {
          color: mdg($theme, "fonts", "default", "secondary");
        }
      }

      #{$c}__center {
        #{$c}__bullet {
          box-shadow: 0 1px 5px 0 mdg($theme, "shadows", "default", "primary");
        }

        #{$c}__line {
          background-color: mdg($theme, "borders", "default", "primary");
        }
      }

      #{$c}__right {
        #{$c}__information {
          #{$c}__meta {
            #{$c}__category {
              box-shadow: 0 1px 5px 0 mdg($theme, "shadows", "default", "primary");
            }
          }
        }

        #{$c}__thumbnail {
          border-color: mdg($theme, "borders", "reverse", "primary");
          box-shadow: 0 1px 5px 0 mdg($theme, "shadows", "default", "primary");
        }

        #{$c}__description {
          color: mdg($theme, "fonts", "default", "secondary");
        }
      }

      // --> BOOLEANS <--
      &#{$c}--is-last {
        #{$c}__center {
          #{$c}__line {
            background: linear-gradient(
              mdg($theme, "borders", "default", "primary") 50%,
              rgba(mdg($theme, "borders", "default", "primary"), 0)
            );
          }
        }
      }
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
        display: inline-block;
        line-height: 32px; // Size of the badge to align horizontally
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

      #{$c}__information {
        flex-direction: row;

        #{$c}__meta {
          #{$c}__ago {
            display: none;
          }
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
