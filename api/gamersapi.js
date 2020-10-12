// Format cases
const processCases = (cases) => ({
	id: cases.CaseId,
	category: cases.Category,
	status: cases.Status,
	location: cases.Location,
	vhtname: cases.VHTName,
	vhtphone: cases.VHTPhone,
});

// Load pending cases from the server
export const loadCases = async () => {
	const response = await fetch(
		"https://doctorsarch.org/gamers_assets/loadcases.php"
	);
	const results = await response.json();
	return results;
};

// Load already handled cases from the server
export const loadHistory = async () => {
	const response = await fetch(
		"https://doctorsarch.org/gamers_assets/loadhistory.php"
	);
	const results = await response.json();
	return results;
};

// Validate current user of the application
export const validateUser = async (userId, userPassword) => {
	try {
		const response = await fetch(
			"https://doctorsarch.org/gamers_assets/validate.php",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: userId, password: userPassword }),
			}
		);

		const result = await response.json();

		if (result.ok) {
			return true;
		} else {
			throw new Error("An error occured");
		}
	} catch (err) {
		throw new Error(`An error occured: ${err}`);
	}
};

// Request for transporter
export const requestTransportation = async (id) => {
	try {
		const response = await fetch(
			`https://gamers.pagekite.me/transporter?caseid=${id}`
		);
		const result = await response.json();
		alert(
			`Transporter name: ${result.Transporter} \nTranportation means: ${result.Type} \nTranporter contact: ${result.Phone}`
		);
	} catch (e) {
		alert("Unable to get transporter for the current case");
	}
};

// Refer case basing on danger signs (transporting patient)
export const referForDangerSigns = async (id) => {
	try {
		const response = await fetch(
			`https://gamers.pagekite.me/transporter?caseid=${id}`
		);
		const result = await response.json();
		alert(
			`Transporter name: ${result.Transporter} \nTranportation means: ${result.Type} \nTranporter contact: ${result.Phone}`
		);
	} catch (e) {
		alert(`Unable to get transporter for the case ${id}!`);
	}
};

// Refer chw basing on danger signs (transporting community health worker)
export const referForDangerSignsCHW = async (id) => {
	try {
		const response = await fetch(
			`https://gamers.pagekite.me/transporter?chw=${id}`
		);
		const result = await response.json();
		alert(
			`Transporter name: ${result.Transporter} \nTranportation means: ${result.Type} \nTranporter contact: ${result.Phone}`
		);
	} catch (e) {
		alert(`Unable to get transporter for community healthworker id ${id}`);
	}
};

// Visitation schedule
export const visitation = async (caseid, notimes, interval) => {
	try {
		const response = await fetch(
			`https://gamers.pagekite.me/visitation?caseid=${caseid}&notimes=${notimes}&interval=${interval}`
		);
		const result = await response.json();
		return result;
	} catch (e) {
		alert(
			`An error occured when trying to send the visitation interval for case ${caseid}`
		);
	}
};

export const addBiodata = async (info) => {
	try {
		const response = await fetch(
			"https://doctorsarch.org/gamers_assets/login_api/createbiodata.php",
			{
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					caseId: info.caseId,
					mother: info.mother,
					father: info.father,
					children: info.children,
					girls: info.boys,
					boys: info.girls,
					familyType: info.familyType,
					birthIndex: info.birthIndex,
					disability: info.disability,
				}),
			}
		);
		return response;
	} catch (e) {
		alert("An error occured when updating the database.");
	}
};
