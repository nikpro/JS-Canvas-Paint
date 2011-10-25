var Pencil = {};
 
// Начинаем рисование
Pencil.start = function(evnt)
{
	// Текущее положение мыши - начальные координаты
	Pencil.x = evnt.clientX;
	Pencil.y = evnt.clientY;
 
	Canva.ctx.beginPath();
	// Свойства рисования
	Canva.ctx.strokeStyle = Canva.selectedColor;
	Canva.ctx.lineWidth = Canva.selectedWidth;
	Canva.ctx.moveTo(Pencil.x, Pencil.y); // Курсор на начальную позицию
 
	Canva.drawing = true; // Начато рисование
};
 
// Рисование закончили
Pencil.finish = function(evnt)
{   
	Pencil.x = evnt.clientX;
	Pencil.y = evnt.clientY;
	Canva.ctx.lineTo(Pencil.x, Pencil.y); // Дорисовываем последнюю линию
 
	Canva.drawing = false;
};
 
// Рисование в разгаре
Pencil.move = function(evnt)
{   
	Pencil.x = evnt.clientX;
	Pencil.y = evnt.clientY;
	Canva.ctx.lineTo(Pencil.x, Pencil.y); // Дорисовываем начатую линию
	Canva.ctx.stroke();
	// Начинаем рисованть новую линию из той же точки.
	Canva.ctx.moveTo(Pencil.x, Pencil.y); 
};
