window.logout = function() {
	fetch('/~/doggorobot/logout', { method: 'POST'})
	alert('LOGGED OUT!');
	location.reload();
}