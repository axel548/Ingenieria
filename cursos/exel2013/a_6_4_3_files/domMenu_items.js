// {{{ domMenu_main: data

domMenu_data.set('domMenu_main', new Hash(
    1, new Hash(
        'contents', '<img src="menu/vista_6_izq.gif" width="6" height="35" />',
        '', '',
        'uri', '',
        'target', '_self',
        'statusText', ''
		),
    2, new Hash(
        'contents', '<img src="menu/nombre_curso.gif" height="35" />',
        'contentsHover', '<img src="menu/nombre_curso_pulsado.gif" height="35" />',
        'uri', 'index.htm',
        'statusText', 'Índice detallado',
        1, new Hash(
            'contents', '&Iacute;ndice detallado',
            'uri', 'index.htm',
            'statusText', 'Indice detallado'
        ),
	2, new Hash(
			'contents', '1. Introducci&oacute;n. Elementos de Excel',
			'uri', 't_1_1.htm',
			'statusText', '1. Introducci&oacute;n. Elementos de Excel'),
	3, new Hash(
			'contents', '2. Empezando a trabajar con Excel',
			'uri', 't_2_1.htm',
			'statusText', '2. Empezando a trabajar con Excel'),
	4, new Hash(
			'contents', '3. Operaciones con archivos',
			'uri', 't_3_1.htm',
			'statusText', '3. Operaciones con archivos'),
	5, new Hash(
			'contents', '4. Manipulando celdas',
			'uri', 't_4_1.htm',
			'statusText', '4. Manipulando celdas'),
	6, new Hash(
			'contents', '5. Los datos',
			'uri', 't_5_1.htm',
			'statusText', '5. Los datos'),
	7, new Hash(
			'contents', '6. Las funciones',
			'uri', 't_6_1.htm',
			'statusText', '6. Las funciones'),
	8, new Hash(
			'contents', '7. Formato de celdas',
			'uri', 't_7_1.htm',
			'statusText', '7. Formato de celdas'),
	9, new Hash(
			'contents', '8. Cambios de estrutura',
			'uri', 't_8_1.htm',
			'statusText', '8. Cambios de estrutura'),
	10, new Hash(
			'contents', '9. Insertar y eliminar elementos',
			'uri', 't_9_1.htm',
			'statusText', '9. Insertar y eliminar elementos'),
	11, new Hash(
			'contents', '10. Correcci&oacute;n ortogr&aacute;fica',
			'uri', 't_10_1.htm',
			'statusText', '10. Correcci&oacute;n ortogr&aacute;fica'),
	12, new Hash(
			'contents', '11. Impresi&oacute;n',
			'uri', 't_11_1.htm',
			'statusText', '11. Impresi&oacute;n'),
	13, new Hash(
			'contents', '12. Gr&aacute;ficos',
			'uri', 't_12_1.htm',
			'statusText', '12. Gr&aacute;ficos'),
	14, new Hash(
			'contents', '13. Im&aacute;genes, diagramas y t&iacute;tulos',
			'uri', 't_13_1.htm',
			'statusText', '13. Im&aacute;genes, diagramas y t&iacute;tulos'),
	15, new Hash(
			'contents', '14. Esquemas y vistas',
			'uri', 't_14_1.htm',
			'statusText', '14. Esquemas y vistas'),
	16, new Hash(
			'contents', '15. Importar y exportar datos en Excel',
			'uri', 't_15_1.htm',
			'statusText', '15. Importar y exportar datos en Excel'),
	17, new Hash(
			'contents', '16. Tablas de Excel',
			'uri', 't_16_1.htm',
			'statusText', '16. Tablas de Excel'),
	18, new Hash(
			'contents', '17. Las tablas din&aacute;micas',
			'uri', 't_17_1.htm',
			'statusText', '17. Las tablas din&aacute;micas'),
	19, new Hash(
			'contents', '18. Macros',
			'uri', 't_18_1.htm',
			'statusText', '18. Macros'),
	20, new Hash(
			'contents', '19. Compartir documentos',
			'uri', 't_19_1.htm',
			'statusText', '19. Compartir documentos')
		),
    3, hashCursos,
    4, new Hash(
        'contents', '<img src="menu/vista_5_retroceder_81.gif" width="81" height="35" />',
        'contentsHover', '<img src="menu/vista_5a_retroceder_81.gif" width="81" height="35" title="Página anterior"/>',
        'uri', 'javascript:irAnterior();',
        'statusText', 'Página anterior'
		),
    5, new Hash(
        'contents', '<img src="menu/vista_5_avanzar_81.gif" width="81" height="35" />',
        'contentsHover', '<img src="menu/vista_5a_avanzar_81.gif" width="81" height="35" title="Página siguiente"/>',
        'uri', 'javascript:irSiguiente();',
        'statusText', 'Página siguiente'),
  6, hashMasopcionesAyu,
    7, new Hash(
        'contents', '<img src="menu/vista_5_home.gif" width="51" height="35" />',
        'contentsHover', '<img src="menu/vista_6a_home.gif" width="51" height="35" title="Inicio"/>',
        'uri', 'javascript:irHome();',
        'statusText', 'Volver al índice'),
	8, new Hash(
        'contents', '<img src="menu/vista_6_der.gif" width="6" height="35" />',
        '', '',
        'uri', '',
        'target', '_self',
        'statusText', ''
		)
));

// }}}
// {{{ domMenu_main: settings

domMenu_settings.set('domMenu_main', new Hash(
    'subMenuWidthCorrection', -1,
    'verticalSubMenuOffsetX', -1,
    'verticalSubMenuOffsetY', -1,
    'horizontalSubMenuOffsetX', domLib_isOpera ? 0 : 1,
    'horizontalSubMenuOffsetY', domLib_isOpera ? -1 : 0,
    'openMouseoverMenuDelay', 100,
    'closeMouseoutMenuDelay', 300,
    'expandMenuArrowUrl', 'menu/arrow.gif',
    'baseUri', 'http://www.aulaclic.es'
));

// }}}
