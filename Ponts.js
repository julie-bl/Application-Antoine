// Animation confettis globale
function lancerConfettis(container = document.body) {
	const confettiContainer = document.createElement('div');
	confettiContainer.className = 'confetti-container';
	document.body.appendChild(confettiContainer);
	for (let i = 0; i < 40; i++) {
		const confetti = document.createElement('div');
		confetti.className = 'confetti';
		confetti.style.position = 'absolute';
		confetti.style.left = Math.random() * 100 + '%';
		confetti.style.background = `hsl(${Math.random()*360},80%,60%)`;
		confetti.style.animationDelay = (Math.random()*1.5) + 's';
		confettiContainer.appendChild(confetti);
	}
	setTimeout(() => {
		confettiContainer.remove();
	}, 3000);

	// Nettoyer après 3s
	setTimeout(() => {
		confettiContainer.remove();
	}, 3000);
}

// Gestion des onglets
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		tabBtns.forEach(b => b.classList.remove('active'));
		btn.classList.add('active');
		tabContents.forEach(tc => tc.style.display = 'none');
		document.getElementById(btn.dataset.tab).style.display = 'block';
	});
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

tabBtns[0].classList.add('active');

// Classement des plus beaux ponts de France
const classement = [
	{
		nom: 'Viaduc de Millau',
		image: 'Images/viaduc millau.jpg',
		description: 'Viaduc à haubans, le plus haut pont routier du monde, situé en Aveyron. Il est très long, très haut et surtout très beau.'
	},
	{
		nom: 'Pont du Gard',
		image: 'Images/pont du gard.jpg',
		description: 'Ancien aqueduc romain près de Nîmes, chef-d’œuvre d’ingénierie antique ... n\'est-ce pas ?'
	},
	{
		nom: 'Pont Valentré',
		image: 'Images/pont valentre.jpg',
		description: 'Pont médiéval de Cahors, célèbre pour ses trois tours et sa légende du diable... (clique sur l\'image pour la découvrir).'
	},
	{
		nom: 'Viaduc de Viaur',
		image: 'Images/viadux viaur.jpg',
		description: 'Viaduc métallique sur le Viaur, prouesse technique du XIXe siècle. Celui-ci il est vraiment stylé !'
	},
	{
		nom: 'Viaduc de Garabit',
		image: 'Images/viaduc garabit.jpg',
		description: 'Viaduc ferroviaire conçu par Gustave Eiffel lui-même, ça déconne pas. C\'est un emblème du Cantal.'
	},
	{
		nom: 'Pont d\'Avignon',
		image: 'Images/pont avignon.jpg',
		description: 'Pont médiéval sur le Rhône appelé le Pont Saint-Bénézet. Egalement une chanson très connue : "Sur le pont d\'Avignon on y danse on y danse" (j\'espère que tu l\'as maintenant dans la tête)'
	},
	{
		nom: 'Pont de Séjourné',
		image: 'Images/pont sejourne.jpg',
		description: 'Pont ferroviaire en pierre, également appelé pont de Fontpédrousse (plus rigolo comme nom). Il est beau et en plus il fait passer la ligne de Cerdagne.'
	},
	{
		nom: 'Pont de l\'Île d\'Oléron',
		image: 'Images/pont ile oleron.jpg',
		description: 'Pont routier reliant le continent à l’île d’Oléron. Il est beau mais en vrai, il l\'est surtout de nuit.'
	},
	{
		nom: 'Pont d\'Ancenis',
		image: 'Images/pont ancenis.jpg',
		description: 'Pont suspendu sur la Loire, quelle beauté !!! Beaucoup plus joli que le pont neuf de poitiers XD'
	},
	{
		nom: 'Pont de Saint Nazaire',
		image: 'Images/pont saint nazaire.jpg',
		description: 'Grand pont à haubans franchissant l’estuaire de la Loire. Il est sympa, il est courbé, il méritait quand même sa place dans le classement.'
	}
];
const classementList = document.getElementById('classement-list');
classement.forEach(pont => {
	const li = document.createElement('li');
	const container = document.createElement('div');
	container.style.display = 'flex';
	container.style.flexDirection = 'column';
	container.style.alignItems = 'flex-start';
	container.style.width = '100%';
	container.style.color = '#181a20';

	const title = document.createElement('strong');
	title.style.alignSelf = 'flex-start';
	title.style.textAlign = 'left';
	title.style.width = '100%';
	title.style.fontSize = '1.2em';
	title.style.color = '#4b6cb7';
	title.textContent = pont.nom;
	container.appendChild(title);

	const imgDiv = document.createElement('div');
	imgDiv.style.width = '100%';
	imgDiv.style.display = 'flex';
	imgDiv.style.justifyContent = 'center';
	imgDiv.style.margin = '12px 0';

	const img = document.createElement('img');
	img.src = pont.image;
	img.alt = pont.nom;
	img.style.width = '490px';
	img.style.height = '310px';
	img.style.objectFit = 'cover';

	// Si c'est le pont Valentré, rendre l'image cliquable
	if (pont.nom === 'Pont Valentré') {
		img.style.cursor = 'pointer';
		img.title = "Découvrir la légende du pont Valentré";
		img.addEventListener('click', function() {
			window.open('https://fr.wikipedia.org/wiki/Pont_Valentr%C3%A9#La_l%C3%A9gende_du_pont_Valentr%C3%A9', '_blank');
		});
	}
	imgDiv.appendChild(img);
	container.appendChild(imgDiv);

	const desc = document.createElement('span');
	desc.style.alignSelf = 'flex-start';
	desc.style.textAlign = 'center';
	desc.style.width = '100%';
	desc.style.fontSize = '1em';
	desc.style.color = '#181a20';
	desc.style.fontWeight = '400';
	desc.textContent = pont.description;
	container.appendChild(desc);

	container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));
	container.appendChild(document.createElement('br'));

	li.appendChild(container);
	classementList.appendChild(li);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Quiz sur les ponts de France
