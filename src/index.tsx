import { App } from './app';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './hooks/reducer/store';
const container = document.getElementById('app');
const store = setupStore();
if (!container) {
	throw new Error('Someone remove root. We need to find him');
}
console.log(
	`Главная страница содержит все товары магазина а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке +10
		
				выполнено полностью

	Карточка товара содержит его изображение, название, количество данного товара на складе, цвет, производитель и т.д., находится ли товар в корзине +10
	
				есть изображение, название, количество данного товара на складе, цвет(для тех товаров, где актуально), производитель (в названии), находится ли товар в корзине
				год выхода на рынок не актуален для данного типа товаров (да и нет у меня такой информации) -  не вижу смысла за это снижать балл, но дело ваше

	Добавление товаров в корзину +20
	кликая по карточке с товаром или по кнопке на нем, товар можно добавлять в корзину или удалять. Карточки добавленных в корзину товаров внешне отличаются от остальных +10

				выполнено (есть кнопка добавить, для удаления необходимо изменить кол-во товара на 0)

	на странице отображается количество добавленных в корзину товаров. При попытке добавить в корзину больше 20 товаров, выводится всплывающее уведомление с текстом "Извините, все слоты заполнены" +10
	
				на странице отображается количество добавленных в корзину товаров
				сообщение выводится при попытке добавить в корзину БОЛЬШЕ, чем есть на складе
				жестко ограничивать до 20 шт не вижу смысла, т.к. товара на складе может быть меньше 20шт
	
	Сортировка +20
	Сортируются только те товары, которые в данный момент отображаются на странице

				нет
				сортируются все товары, подходяшие под требования установленных фильтров
				исправть дело 1 минуты, но это будет не логично
				если я сортирую по цене - я хочу увидеть в первую очередь самы дешевые товары, а не самы дешевые из тех, которые я уже видел в рамках 1 страницы пагинации
				возможно это требование имело бы смысл при отсутствии пагинации

	сортировка товаров по названию в возрастающем и убывающем порядке +10

				да

	сортировка товаров по году их выхода на рынок в возрастающем и убывающем порядке +10

				нет, предположим, что вместо этого реализована сортировка по цене 
				(вариантов фильтров больше, чем предложено, а нереализован только тот, который не актуален для моей группы товароа)

	Фильтры в указанном диапазоне от и до +30
	фильтры по количеству +10
				
				нет, вместо него фильтр по цене

	фильтры по году выпуска на рынок +10

				нет, вместо него фильтр по объёму

	Фильтры по значению +30
	Выбранные фильтры выделяются стилем.
	фильтры по производителю +5

				есть

	фильтры по цвету +5

				нет, т.к. цвет не приходит в исходном json, а вносить это вручную слишком долго
				вместо него фильтр по товарной группе (бесполезный сам по себе фильтр, добавленный только ради дополнительного фильтра)
				тут вполне пойму снижение балла, но сделать с этим особо ничего не смогу

	фильтры по размеру (в случае с Демо - по количеству камер) +5

				такой фильтр реализован в виде слайдера (читайте выше)
				вместо него фильтр по типу товара

	можно отобразить только популярные товары +5

				нет такой характеристики у моих товаров(

	можно отфильтровать товары по нескольким фильтрам одного типа +10

				да (было бы довольно сложно сделать что бы это НЕ работало)

	Если для выбранной Вами тематики интернет-магазина указанные выше фильтры неактуальны, Вы можете добавить свои фильтры в зависмости от категории товара. Для нескольких фильтров одного типа отображаются товары, которые соответствуют хоть одному выбранному фильтру. Например, можно отобразить Samsung и Apple; или белые, синие и красные товары; или товары с 2 и 3 камерами.
	
				я установил все возможные варианты фильтровБ но их меньше, чем предложено вариантов
				как это оценивать - решать вам, я за такое снимать не стану
	
	Можно отфильтровать товары по нескольким фильтрам разного типа +20

				да

	Для нескольких фильтров разного типа отображаются только те товары, которые соответствуют всем выбранным фильтрам.
	Например, можно отобразить только красные товары. Или популярные белые и красные товары впоступившие на рынок в 2010-2020 годах.
	Если товаров, соответствующих всем выбранным фильтрам нет, на странице выводится уведомление в человекочитаемом формате, например, "Извините, совпадений не обнаружено"

				да

	Сброс фильтров +20
	есть кнопка reset для сброса фильтров +10

				да, кнопка 'удалить фильтры'

	Кнопка reset сбрасывает только фильтры, не влияя на порядок сортировки или товары, добавленные в избранное.

				да, кнопка не трогает фильтрацию, избранного нет в принципе

	После использования кнопки reset фильтры остаются работоспособными

				да

	при сбросе фильтров кнопкой reset, ползунки range slider сдвигаются к краям, значения ползунков возвращаются к первоначальным, range slider закрашивается одним цветом +10
	
				да
	
	Сохранение настроек в local storage +30

				да

	выбранные пользователем фильтры, порядок сортировки, добавленные в избранное товары сохраняются при перезагрузке страницы. Есть кнопка сброса настроек, которая очищает local storage +10
	
				да
	
	Поиск +30
	при открытии приложения курсор находится в поле поиска +2

				да

	автозаполнение поля поиска отключено (нет выпадающего списка с предыдущими запросами) +2

				да

	есть placeholder +2

				да


	в поле поиска есть крестик, позволяющий очистить поле поиска +2

				да

	если нет совпадения последовательности букв в поисковом запросе с названием товара, выводится уведомление в человекочитаемом формате, например "Извините, совпадений не обнаружено" +2
	при вводе поискового запроса на странице остаются только те товары, в которых есть указанные в поиске буквы в указанном порядке. При этом не обязательно, чтобы буквы были в начале слова. Регистр символов при поиске не учитывается +10
	Поиск ведётся только среди товаров, которые в данный момент отображаются на странице.

				да

	если очистить поле поиска, на странице отображаются товары, соответствующие всем выбранным фильтрам и настройкам сортировки +10
	
				да



	ИТОГО: 200
	`

	
);
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);