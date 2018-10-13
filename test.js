import test from 'ava';
import cows from '.';

test('main', t => {
	const cowList = cows();
	console.log('Cows:', cowList.length);
	t.true(Array.isArray(cowList));
	t.true(cowList.length > 0);
});