const quizQuestionsBank = [
	{ question: "Quel est le pont le plus long de France ?", options: ["Viaduc de Millau", "Pont de Saint Nazaire", "Pont de l'île d'Oléron"], answer: 2 },
	{ question: "Quel est le pont le plus haut de France ?", options: ["Viaduc de Millau", "Pont du Gard", "Viaduc de Garabit"], answer: 0 },
	{ question: "Quel est le pont le plus ancien de France ?", options: ["Pont du Gard", "Pont Valentré", "Pont d'Avignon"], answer: 0 },
	{ question: "Quel pont est célèbre pour sa légende du diable ?", options: ["Pont Valentré", "Viaduc de Viaur", "Pont de Séjourné"], answer: 0 },
	{ question: "Quel pont a été conçu par Gustave Eiffel ?", options: ["Viaduc de Garabit", "Pont du Gard", "Pont d'Ancenis"], answer: 0 },
	{ question: "Quel est le matériau le plus utilisé pour les ponts modernes en France ?", options: ["Bois", "Béton", "Pierre"], answer: 1 },
	{ question: "Quelle est la hauteur réglementaire minimale pour un pont routier au-dessus d'une voie ferrée ?", options: ["4,50 m", "5,10 m", "6,00 m"], answer: 1 },
	{ question: "Quel type de pont est le plus construit en France ?", options: ["Viaduc", "Pont suspendu", "Pont en arc"], answer: 0 },
	{ question: "Quel fleuve compte le plus de ponts en France ?", options: ["La Seine", "La Loire", "Le Rhône"], answer: 1 },
	{ question: "Quel est le pont le plus célèbre de Paris ?", options: ["Pont Neuf", "Pont Alexandre III", "Pont Mirabeau"], answer: 0 },
	{ question: "Combien de ponts franchissent la Seine à Paris ?", options: ["15", "37", "22"], answer: 1 },
	{ question: "En quelle année le pont de l'île d'Oléron a-t-il été inauguré ?", options: ["1966", "1972", "1980"], answer: 0 },
	{ question: "Combien d’arches du pont d’Avignon sont encore visibles aujourd’hui ?", options: ["4", "7", "12"], answer: 0 },
	{ question: "Quel est le viaduc ferroviaire le plus long de France ?", options: ["Viaduc de Morlaix", "Viaduc de Garabit", "Viaduc de Séjourné"], answer: 0 }
];

let quizQuestions = [];

function pickRandomQuestions(bank, count) {
	const arr = bank.slice();
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr.slice(0, count);
}
const quizList = document.getElementById('quizzz-list');
quizList.innerHTML = '';
let quizIndex = 0;
let quizScore = 0;

// Sélectionne 5 questions aléatoires à chaque partie
quizQuestions = pickRandomQuestions(quizQuestionsBank, 5);

