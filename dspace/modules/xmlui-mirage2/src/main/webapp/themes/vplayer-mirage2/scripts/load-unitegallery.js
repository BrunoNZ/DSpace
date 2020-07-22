$(function() {
	$("#gallery").unitegallery({
		theme_enable_fullscreen_button: true,	//show, hide the theme fullscreen button. The position in the theme is constant
		theme_enable_play_button: true,			//show, hide the theme play button. The position in the theme is constant
		theme_enable_hidepanel_button: true,	//show, hide the hidepanel button
		theme_enable_text_panel: true,			//enable the panel text panel. 
		
		theme_text_padding_left: 20,			//left padding of the text in the textpanel
		theme_text_padding_right: 5,			//right paddin of the text in the textpanel
		theme_text_align: "left",				//left, center, right - the align of the text in the textpanel
		theme_text_type: "title",				//title, description - text that will be shown on the text panel, title or description
		
		theme_hide_panel_under_width: 480,		//hide panel under certain browser width, if null, don't hide

		// gallery options
	
		gallery_width:500,							//gallery width		
		gallery_height:300,							//gallery height

		gallery_min_width: 400,						//gallery minimal width when resizing
		gallery_min_height: 300						//gallery minimal height when resizing
	})
})
