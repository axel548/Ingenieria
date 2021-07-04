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
			'contents', '1. Mi primer documento',
			'uri', 't_1_1.htm',
			'statusText', '1. Mi primer documento'),
	3, new Hash(
			'contents', '2. El entorno de Word 2013',
			'uri', 't_2_1.htm',
			'statusText', '2. El entorno de Word 2013'),
	4, new Hash(
			'contents', '3. Edici&oacute;n b&aacute;sica',
			'uri', 't_3_1.htm',
			'statusText', '3. Edici&oacute;n b&aacute;sica'),
	5, new Hash(
			'contents', '4. Guardar y abrir documentos',
			'uri', 't_4_1.htm',
			'statusText', '4. Guardar y abrir documentos'),
	6, new Hash(
			'contents', '5. Ortograf&iacute;a y gram&aacute;tica',
			'uri', 't_5_1.htm',
			'statusText', '5. Ortograf&iacute;a y gram&aacute;tica'),
	7, new Hash(
			'contents', '6. Formato del documento',
			'uri', 't_6_1.htm',
			'statusText', '6. Formato del documento'),
	8, new Hash(
			'contents', '7. Estilos',
			'uri', 't_7_1.htm',
			'statusText', '7. Estilos'),
	9, new Hash(
			'contents', '8. Dise&ntilde;o de p&aacute;gina',
			'uri', 't_8_1.htm',
			'statusText', '8. Dise&ntilde;o de p&aacute;gina'),
	10, new Hash(
			'contents', '9. Impresi&oacute;n',
			'uri', 't_9_1.htm',
			'statusText', '9. Impresi&oacute;n'),
	11, new Hash(
			'contents', '10. Tablas',
			'uri', 't_10_1.htm',
			'statusText', '10. Tablas'),
	12, new Hash(
			'contents', '11. Im&aacute;genes y gr&aacute;ficos',
			'uri', 't_11_1.htm',
			'statusText', '11. Im&aacute;genes y gr&aacute;ficos'),
	13, new Hash(
			'contents', '12. Organigramas y diagramas',
			'uri', 't_12_1.htm',
			'statusText', '12. Organigramas y diagramas'),
	14, new Hash(
			'contents', '13. Plantillas',
			'uri', 't_13_1.htm',
			'statusText', '13. Plantillas'),
	15, new Hash(
			'contents', 'M&aacute;s temas...',
			'uri', '',
			'statusText', 'M&aacute;s temas...',

	1, new Hash(
			'contents', '14. Combinar correspondencia',
			'uri', 't_14_1.htm',
			'statusText', '14. Combinar correspondencia'),
	2, new Hash(
			'contents', '15. Esquemas',
			'uri', 't_15_1.htm',
			'statusText', '15. Esquemas'),
	3, new Hash(
			'contents', '16. Documentos maestros',
			'uri', 't_16_1.htm',
			'statusText', '16. Documentos maestros'),
	4, new Hash(
			'contents', '17. Tablas de contenidos, ...',
			'uri', 't_17_1.htm',
			'statusText', '17. Tablas de contenidos, ...'),
	5, new Hash(
			'contents', '18. Marcadores, referencias ...',
			'uri', 't_18_1.htm',
			'statusText', '18. Marcadores, referencias ...'),
	6, new Hash(
			'contents', '19. Seguridad',
			'uri', 't_19_1.htm',
			'statusText', '19. Seguridad'),
	7, new Hash(
			'contents', '20. Macros',
			'uri', 't_20_1.htm',
			'statusText', '20. Macros'),
	8, new Hash(
			'contents', '21. Compartir documentos',
			'uri', 't_21_1.htm',
			'statusText', '21. Compartir documentos'),
	9, new Hash(
			'contents', '22. Word e internet',
			'uri', 't_22_1.htm',
			'statusText', '22. Word e internet'),
	10, new Hash(
			'contents', '23. P&aacute;ginas web con Word',
			'uri', 't_23_1.htm',
			'statusText', '23. P&aacute;ginas web con Word'),
	11, new Hash(
			'contents', '24. Publicar en un blog con Word',
			'uri', 't_24_1.htm',
			'statusText', '24. Publicar en un blog con Word')
		)),
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