function showQuizQuestion() {
		quizList.innerHTML = '';
		if (quizIndex >= quizQuestions.length) {
			const result = document.createElement('div');
			result.className = 'quizz';
			result.style.background = quizScore >= 3 ? '#c6f7d4' : '#f7d4d4';
			result.style.color = quizScore >= 3 ? '#4bb76c' : '#b76c4b';
			result.style.fontSize = '1.5em';
			result.style.textAlign = 'center';
			result.style.fontFamily = "'Inter', 'Segoe UI', 'Roboto', Arial, sans-serif";
			result.innerHTML = `Quiz terminé !<br>Score : <strong>${quizScore} / ${quizQuestions.length}</strong>`;
			quizList.appendChild(result);
			if (quizScore >= 3) {
				lancerConfettis();
			} else {
				const perdu = document.createElement('div');
				perdu.textContent = '👎';
				perdu.className = 'quiz-perdu';
				quizList.appendChild(perdu);
				perdu.style.color = '#b76c4b';
				perdu.style.fontSize = '2em';
				perdu.style.fontWeight = 'bold';
				perdu.style.textAlign = 'center';
				perdu.style.marginTop = '18px';
				perdu.style.animation = 'shake 0.7s';
			}
			return;
		}
		// Ajout du compteur de progression
		const compteurDiv = document.createElement('div');
		compteurDiv.textContent = `Question ${quizIndex + 1} / ${quizQuestions.length}`;
		compteurDiv.style.textAlign = 'center';
		compteurDiv.style.fontSize = '1.1em';
		compteurDiv.style.color = '#4b6cb7';
		compteurDiv.style.marginBottom = '8px';
		quizList.appendChild(compteurDiv);

		const q = quizQuestions[quizIndex];
		const questionDiv = document.createElement('div');
		questionDiv.className = 'quizz';
		questionDiv.style.textAlign = 'center';
		questionDiv.style.fontFamily = "'Inter', 'Segoe UI', 'Roboto', Arial, sans-serif";
		questionDiv.style.fontSize = '1.3em';
		questionDiv.style.marginBottom = '18px';
		questionDiv.textContent = q.question;
		quizList.appendChild(questionDiv);
		const btnsWrapper = document.createElement('div');
		btnsWrapper.style.display = 'flex';
		btnsWrapper.style.justifyContent = 'center';
		btnsWrapper.style.gap = '24px';
		q.options.forEach((opt, i) => {
			const btn = document.createElement('button');
			btn.textContent = opt;
			btn.style = 'padding:10px 24px;font-size:1em;border-radius:8px;border:none;background:#4b6cb7;color:#fff;cursor:pointer;transition:background 0.2s;font-family:inherit;';
			btn.onmouseover = () => btn.style.background = '#182848';
			btn.onmouseout = () => btn.style.background = '#4b6cb7';
			btn.onclick = () => {
				if (i === q.answer) {
					btn.style.background = '#4bb76c';
					quizScore++;
				} else {
					btn.style.background = '#b76c4b';
				}
				setTimeout(() => {
					quizIndex++;
					showQuizQuestion();
				}, 700);
			};
			btnsWrapper.appendChild(btn);
		});
		quizList.appendChild(btnsWrapper);
}
showQuizQuestion();




//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Construire un pont
const comment = document.getElementById('comment');
comment.innerHTML = 'Quel pont allez vous construire... ?';
const buildBtn = document.getElementById('build-bridge-btn');
const bridgesArea = document.getElementById('bridges-area');
let pontElements = [];
let lastPontIndex = null;
// let pontCompteur = 0;
const totalPlanches = 10;
const totalClous = 10;
// const totalElements = totalPlanches + totalClous;
const pontFinalImages = [
	'Images/pont final 1.jpg',
	'Images/pont final 2.jpg',
	'Images/pont final 3.jpg',
	'Images/pont final 4.jpg',
	'Images/pont final 5.png',
	'Images/pont final 6.jpg',
	'Images/pont final 7.jpg',
	'Images/pont final 8.jpg',
	'Images/pont final 9.png'
];
const marteauImage = 'Images/marteau.png'; 

function resetPontGame() {
	bridgesArea.innerHTML = '';
	pontElements = [];
	pontCompteur = 0;
	// Désactive le bouton pendant le jeu
	buildBtn.style.display = 'none';
	comment.innerHTML = '';
	// Ajout du compteur sous le container de l'onglet
	let compteurDiv = document.getElementById('pont-compteur');
	if (!compteurDiv) {
		compteurDiv = document.createElement('div');
		compteurDiv.id = 'pont-compteur';
		compteurDiv.style.fontSize = '1.2em';
		compteurDiv.style.color = '#4b6cb7';
		compteurDiv.style.fontWeight = 'bold';
		compteurDiv.style.background = '#4b6bb723';
		compteurDiv.style.padding = '8px 18px';
		compteurDiv.style.borderRadius = '8px';
		compteurDiv.style.boxShadow = '0 2px 8px rgba(75,108,183,0.10)';
		compteurDiv.style.margin = '18px auto 0 auto';
		compteurDiv.style.textAlign = 'center';
		// Ajoute le compteur juste après le container bridgesArea
		if (bridgesArea.nextSibling) {
			bridgesArea.parentNode.insertBefore(compteurDiv, bridgesArea.nextSibling);
		} else {
			bridgesArea.parentNode.appendChild(compteurDiv);
		}
	}
	let planchesRamassees = 0;
	let clousRamasses = 0;
	compteurDiv.innerHTML = `Ramassez tous les clous et toutes les planches : <br> Planches : 0/${totalPlanches} | Clous : 0/${totalClous}`;
	// Ajout des planches
	for(let i=0;i<totalPlanches;i++) {
		const planche = document.createElement('img');
		planche.src = 'Images/planche.png';
		planche.alt = 'Planche en bois';
		planche.className = 'pont-item planche-item';
		planche.style = 'width:65px;height:50px;cursor:pointer;transition:opacity 0.2s;position:absolute;z-index:9998;';
		// Position aléatoire sur la fenêtre
		const x = Math.random() * (window.innerWidth - 100);
		const y = Math.random() * (window.innerHeight - 60);
		planche.style.left = `${x}px`;
		planche.style.top = `${y}px`;
		planche.addEventListener('click', () => ramassePontItem(planche, 'planche'));
		pontElements.push(planche);
		document.body.appendChild(planche);
	}
	// Ajout des clous
	for(let i=0;i<totalClous;i++) {
		const clou = document.createElement('img');
		clou.src = 'Images/clou.png';
		clou.alt = 'Clou';
		clou.className = 'pont-item clou-item';
		clou.style = 'width:32px;height:32px;cursor:pointer;transition:opacity 0.2s;position:absolute;z-index:9998;';
		// Position aléatoire sur la fenêtre
		const x = Math.random() * (window.innerWidth - 40);
		const y = Math.random() * (window.innerHeight - 40);
		clou.style.left = `${x}px`;
		clou.style.top = `${y}px`;
		clou.addEventListener('click', () => ramassePontItem(clou, 'clou'));
		pontElements.push(clou);
		document.body.appendChild(clou);
	}
	// Stocker les compteurs dans la fonction globale
	window._pontGame = { planchesRamassees, clousRamasses, compteurDiv };
}

