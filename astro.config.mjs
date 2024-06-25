import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentacion salidas de campo',
			social: {
				github: 'https://github.com/imlargo',
			},
			sidebar: [
				{
					label: 'Instructivos',
					items: [
						{ label: 'Proyeccion para UAB', link: '/instructivos/uab/' },
						{ label: 'Proyeccion para docente', link: '/instructivos/docente/' },
						{ label: 'Gestion de solicitudes', link: '/instructivos/gestion/' },
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
