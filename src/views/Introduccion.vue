<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color: black")
      h1 Introducción
    p.mb-5(data-aos="fade-right") Estimado aprendiz, a través del siguiente video, podrá conocer los aspectos relevantes que tratará este componente:
    .row.justify-content-center
      .col-lg-10
        figure(data-aos="fade-left")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Rrr_nH_1GFI" title="Estados financieros" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
