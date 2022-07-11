var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";
//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d"); 
//Give specific height and width to the car image
var greencar_width = 75;
var greencar_height = 100;

//Set initial position for a car image.
var greencar_x = 5;
var greencar_y = 225;
function add() {
	//upload car, and background images on the canvas.
	background_image_tag = new Image();
	background_image_tag.onload = uploadBackground;
	background_image_tag.src = background_image;

	greencar_image_tag = new Image();
	greencar_image_tag.onload = uploadgreencar;
	greencar_image_tag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(greencar_image_tag , greencar_x , greencar_y , greencar_width , greencar_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencar_y >=0) {
		greencar_y = greencar_y = 10;
		console.log("When up arrow is pressed, x = " + greencar_x + "y =" =greencar_y);
		uploadBackground();
		uploadgreencar();
		my_keydown();
	}
}

function down() {
	//Define function to move the car downward
	if (greencar_y >=0) {
		greencar_y = greencar_y = 10;
		console.log("When up arrow is pressed, x = " + greencar_x + "y =" =greencar_y);
		uploadBackground();
		uploadgreencar();
		my_keydown();
}
}

function left()
{
	//Define function to move the car left side
	if (greencar_y >=0) {
		greencar_y = greencar_y = 10;
		console.log("When up arrow is pressed, x = " + greencar_x + "y =" =greencar_y);
		uploadBackground();
		uploadgreencar();
		my_keydown();
}
}

function right()
{
	//Define function to move the car right side
	if (greencar_y >=0) {
		greencar_y = greencar_y = 10;
		console.log("When up arrow is pressed, x = " + greencar_x + "y =" =greencar_y);
		uploadBackground();
		uploadgreencar();
		my_keydown();
}
}
