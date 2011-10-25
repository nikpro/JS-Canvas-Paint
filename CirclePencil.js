var CirclePencil = {};
 
// нажимается кнопка мыши, начинается рисование
CirclePencil.start = function(evnt)
{
	Canva.ctx.strokeStyle = Canva.selectedColor;
	Canva.ctx.fillStyle = Canva.selectedFillColor;
	Canva.ctx.lineWidth = 1;
 
	// начальные координаты
	CirclePencil.startX = evnt.clientX;
	CirclePencil.startY = evnt.clientY;
 
	// конечные координаты
	CirclePencil.finishX = evnt.clientX;
	CirclePencil.finishY = evnt.clientY;
 
	Canva.drawing = true;
};
 
// кнопка мыши отпущена, заканчиваем рисование
CirclePencil.finish = function(evnt)
{
	Canva.drawing = false;
};
 
// движение мыши с зажатой кнопкой
CirclePencil.move = function(evnt)
{
	// получаем конечные координаты диаметра
	CirclePencil.finishX = evnt.clientX;
	CirclePencil.finishY = evnt.clientY;
 
	// вычисляем координаты центра
	var centerX = CirclePencil.startX + parseInt((CirclePencil.finishX - CirclePencil.startX) / 2);
	var centerY = CirclePencil.startY + parseInt((CirclePencil.finishY - CirclePencil.startY) / 2);
 
	// вычисляем радиус: R^2 = (x - a)^2 + (y - b)^2, где (a, b) - центр
	var radius = parseInt(Math.sqrt((CirclePencil.startX - centerX) * (CirclePencil.startX - centerX) + (CirclePencil.startY - centerY) * (CirclePencil.startY - centerY)));
 
	Canva.ctx.beginPath();
	Canva.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
	Canva.ctx.fill(); // заливаем круг белым
	Canva.ctx.stroke(); // прорисовываем контуры черным
 
	// новый пузырь начнется точке, где закончился старый
	CirclePencil.startX = evnt.clientX;
	CirclePencil.startY = evnt.clientY;
};
