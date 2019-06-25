const install = (Vue) => {
	if (install.installed) return
	install.installed = true
	Vue.prototype.getLoadingInstance = function(txt = 'loading') {
		return this.$createToast({
			time: 0,
			txt,
			mask: true
		})
	}
	Vue.prototype.$loading = function() {
		this.getLoadingInstance().show()
	}

	Vue.prototype.$hideLoading = function() {
		this.getLoadingInstance().hide()
	}
	Vue.prototype.getToastInstance = function(txt) {
		return this.$createToast({
			txt,
			type: 'txt'
		})
	}
	Vue.prototype.$toast = function(txt = '') {
		this.getToastInstance(txt).show()
	}
}

export default install
