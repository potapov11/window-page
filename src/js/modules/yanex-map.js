const createMap = () => {
	ymaps.ready(init);
	function init() {
		// Создание карты.
		var myMap = new ymaps.Map('map', {
			center: [55.927447, 37.605104],
			controls: ['zoomControl'],
			zoom: 12,
		});

		myMap.behaviors.disable('scrollZoom');

		myMap.geoObjects.add(
			new ymaps.Placemark(
				[55.927447, 37.605104],
				{
					balloonContent: 'Мытищинский р-он, п.Вешки,Выставочная,д.53',
				},
				{
					preset: 'islands#icon',
					iconColor: '#0095b6',
				},
			),
		);
	}
};

export { createMap };
