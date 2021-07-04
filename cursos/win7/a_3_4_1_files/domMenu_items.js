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
			'contents', '1. Novedades en Windows 7',
			'uri', 't_1_1.htm',
			'statusText', '1. Novedades en Windows 7'
			),
	3, new Hash(
			'contents', '2. El sistema operativo Windows 7',
			'uri', 't_2_1.htm',
			'statusText', '2. El sistema operativo Windows 7'
			),
	4, new Hash(
			'contents', '3. El escritorio y la barra de tareas',
			'uri', 't_3_1.htm',
			'statusText', '3. El escritorio y la barra de tareas'
			),
	5, new Hash(
			'contents', '4. El Explorador de Windows',
			'uri', 't_4_1.htm',
			'statusText', '4. El Explorador de Windows'
			),
	6, new Hash(
			'contents', '5. La B&uacute;squeda',
			'uri', 't_5_1.htm',
			'statusText', '5. La B&uacute;squeda'
			),
	7, new Hash(
			'contents', '6. La papelera de reciclaje',
			'uri', 't_6_1.htm',
			'statusText', '6. La papelera de reciclaje'
			),
	8, new Hash(
			'contents', '7. Aplicaciones incluidas',
			'uri', 't_7_1.htm',
			'statusText', '7. Aplicaciones incluidas'
			),
	9, new Hash(
			'contents', '8. Reproductor de Windows Media',
			'uri', 't_8_1.htm',
			'statusText', '8. Reproductor de Windows Media'
			),
	10, new Hash(
			'contents', '9. La ayuda de Windows',
			'uri', 't_9_1.htm',
			'statusText', '9. La ayuda de Windows'
			),
	11, new Hash(
			'contents', '10. La impresora',
			'uri', 't_10_1.htm',
			'statusText', '10. La impresora'
			),
	12, new Hash(
			'contents', '11. Personalizar el entorno',
			'uri', 't_11_1.htm',
			'statusText', '11. Personalizar el entorno'
			),
	13, new Hash(
			'contents', '12. Configurar el rat&oacute;n y el panel t&aacute;ctil',
			'uri', 't_12_1.htm',
			'statusText', '12. Configurar el rat&oacute;n y el panel t&aacute;ctil'
			),
	14, new Hash(
			'contents', '13. Agregar o quitar programas',
			'uri', 't_13_1.htm',
			'statusText', '13. Agregar o quitar programas'
			),
	15, new Hash(
			'contents', '14. Agregar nuevo hardware',
			'uri', 't_14_1.htm',
			'statusText', '14. Agregar nuevo hardware'
			),
	16, new Hash(
			'contents', '15. Usuarios y Control parental',
			'uri', 't_15_1.htm',
			'statusText', '15. Usuarios y Control parental'
			),
	17, new Hash(
			'contents', '16. Herramientas del sistema',
			'uri', 't_16_1.htm',
			'statusText', '16. Herramientas del sistema'
			),
	18, new Hash(
			'contents', '17. Redes',
			'uri', 't_17_1.htm',
			'statusText', '17. Redes'
			)
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