function ramassePontItem(item) {
	// type = 'planche' ou 'clou'
	let type = arguments[1];
	item.style.opacity = '0.3';
	setTimeout(() => {
		item.remove();
	}, 180);
	if (!window._pontGame) return;
	if (type === 'planche') window._pontGame.planchesRamassees++;
	if (type === 'clou') window._pontGame.clousRamasses++;
	const planchesRamassees = window._pontGame.planchesRamassees;
	const clousRamasses = window._pontGame.clousRamasses;
	const compteurDiv = window._pontGame.compteurDiv;
	compteurDiv.textContent = `Planches : ${planchesRamassees}/${totalPlanches} | Clous : ${clousRamasses}/${totalClous}`;
	if(planchesRamassees === totalPlanches && clousRamasses === totalClous) {
		setTimeout(() => {
			// Nettoyer tous les éléments du jeu
			pontElements.forEach(e => { if (e.parentNode) e.remove(); });
			bridgesArea.innerHTML = '';
			// Afficher le ponton en bois
			const img = document.createElement('img');
			img.src = 'Images/planches.jpg';
			img.alt = 'Tas de planches';
			img.style = 'width:400px;height:180px;object-fit:cover;margin-top:20px;box-shadow:0 2px 12px rgba(75,108,183,0.12);display:block;margin-left:auto;margin-right:auto;position:relative;';
			bridgesArea.appendChild(img);
			// Afficher la marteau au centre du ponton
			const marteau = document.createElement('img');
			compteurDiv.innerHTML='Appuie sur le marteau';
			marteau.src = 'Images/marteau.png';
			marteau.alt = 'Marteau';
			marteau.style = 'width:120px;height:120px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:10;cursor:pointer;box-shadow:0 2px 8px rgba(75,108,183,0.15);';
			marteau.onclick = () => {
				// Animation d'inclinaison
				marteau.style.transition = 'transform 0.35s cubic-bezier(.68,-0.55,.27,1.55)';
				marteau.style.transform += ' rotate(35deg)';
				setTimeout(() => {
					marteau.remove();
					// Sélectionne une image aléatoire de pont final, sans répétition immédiate
					let idx;
					do {
						idx = Math.floor(Math.random() * pontFinalImages.length);
					} while (pontFinalImages.length > 1 && idx === lastPontIndex);
					lastPontIndex = idx;
					img.src = pontFinalImages[idx];
					img.alt = 'Image de pont construit';
					compteurDiv.innerHTML = 'Sauras-tu deviner dans quel jeu vidéo il se trouve ?';
					lancerConfettis(bridgesArea);
					// Réactive le bouton après 10 secondes
					setTimeout(() => {
						compteurDiv.remove();
						buildBtn.style.display = 'block';
						bridgesArea.innerHTML = '';
					}, 10000);
				}, 350);
			};
			// Positionner le marteau par rapport à l'image
			img.parentNode.style.position = 'relative';
			img.parentNode.appendChild(marteau);
		}, 400);
	}
}

buildBtn.addEventListener('click', resetPontGame);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Jeu Pont mystère

const pontMystereTab = document.querySelector('[data-tab="pontmystere"]');
// const pontMystereContent = document.getElementById('pontmystere');
const pontMystereGame = document.getElementById('pontmystere-game');

let manche = 0;
let score = [false, false, false];
let mancheImages = [];
let pontMystereVersion = 1; // 1 = normal, 2 = très zoomé carré

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}



function showPontMystereVersionSelector() {
	pontMystereGame.innerHTML = '';
	const selector = document.createElement('div');
	selector.style.textAlign = 'center';
	selector.style.marginBottom = '18px';
	selector.innerHTML = `
		<h3 style="text-align:center;margin-bottom:18px;">Choisis la version du jeu :</h3>
		<div style="display:flex;justify-content:center;gap:24px;">
			<button class="pontmystere-btn pontmystere-version-btn" data-version="1">Version 1</button>
			<button class="pontmystere-btn pontmystere-version-btn" data-version="2">Version 2</button>
		</div>
	`;
	pontMystereGame.appendChild(selector);
	Array.from(selector.querySelectorAll('.pontmystere-version-btn')).forEach(btn => {
		btn.onclick = () => {
			pontMystereVersion = parseInt(btn.dataset.version);
			startPontMystere();
		};
	});
}

