define(['pipAPI', 'https://sophiacyna.github.io/IAT-minnojs/updated-iat-mobile.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Việc kinh doanh', //Will appear in the data.
			title : {
				media : {word : 'Việc kinh doanh'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'Việc kinh doanh'},
            {word: 'Sự nghiệp'},
            {word: 'Doanh nghiệp'},
            {word: 'Sự quản lý'},
            {word: 'Tiền lương'},
            {word: 'Văn phòng'},
            {word: 'Chuyên nghiệp'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Gia đình', //Will appear in the data.
			title : {
				media : {word : 'Gia đình'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
			{word: 'Gia đình'},
			{word: 'Kết hôn'},
			{word: 'Kết hôn'},
			{word: 'Họ hàng'},
			{word: 'Đám cưới'},
			{word: 'Nhà ở'},
			{word: 'Con cái'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});