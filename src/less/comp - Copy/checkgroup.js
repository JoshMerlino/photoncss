$.fn.checkgroup = function() {
	return this.each(function() {

		const _this = this;
		$(this).children(".checkbox").children("input[type=\"checkbox\"]").change(function() {
			const __this = this;
			setTimeout(() => {
				$(this).removeClass("indeterminate");
			}, Photon.speed)
			$(_this).children(".children").children(".checkbox").each(function() {
				$(this).children("input[type=\"checkbox\"]").prop("checked", $(__this).prop("checked"))
			})
		});

		$(this).children(".children").children(".checkbox").children("input[type=\"checkbox\"]").change(function() {
			let vals = [];
			$(this).parents(".children").children(".checkbox").each(function() {
				vals.push($(this).children("input[type=\"checkbox\"]").prop("checked"));
			})

			const e = vals.every(v => v === vals[0]);

			if(e) {
				$(_this).children(".checkbox").children("input[type=\"checkbox\"]").prop("checked", vals[0]).removeClass("indeterminate");
			} else {
				$(_this).children(".checkbox").children("input[type=\"checkbox\"]").prop("checked", true).addClass("indeterminate");
			}

		});

	});
}