function startPontMystere() {
	manche = 0;
	score = [false, false, false];
	// Choisir 3 images différentes du classement
	mancheImages = shuffle(classement.slice()).slice(0, 3);
	showPontMystereManche();
}

function showPontMystereManche() {
	pontMystereGame.innerHTML = '';
	// Score visuel
	const scoreDiv = document.createElement('div');
	scoreDiv.className = 'pontmystere-score';
	for (let i = 0; i < 3; i++) {
		const point = document.createElement('span');
		point.className = 'pontmystere-point' + (score[i] ? ' active' : '');
		scoreDiv.appendChild(point);
	}
	pontMystereGame.appendChild(scoreDiv);
	// Fin du jeu
	if (manche >= 3) {
		// Message BRAVO
		const felicitation = document.createElement('div');
		felicitation.className = 'pontmystere-felicitation';
		felicitation.textContent = 'BRAVO';
		felicitation.style.textAlign = 'center';
		pontMystereGame.appendChild(felicitation);
		// Désactive tous les boutons de propositions restants
		const propBtns = pontMystereGame.querySelectorAll('.pontmystere-btn');
		propBtns.forEach(btn => {
			btn.disabled = true;
			btn.style.cursor = 'not-allowed';
			btn.style.opacity = '0.6';
		});
		// Bouton recommencer centré
		const restartBtn = document.createElement('button');
		restartBtn.textContent = 'Recommencer';
		restartBtn.className = 'pontmystere-btn pontmystere-btn-restart';
		restartBtn.style.background = '#4b6cb7';
		restartBtn.style.color = '#fff';
		restartBtn.style.display = 'block';
		restartBtn.style.margin = '18px auto 0 auto';
		restartBtn.style.padding = '10px 24px';
		restartBtn.style.fontSize = '1em';
		restartBtn.style.borderRadius = '8px';
		restartBtn.style.border = 'none';
		restartBtn.style.cursor = 'pointer';
		restartBtn.onclick = showPontMystereVersionSelector;
		pontMystereGame.appendChild(restartBtn);
		// Confettis
		lancerConfettis();
		return;
	}

	// Image selon la version
	const imgContainer = document.createElement('div');
	imgContainer.className = 'pontmystere-img-container';
	imgContainer.style.position = 'relative';
	const img = document.createElement('img');
	img.className = 'pontmystere-img';
	img.src = mancheImages[manche].image;
	img.alt = 'Pont mystère';
	if (pontMystereVersion === 1) {
		// Version classique : zoom et flou
		img.style.width = '420px';
		img.style.height = '260px';
		img.style.objectFit = 'cover';
		img.style.filter = 'blur(6px) brightness(0.85)';
		img.style.transform = 'scale(1.18)';
		img.style.borderRadius = '18px';
		imgContainer.style.width = '420px';
		imgContainer.style.height = '260px';
		imgContainer.style.margin = '0 auto 18px auto';
	} else {
		// Version très zoomée carré
		img.style.width = '220px';
		img.style.height = '220px';
		img.style.objectFit = 'cover';
		img.style.borderRadius = '18px';
		imgContainer.style.width = '220px';
		imgContainer.style.height = '220px';
		imgContainer.style.margin = '0 auto 18px auto';
		// Zoom très fort sur une partie aléatoire de l'image
		const zoomLevel = 2.8 + Math.random() * 0.7; // entre 2.8 et 3.5
		// Pour chaque manche, générer un offset unique
		const offsetX = (Math.random() * 0.8 - 0.4); // entre -0.4 et +0.4
		const offsetY = (Math.random() * 0.8 - 0.4);
		img.style.transform = `scale(${zoomLevel}) translate(${offsetX * 100}%,${offsetY * 100}%)`;
		img.style.filter = 'brightness(0.95)';
	}
	imgContainer.appendChild(img);
	pontMystereGame.appendChild(imgContainer);

	// Propositions
	const options = [mancheImages[manche].nom];
	// Ajouter 2 autres noms aléatoires
	const autres = classement.filter(p => p.nom !== mancheImages[manche].nom);
	shuffle(autres);
	options.push(autres[0].nom, autres[1].nom);
	shuffle(options);
	const propDiv = document.createElement('div');
	propDiv.className = 'pontmystere-propositions';
	options.forEach(opt => {
		const btn = document.createElement('button');
		btn.className = 'pontmystere-btn';
		btn.textContent = opt;
		btn.onclick = () => {
			if (opt === mancheImages[manche].nom) {
				score[manche] = true;
				img.style.filter = 'blur(0px) brightness(1.1)';
				img.style.transform = 'scale(1)';
				btn.style.background = '#4bb76c';
				setTimeout(() => {
					manche++;
					showPontMystereManche();
				}, 900);
			} else {
				// Désactive tous les boutons de propositions
				const allBtns = propDiv.querySelectorAll('.pontmystere-btn');
				allBtns.forEach(b => {
					b.disabled = true;
					b.style.cursor = 'not-allowed';
					b.style.opacity = '0.6';
				});
				btn.style.background = '#b76c4b';
				showPontMysterePerdu();
			}
		};
		propDiv.appendChild(btn);
	});
	pontMystereGame.appendChild(propDiv);
}

