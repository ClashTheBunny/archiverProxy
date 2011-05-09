function FindProxyForURL(url, host)
{
    if (shExpMatch(url, 'http://*.yoursite.com*')) {
	return "PROXY localhost:8000";
    }
    if (shExpMatch(url, 'http://another*.coolsite.com*')) {
	return "PROXY localhost:8000";
    }
    else
	return "DIRECT";
}
