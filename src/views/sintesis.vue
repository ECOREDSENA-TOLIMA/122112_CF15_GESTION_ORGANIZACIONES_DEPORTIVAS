<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En resumen, en el componente formativo se han estudiado los fundamentos de los estados financieros básicos en contabilidad, incluyendo el registro de operaciones comerciales, la aplicación de estándares técnicos y la identificación de las etapas en un ciclo contable. Se ha resaltado la importancia de seguir metodologías y normativas vigentes para asegurar la precisión en la preparación de estos estados financieros. Además, se ha enfatizado el papel crucial de la ética en la labor del contador, quien tiene la responsabilidad de brindar fe pública en su trabajo, contribuyendo así a la transparencia y la integridad en el ámbito financiero. A continuación, se presenta un mapa conceptual que resume la información de este proceso.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