function showPontMysterePerdu() {
			// Affiche le bouton centré au milieu de l'image
			const imgContainer = pontMystereGame.querySelector('.pontmystere-img-container');
			if (imgContainer) {
				const restartBtn = document.createElement('button');
				restartBtn.id = 'pontmystere-restart';
				restartBtn.className = 'pontmystere-btn pontmystere-btn-restart';
				restartBtn.style.background = '#b76c4b';
				restartBtn.textContent = 'Recommencer';
				restartBtn.onclick = startPontMystere;
				restartBtn.style.position = 'absolute';
				restartBtn.style.top = '50%';
				restartBtn.style.left = '50%';
				restartBtn.style.transform = 'translate(-50%, -50%)';
				restartBtn.style.zIndex = '2';
				imgContainer.appendChild(restartBtn);
			}
}

// Lancer le jeu à l'ouverture de l'onglet
pontMystereTab.addEventListener('click', showPontMystereVersionSelector);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Jeu Memory

const memoryTab = document.querySelector('[data-tab="memory"]');
// const memoryContent = document.getElementById('memory');
const memoryGame = document.getElementById('memory-game');
const memoryScore = document.getElementById('memory-score');

let memoryCards = [];
let memoryFlipped = [];
let memoryMatched = 0;
let memoryTries = 0;
let memoryLevel = 1;
let memoryMaxTries = 10;

function showMemoryLevelSelector() {
	memoryGame.innerHTML = '';
	memoryScore.textContent = '';
	const selector = document.createElement('div');
	selector.style.textAlign = 'center';
	selector.style.marginBottom = '18px';
	selector.innerHTML = `
		<h3 style="text-align:center;margin-bottom:18px;">Choisis le niveau :</h3>
		<div style="display:flex;justify-content:center;gap:24px;">
			<button class="pontmystere-btn memory-level-btn" data-level="1">Niveau 1</button>
			<button class="pontmystere-btn memory-level-btn" data-level="2">Niveau 2</button>
			<button class="pontmystere-btn memory-level-btn" data-level="3">Niveau 3</button>
		</div>
	`;
	memoryGame.appendChild(selector);
	Array.from(selector.querySelectorAll('.memory-level-btn')).forEach(btn => {
		btn.onclick = () => {
			memoryLevel = parseInt(btn.dataset.level);
			if (memoryLevel === 1) memoryMaxTries = Infinity;
			else if (memoryLevel === 2) memoryMaxTries = 18;
			else memoryMaxTries = 10;
			startMemoryGame();
		};
	});
}

function startMemoryGame() {
	memoryGame.innerHTML = '';
	memoryScore.textContent = '';
	memoryMatched = 0;
	memoryTries = 0;
	// Prendre 6 images du classement
	const images = classement.slice(0, 6).map(p => p.image);
	// Créer 2 cartes par image
	memoryCards = images.concat(images);
	// Mélanger
	for (let i = memoryCards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[memoryCards[i], memoryCards[j]] = [memoryCards[j], memoryCards[i]];
	}
	memoryFlipped = [];
	// Afficher les cartes
	memoryCards.forEach((imgSrc, idx) => {
		const card = document.createElement('div');
		card.className = 'memory-card';
		card.dataset.index = idx;
		card.dataset.img = imgSrc;
		card.style.width = '110px';
		card.style.height = '110px';
		card.style.background = '#eaeaea';
		card.style.borderRadius = '12px';
		card.style.boxShadow = '0 2px 8px rgba(75,108,183,0.10)';
		card.style.display = 'flex';
		card.style.alignItems = 'center';
		card.style.justifyContent = 'center';
		card.style.cursor = 'pointer';
		card.style.position = 'relative';
		card.style.overflow = 'hidden';
		card.style.transition = 'background 0.2s';
		// Face cachée
		card.innerHTML = '<div class="memory-back" style="width:100%;height:100%;background:#4b6cb7;border-radius:12px;"></div>';
		card.onclick = () => flipMemoryCard(card, imgSrc);
		memoryGame.appendChild(card);
	});
	updateMemoryScore();
}

function updateMemoryScore() {
	if (memoryLevel === 1) {
		memoryScore.textContent = `Essais : ${memoryTries}`;
	} else {
		memoryScore.textContent = `Essais : ${memoryTries} / ${memoryMaxTries}`;
	}
}

