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
	
	// export public methods only
	return {
		init: init
	}
});
