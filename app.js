const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

async function searchSongs(term) {
	const res = await fetch(`${apiURL}/suggest/${term}`);
	const data = await res.json();

	showData(data);
}