function flipMemoryCard(card, imgSrc) {
	if (card.classList.contains('flipped') || memoryFlipped.length === 2) return;
	// Afficher l'image
	card.innerHTML = `<img src="${imgSrc}" alt="Pont" style="width:100%;height:100%;object-fit:cover;">`;
	card.classList.add('flipped');
	memoryFlipped.push(card);
	if (memoryFlipped.length === 2) {
		const [c1, c2] = memoryFlipped;
		if (c1.dataset.img === c2.dataset.img) {
			// Paire trouvée
			setTimeout(() => {
				c1.style.background = '#c6f7d4';
				c2.style.background = '#c6f7d4';
				memoryMatched++;
				memoryFlipped = [];
						if (memoryMatched === 6) {
							if (memoryLevel === 1) {
								memoryScore.textContent = `Bravo ! Toutes les paires trouvées en ${memoryTries} essais.`;
							} else {
								memoryScore.textContent = `Bravo ! Toutes les paires trouvées en ${memoryTries} / ${memoryMaxTries} essais.`;
							}
							memoryScore.style.background = '#c6f7d4';
							memoryScore.style.color = '#4bb76c';
							memoryScore.style.borderRadius = '8px';
							lancerConfettis();
							// Ajouter le bouton recommencer
							const restartBtn = document.createElement('button');
							restartBtn.textContent = 'Recommencer';
							restartBtn.className = 'memory-restart-btn';
							restartBtn.style.marginTop = '18px';
							restartBtn.style.padding = '10px 24px';
							restartBtn.style.fontSize = '1em';
							restartBtn.style.borderRadius = '8px';
							restartBtn.style.border = 'none';
							restartBtn.style.background = '#4b6cb7';
							restartBtn.style.color = '#fff';
							restartBtn.style.cursor = 'pointer';
							restartBtn.style.display = 'block';
							restartBtn.style.marginLeft = 'auto';
							restartBtn.style.marginRight = 'auto';
							restartBtn.onclick = function() {
								restartBtn.remove();
								showMemoryLevelSelector();
							};
							memoryScore.parentNode.insertBefore(restartBtn, memoryScore.nextSibling);
						}
			}, 500);
		} else {
			// Pas une paire
			setTimeout(() => {
				c1.innerHTML = '<div class="memory-back" style="width:100%;height:100%;background:#4b6cb7;border-radius:12px;"></div>';
				c2.innerHTML = '<div class="memory-back" style="width:100%;height:100%;background:#4b6cb7;border-radius:12px;"></div>';
				c1.classList.remove('flipped');
				c2.classList.remove('flipped');
				memoryFlipped = [];
			}, 1200); // délai augmenté pour observer
		}
			// Si limite atteinte et pas toutes les paires, mais seulement si on n'a pas déjà gagné
			if (memoryMatched !==6){
			if (memoryLevel !== 1 && memoryTries >= memoryMaxTries && memoryMatched < 6) {
				memoryScore.textContent = `Limite atteinte ! Tu as trouvé ${memoryMatched} paires sur 6.`;
				memoryScore.style.background = '#f7d4d4';
				memoryScore.style.color = '#b76c4b';
				memoryScore.style.borderRadius = '8px';
				// Désactive toutes les cartes
				Array.from(memoryGame.children).forEach(card => card.onclick = null);
				// Ajouter le bouton recommencer centré
				const restartBtn = document.createElement('button');
				restartBtn.textContent = 'Recommencer';
				restartBtn.className = 'memory-restart-btn';
				restartBtn.style.marginTop = '18px';
				restartBtn.style.padding = '10px 24px';
				restartBtn.style.fontSize = '1em';
				restartBtn.style.borderRadius = '8px';
				restartBtn.style.border = 'none';
				restartBtn.style.background = '#4b6cb7';
				restartBtn.style.color = '#fff';
				restartBtn.style.cursor = 'pointer';
				restartBtn.style.display = 'block';
				restartBtn.style.marginLeft = 'auto';
				restartBtn.style.marginRight = 'auto';
				restartBtn.onclick = function() {
					restartBtn.remove();
					showMemoryLevelSelector();
				};
				memoryScore.parentNode.insertBefore(restartBtn, memoryScore.nextSibling);
			}}
	
	memoryTries++;
	updateMemoryScore();	
}
	
}

memoryTab.addEventListener('click', showMemoryLevelSelector);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Jeu Rapid'Pont

const defiTab = document.querySelector('[data-tab="defi"]');
const defiContent = document.getElementById('defi-content');

defiTab.addEventListener('click', showRapidPontIntro);

function showRapidPontIntro() {
    defiContent.innerHTML = '';
    defiContent.style.display = 'block';
    const introDiv = document.createElement('div');
    introDiv.style.textAlign = 'center';
    introDiv.style.marginTop = '40px';
    introDiv.style.marginBottom = '32px';
    introDiv.style.fontSize = '1.2em';
    introDiv.innerHTML = `
        <h2 style="margin-bottom:18px;">Rapid'Pont</h2>
        <p style="max-width:480px;margin:0 auto 18px auto;">Le but du jeu : des ponts vont s'afficher un par un pendant une demi-seconde à des endroits différents sur l'écran.<br>Appuie sur le plus de ponts possible en 20 secondes !<br>Le chrono s'affiche en haut, le score à droite.</p>
    `;
    const startBtn = document.createElement('button');
    startBtn.textContent = 'Start';
    startBtn.className = 'pontmystere-btn';
    startBtn.style.background = '#4b6cb7';
    startBtn.style.color = '#fff';
    startBtn.style.display = 'block';
    startBtn.style.margin = '28px auto 0 auto';
    startBtn.style.padding = '12px 32px';
    startBtn.style.fontSize = '1.2em';
    startBtn.style.borderRadius = '8px';
    startBtn.style.border = 'none';
    startBtn.style.cursor = 'pointer';
    startBtn.onclick = startRapidPontGame;
    defiContent.appendChild(introDiv);
    defiContent.appendChild(startBtn);
}

