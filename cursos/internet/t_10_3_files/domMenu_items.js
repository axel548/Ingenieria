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
			'contents', '1. Introducci&oacute;n',
			'uri', 't_1_1.htm',
			'statusText', '1. Introducci&oacute;n'),
	3, new Hash(
			'contents', '2. Conexi&oacute;n a Internet',
			'uri', 't_2_1.htm',
			'statusText', '2. Conexi&oacute;n a Internet'),
	4, new Hash(
			'contents', '3. Los navegadores',
			'uri', 't_3_1.htm',
			'statusText', '3. Los navegadores'),
	5, new Hash(
			'contents', '4. Los buscadores',
			'uri', 't_4_1.htm',
			'statusText', '4. Los buscadores'),
	6, new Hash(
			'contents', '5. Correo electr&oacute;nico',
			'uri', 't_5_1.htm',
			'statusText', '5. Correo electr&oacute;nico'),
	7, new Hash(
			'contents', '6. Comunicarse on-line',
			'uri', 't_6_1.htm',
			'statusText', '6. Comunicarse on-line'),
	8, new Hash(
			'contents', '7. Foros y Grupos de discusi&oacute;n',
			'uri', 't_7_1.htm',
			'statusText', '7. Foros y Grupos de discusi&oacute;n'),
	9, new Hash(
			'contents', '8. Comprar en Internet',
			'uri', 't_8_1.htm',
			'statusText', '8. Comprar en Internet'),
	10, new Hash(
			'contents', '9. Aprender en Internet',
			'uri', 't_9_1.htm',
			'statusText', '9. Aprender en Internet'),
	11, new Hash(
			'contents', '10. Seguridad en Internet',
			'uri', 't_10_1.htm',
			'statusText', '10. Seguridad en Internet'),
	12, new Hash(
			'contents', '11. Blogs y microblogs',
			'uri', 't_11_1.htm',
			'statusText', '11. Blogs y microblogs'),
	13, new Hash(
			'contents', '12. Web 2.0 y Redes sociales',
			'uri', 't_12_1.htm',
			'statusText', '12. Web 2.0 y Redes sociales')
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
