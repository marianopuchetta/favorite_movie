<template>

  <ins class='adsbygoogle' :style="adStyle" :data-ad-client="adClient" :data-ad-slot="adSlot"><h1>hekii</h1></ins>
</template>
<script>
export default {
  props: {
    adStyle: {
      type: String,
      required: false,
      default: 'display:block'
    },
    adClient: {
      type: String,
      required: false,
      default: 'ca-pub-7781491819210330'
    },
    adSlot: {
      type: String,
      required: false,
      default: '3791641209'
    }
  },
  mounted () {
    (adsbygoogle = window.adsbygoogle || []).push({})
  }
}
// eslint-disable-next-line
</script>
