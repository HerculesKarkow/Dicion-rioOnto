$('#search-input').on('keydown', function (e) {
	var el = $(this);
	var search = el.val().toLowerCase();

	if (search.length >= 1) {
		$('#accordion > .panel-title').each(function () {
			var headerElement = $(this);

			if (headerElement.html().toLowerCase().indexOf(search) == -1) {
				headerElement
					.parent() // sobe para o elemento .panel-heading
					.parent() // sobe para o elemento .panel
					.hide();
			}
		});
	}
});