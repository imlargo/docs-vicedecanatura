import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Salidas de campo',
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
			favicon: './public/favicon.png',
			customCss: [
		        './src/styles/global.css',
      		],
			social: {
				github: 'https://github.com/imlargo',
			},
			sidebar: [
				{
					label: 'Instructivos',
					items: [
						{
							label: "Docentes",
							items: [
								{ label: 'Proyeccion', link: '/instructivos/docente/proyeccion/' },
							]
						},

						{
							label: "UAB",
							items: [
								{ label: 'Proyeccion', link: '/instructivos/uab/proyeccion/' },
								{ label: 'Asignacion docente', link: '/instructivos/uab/asignacion/' },
							]
						},

						{
							label: "Areas curriculares",
							items: [
								{ label: 'Gestion de solicitudes', link: '/instructivos/areas/gestion/' },
								{ label: 'Actualizacion de datos', link: '/instructivos/areas/datos/' },
							]
						},
					],
				},
				{
					label: 'Proceso salidas de campo',
					items: [
						{ label: 'Proyeccion', link: '/proceso/proyeccion/' },
						{ label: 'Solicitud', link: '/proceso/solicitud/' },
					],
				},
				{
					label: 'Software',
					items: [
						{ label: 'Tech Stack', link: '/software/techstack/' },
					],
				},
			],
		}),
	],
});
