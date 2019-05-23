<template>
  <div class="observer">
    <slot></slot>
  </div>
</template>

<script>
  import inView from 'element-in-view'
  export default {
    props: ['options'],
    data () {
      const options = this.options || {}
      const observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          this.$nextTick(() => this.$emit('intersect'))
        }
      }, options)
      return { observer }
    },
    methods: {
      checkInView () {
        if (inView(this.$el)) {
          this.$emit('intersect')
        }
      }
    },
    mounted () {
      this.observer.observe(this.$el)
      this.checkInView()
    },
    updated () {
      // for firefox, need to check immediately
      this.checkInView()
      // for chrome, need to render it first
      setTimeout(this.checkInView, 0)
    },
    destroyed () {
      this.observer.disconnect()
    }
  }
</script>