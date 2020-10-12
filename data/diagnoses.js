import { malaria, pneumonia, diarrhea } from "./questions";

export const diseases = {
	malaria: "MALARIA",
	diarrhea: "DIARRHEA",
	pneumonia: "PNEUMONIA",
	unknown: "REFER",
};

export default class Diagnosis {
	constructor(questions) {
		this.questions = questions;
	}

	malariaFeatures = () => ({
		fever: this.questions.fever,
		feverLength: this.questions.feverLength,
		bodyWeak: this.questions.bodyWeak,
		headache: this.questions.headache,
		bodyPain: this.questions.bodyPain,
		vomit: this.questions.vomit,
	});

	pneumoniaFeatures = () => ({
		cough: this.questions.cough,
		fever: this.questions.fever,
		dbreathing: this.questions.dbreathing,
		iChest: this.questions.iChest,
		fbreathing: this.questions.fbreathing,
		headNoddling: this.questions.headNoddling,
	});

	diarrheaFeatures = () => ({
		looseStool: this.questions.looseStool,
		bloodStool: this.questions.bloodStool,
		vomit: this.questions.vomit,
		sunken: this.questions.sunken,
		eDrink: this.questions.eDrink,
		pSkin: this.questions.pSkin,
	});

	getDiagnosis = () => {
		if (JSON.stringify(this.malariaFeatures()) === JSON.stringify(malaria))
			return diseases.malaria;
		if (
			JSON.stringify(this.pneumoniaFeatures()) ===
			JSON.stringify(pneumonia)
		)
			return diseases.pneumonia;
		if (
			JSON.stringify(this.diarrheaFeatures()) === JSON.stringify(diarrhea)
		)
			return diseases.diarrhea;
		return diseases.unknown;
	};
}
