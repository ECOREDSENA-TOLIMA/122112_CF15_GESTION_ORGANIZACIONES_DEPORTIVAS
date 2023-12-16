<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: black") 1
      h1 Estados financieros básicos
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width: auto" ,alt='').m-auto
      .col-lg-8
        p Para el control financiero de una organización, se requiere elaborar los estados financieros, los cuales son unos documentos donde se proporcionan los informes periódicos sobre el estado económico de la compañía. Son de vital importancia en la toma de decisiones y en el diseño de estrategias que mejoren los resultados de la organización. Si los estados financieros no están elaborados correctamente, se puede afectar la toma de decisiones económicas e inducir a los errores, en especial, en el pago de impuestos; este documento es elaborado por un periodo de tiempo, de tal manera que se mantenga actualizado según los movimientos de la organización.
        .cajon.color-primario.p-4
          p.mb-0 Los estados financieros son documentos estructurados con el objetivo de tener la información sobre el estado financiero y el resultado de una persona o de la organización; los estados financieros son el reflejo de la contabilidad de la empresa y muestran la estructura económica de la misma.
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p Los estados financieros no solo son un concepto de la contabilidad financiera, son un instrumento fundamental para el diagnóstico patrimonial y económico de la empresa, pero también para las variaciones y evoluciones que se sufren en un periodo determinado, imprescindible en el direccionamiento estratégico y para el grupo administrativo de la organización, así como para los analistas y terceros (accionistas, inversionistas).
        p.mb-0 El estado de la situación financiera muestra, en unidades monetarias, la situación financiera de la organización en una fecha determinada; tiene como propósito mostrar los recursos económicos, los derechos que tienen los acreedores y la participación que poseen los accionistas. Por tanto, la situación financiera está representada por la relación que tienen los activos, los pasivos y el patrimonio.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width: auto" ,alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-lg-6.bg-c1
            .p-4.p-md-5
              figure.mb-4
                img(src='@/assets/curso/tema1/img1.svg', style="width: auto" ,alt='').m-auto
              p.mb-0 En Colombia, los estados financieros deben elaborarse bajo estándares internacionales de información financiera, por tal motivo, en caso de incumplimiento, acarrearían sanciones por irregularidad financiera.
          .col-lg-6.bg-c2
            .p-4.p-md-5
              figure.mb-4
                img(src='@/assets/curso/tema1/img2.svg', style="width: auto" ,alt='').m-auto
              p.mb-0 Estos documentos proporcionan información periódica sobre el estado o la administración de la organización, es decir, la información necesaria para la toma de decisiones determinantes en la empresa.
    p.mb-5 Los estados financieros se componen del balance general (activos, pasivos y patrimonio), el estado de resultados (ingresos, costos y gastos), estados de flujo de efectivo, estados de cambio de patrimonio neto y memoria.
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img3.png', style="width: auto" ,alt='').m-auto
      .col-lg-7
        p.mb-0 El balance general es un documento contable que informa sobre la situación de la empresa, está compuesto por tres conceptos muy utilizados dentro de los estados financieros: activos, pasivos, patrimonio neto. En los estados de resultados, se refleja cómo fue que se consiguió el estado de resultado de cada ejercicio, en un tiempo específico, de forma ordenada y detallada. Este es un documento que refleja el desempeño de la empresa; los principales rubros o cuentas que se incluyen son: ingresos, costos y gastos; en los estados financieros, se refleja el movimiento de efectivo o sus equivalentes dentro de la organización, las entradas de dinero son los ingresos y las salidas son los egresos; aquí se refleja el movimiento de la cuenta contable de caja y bancos.
    p.mb-5 La estimación directa muestra el efectivo neto de las operaciones, esta variable es muy importante para conocer la situación de la empresa, ya que refleja su liquidez. En los estados de flujos de efectivo, se muestran las fuentes, regularidad y uso de efectivo. A continuación, se invita a explorar la Figura1, que nos presenta los estados financieros básicos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1]. Estados financieros básicos
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema1/img3.svg', style="width: auto" ,alt='').m-auto
        figure.d-block.d-lg-none
          img(src='@/assets/curso/tema1/img3m.svg', style="width: auto" ,alt='').m-auto
    p.mb-5 En los estados financieros básicos, se pueden mencionar algunas de las características principales que incluyen el balance general y el estado de resultados. A continuación, se invita a revisar la infografía que contiene estas características.
    h2.text-center.mb-5 #[b Principales características de estados financieros básicos]
    .row.bg-c3
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-8
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/img5.svg', alt='Texto que describa la imagen')
                .tarjeta.color-acento-botones.p-3(x="23.5%" y="24.6%" numero="1")
                  figure
                    img(src='@/assets/curso/tema1/img6.svg', style="width: 900px" ,alt='').m-auto
                .tarjeta.color-acento-botones.p-3(x="76.2%" y="76.6%" numero="2")
                  figure
                    img(src='@/assets/curso/tema1/img7.svg', style="width: 900px" ,alt='').m-auto
      
</template>

<script>
export default {
  name: 'Tema1',
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
