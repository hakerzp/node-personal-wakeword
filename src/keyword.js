class WakewordKeyword {
	constructor(keyword, options) {
		this.keyword	= keyword
		this.features	= []
		this._templates = []
		this.options	= options || {}
		this.enabled 	= true
	}

	get threshold() {
		return this.options.threshold
	}

	addFeatures(features) {
		this._templates.push(features)
		// Calculate average and store in this.features
		this.features = features
	}
}

module.exports = WakewordKeyword