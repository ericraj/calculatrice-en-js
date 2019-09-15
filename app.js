(function() {
	// VARIABLES
	const btnNumberAndSigns = document.querySelectorAll(".js__number__and__sign");
	const btnEgal = document.querySelector(".js__btn_egal");
	const btnAC = document.querySelector(".js__btn__ac");
	const btnCE = document.querySelector(".js__btn__ce");
	const input = document.querySelector(".js__input__text");
	input.focus();

	// FONCTIONS
	// Click on number btn or sign btn
	btnNumberAndSigns.forEach(btn => {
		btn.addEventListener("click", () => {
			input.value = input.value + btn.innerHTML;
		});
	});

	// Click on btn equal
	btnEgal.addEventListener("click", () => {
		calcul();
	});

	// Event in input change
	input.addEventListener("change", () => {
		calcul();
	});

	// Click on btn AC
	btnAC.addEventListener("click", () => {
		input.value = "";
	});

	// Click on btn CE
	btnCE.addEventListener("click", () => {
		input.value = input.value.replace(input.value.slice(-1), "");
	});

	// Fonction calcul
	const calcul = () => {
		if (input.value !== "") {
			input.value = eval(input.value);
		}
	};
})();
