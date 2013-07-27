/**
 * App initial class
 * @author kmil0cv
 */
App = (function(){
	// app version
	var __version = '0.1';

	/**
	 * main function,  entry point of the application
	 * executes only when the device is ready
	 * @author kmil0cv
	 */
	function init(){
		alert(__version);
	}
	
	function _log(message) {
		console.log(message);
	}
	// export public methods only
	return {
		init: init,
		_log:_log
	}
});
