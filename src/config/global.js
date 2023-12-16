export default {
  global: {
    componenteFormativo: 'Estados financieros básicos',
    descripcionCurso:
      'En este componente formativo, se abordarán los aspectos relacionados con los estados financieros básicos en las organizaciones; asimismo, se dará a conocer el balance del evento, proyecciones financieras, indicadores, cuentas de resultados y, como elemento fundamental, la ética en el manejo de la información contable.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estados financieros básicos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura y proyecciones del estado financiero',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Notas a los estados financieros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ética en el manejo de la información contable',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Estados financieros básicos.',
      referencia:
        'Actualícese Video. (2019). <i>Estados financieros que deben presentar las empresas de los grupos 1, 2 y 3 [Video]</i>. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/ZMzzJpQhhTU',
    },
    {
      tema: '5. Ética en el manejo de la información contable.',
      referencia:
        'Consejo de Normas Internacionales de Ética para Contadores. (2009). <i>Código de ética para profesionales de la contabilidad</i>. International Federation of Accountants.',
      tipo: 'Documento',
      link:
        'https://www.ifac.org/system/files/publications/files/codigo-de-etica-para-profesionales-de-la-contabilidad.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Balance',
      significado:
        'informe financiero contable que refleja la situación económica y financiera de una empresa en un momento determinado.',
    },
    {
      termino: 'Cuentas',
      significado:
        'elemento básico y central en la contabilidad y en los servicios de pagos. También es la mínima unidad contable capaz de resumir un hecho económico.',
    },
    {
      termino: 'Finanzas',
      significado: 'conjunto de actividades que tienen relación con el dinero.',
    },
    {
      termino: 'Indicadores',
      significado:
        'instrumento que provee información sobre una determinada condición o el logro de una cierta situación, actividad o resultado.',
    },
    {
      termino: 'Proyección',
      significado:
        'pronóstico de diversas variables económicas que parten de un análisis macroeconómico con base en la información estadística del sector real, fiscal, balanza de pagos e internacional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ayala, S. y Fino, G. (2015). <i>Contabilidad básica general, un enfoque administrativo y de control interno</i>. Corporación Universitaria Republicana.',
      link: '',
    },
    {
      referencia:
        'Hatzacorsian, V. (2003). <i>Fundamentos de Contabilidad</i>. Thomson.',
      link: '',
    },
    {
      referencia:
        'Ibarra, J., Granado, M. y Amador, M. (2004). <i>Principios de la Contabilidad</i>. Universidad de Guadalajara',
      link: '',
    },
    {
      referencia:
        'Romero, J. (2007). <i>Principios de Contabilidad</i>. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Sevilla, A. (2015). <i>Estados financieros</i>. Economipedia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Tatiana Cristina Vargas Ossa',
          cargo: 'Instructora',
          centro: 'Regional Antioquia - Centro de servicios de Salud',
        },
        {
          nombre: 'Camilo Andrés Aramburo Parra',
          cargo: 'Profesional experto temático',
          centro: 'Regional Antioquia - Centro de servicios de Salud',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Bogotá - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
