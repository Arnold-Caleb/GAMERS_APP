export const feverLength = {
	day: "day",
	two: "two",
	four: "four",
};

export var questions = {
	name: null,
	age: null,
	temp: null,
	gender: null,
	weight: null,
	fever: null,
	feverLength: feverLength.day,
	bodyWeak: null,
	cough: null,
	looseStool: null,
	bloodStool: null,
	vomit: null,
	dbreathing: null,
	bodyChills: null,
	headache: null,
	bodyPain: null,
	hvomit: null,
	fbreathing: null,
	iChest: null,
	headNoddling: null,
	sunken: null,
	pSkin: null,
	eDrink: null,
};

export const malaria = {
	fever: true,
	feverLength: feverLength.four,
	bodyWeak: true,
	headache: true,
	bodyPain: true,
	vomit: true,
};

export const pneumonia = {
	cough: true,
	fever: true,
	dbreathing: true,
	iChest: true,
	fbreathing: true,
	headNoddling: true,
};

export const diarrhea = {
	looseStool: true,
	bloodStool: true,
	vomit: true,
	sunken: true,
	eDrink: true,
	pSkin: true,
};
