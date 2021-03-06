// Home Buyer - Chrome Extension
// Copyright (C) 2014  Markis Taylor

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// See http://www.gnu.org/licenses/

define(['jquery', 'underscore', 'backbone', 'models/Property'], function($, _, Backbone, Property) {
	var DetailsView = Backbone.View.extend({
		id: 'home-buyer-extension-details-panel',
		tagName: 'table',
		render: function() {
			var html = _.template($('#artist-list-template').html(), this.model);
	        this.$el.html(html);
	        return this;
	    }
	});
	return DetailsView;
});