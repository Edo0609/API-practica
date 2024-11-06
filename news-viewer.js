class NewsViewer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.cargar();
	}

	async cargar() {
		try {
			const response = await fetch('https://news-foniuhqsba-uc.a.run.app');
			if (!response.ok) {
				throw new Error('Error getting articles');
			}
			const articles = await response.json();
			this.render(articles);
		} catch (error) {
			console.error('Error: ', error);
			this.innerHTML = '<p>Error al cargar los artículos. Inténtelo de nuevo más tarde'
		}
	}
}