function startRapidPontGame() {
    defiContent.innerHTML = '';
    let rapidScore = 0;
    let rapidTime = 20;
    let rapidInterval = null;
    let rapidPontTimeout = null;
    const totalPonts = 40;
    let pontsShown = 0;
    // Affichage du timer et du score
    const infoDiv = document.createElement('div');
    infoDiv.style.textAlign = 'center';
    infoDiv.style.fontSize = '1.2em';
    infoDiv.style.marginBottom = '12px';
    infoDiv.innerHTML = `<span id="rapid-timer">⏱️ ${rapidTime}s</span> | Score : <span id="rapid-score">0/${totalPonts}</span>`;
    defiContent.appendChild(infoDiv);

    // Zone de jeu
    const gameDiv = document.createElement('div');
    gameDiv.id = 'rapidpont-game-area';
    gameDiv.style.width = '100%';
    gameDiv.style.height = '340px';
    gameDiv.style.position = 'relative';
    gameDiv.style.margin = '0 auto 18px auto';
    gameDiv.style.background = '#eaeaea';
    gameDiv.style.borderRadius = '18px';
    gameDiv.style.overflow = 'hidden';
    defiContent.appendChild(gameDiv);

    // Fonction pour afficher un pont pendant 0,5s
    function showPontFlash() {
        if (pontsShown >= totalPonts) {
            endGame();
            return;
        }
        gameDiv.innerHTML = '';
        pontsShown++;
        document.getElementById('rapid-score').textContent = `${rapidScore}/${totalPonts}`;
        // Choisir une image aléatoire
        const pont = classement[Math.floor(Math.random() * classement.length)];
        const img = document.createElement('img');
        img.src = pont.image;
        img.alt = pont.nom;
        img.style.width = '220px';
        img.style.height = '140px';
        img.style.objectFit = 'cover';
        img.style.position = 'absolute';
        const maxLeft = gameDiv.clientWidth - 220;
        const maxTop = gameDiv.clientHeight - 140;
        const left = Math.max(0, Math.floor(Math.random() * (maxLeft + 1)));
        const top = Math.max(0, Math.floor(Math.random() * (maxTop + 1)));
        img.style.left = left + 'px';
        img.style.top = top + 'px';
        img.style.cursor = 'pointer';
        img.style.boxShadow = '0 2px 8px rgba(75,108,183,0.10)';
        let clicked = false;
        img.addEventListener('pointerdown', function(e) {
            if (!clicked) {
                rapidScore++;
                document.getElementById('rapid-score').textContent = `${rapidScore}/${totalPonts}`;
                clicked = true;
            }
        });
        gameDiv.appendChild(img);
        // Retirer l'image après 0,5s et afficher la suivante
        rapidPontTimeout = setTimeout(() => {
            gameDiv.innerHTML = '';
            if (rapidTime > 0 && pontsShown < totalPonts) showPontFlash();
            else endGame();
        }, 500);
    }

    function endGame() {
        clearInterval(rapidInterval);
        clearTimeout(rapidPontTimeout);
        gameDiv.innerHTML = '';
        // Afficher le score final
        const resultDiv = document.createElement('div');
        resultDiv.style.textAlign = 'center';
        resultDiv.style.fontSize = '1.5em';
        resultDiv.style.marginTop = '24px';
        resultDiv.innerHTML = `Jeu terminé !<br>Score : <strong>${rapidScore}/${totalPonts}</strong><br><br><span style='font-size:1em;color:#4b6cb7;'>Tu penses pouvoir faire mieux ?</span>`;
        defiContent.appendChild(resultDiv);
        // Bouton recommencer
        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Rejouer';
        restartBtn.className = 'pontmystere-btn';
        restartBtn.style.background = '#4b6cb7';
        restartBtn.style.color = '#fff';
        restartBtn.style.display = 'block';
        restartBtn.style.margin = '18px auto 0 auto';
        restartBtn.style.padding = '10px 24px';
        restartBtn.style.fontSize = '1em';
        restartBtn.style.borderRadius = '8px';
        restartBtn.style.border = 'none';
        restartBtn.style.cursor = 'pointer';
        restartBtn.onclick = showRapidPontIntro;
        defiContent.appendChild(restartBtn);
    }

    showPontFlash();

    // Timer
    rapidInterval = setInterval(() => {
        rapidTime--;
        document.getElementById('rapid-timer').textContent = `⏱️ ${rapidTime}s`;
        if (rapidTime <= 0) {
            endGame();
        }
    }, 1000);
}
