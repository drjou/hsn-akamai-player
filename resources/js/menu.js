function FeedMenu() {}
FeedMenu.constructor = FeedMenu;
FeedMenu.prototype = {
	view: null,
	selected: null,
	selectedIndex: 0,
	value: null,
	items: [],
	data: null,
	columnCount: 3,
	select: function (index)
	{
		if (this.selected != null)
			this.selected.className = this.selected.className.replace(" selected", "");
            	if (index >= this.data.length)
            		index = 0;
            	if (index < 0)
            		index = this.data.length - 1;
    			this.selectedIndex = index;
  
    			this.selected = this.items[this.selectedIndex];
    			this.selected.className += " selected";
		
		this.value = this.data[this.selectedIndex];
	},
	create: function (view, data)
	{
		this.view = view;
		this.data = data;
		var url, data, helper = new com.akamai.amp.player.model.helpers.MRSSHelper;
		for (var i = 0; i < this.data.length; i++)
    	{
    		url = this.data[i]
    		data = helper.createFeed(helper.getFeed(url)).item[0];
    		this.add(data, i);
    	}
    	this.select(0);
	},
	add: function (item, index)
	{
		var element = document.createElement("a"),
		    c = (index % this.columnCount) + 1,
		    r = Math.floor(index / this.columnCount) + 1;
		element.className = "sample-menu-item sample-menu-r" + r + " sample-menu-c" + c;
		element.setAttribute("onclick", "loadVideo("+index+")");
		element.innerHTML = '<img class="sample-item-thumb" src="'+item.poster+'" />'+
			            	'<div class="sample-item-title">'+item.title+'</div>';
		          	
		this.view.appendChild(element);
		this.items.splice(index, 0, element);
	}
};