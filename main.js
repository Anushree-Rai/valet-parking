Canvas= document.getElementById('myCanvas');
ctx= Canvas.getContext("2d");

car_width= 100;
car_height= 90;

background_image: "parking spots.jpg"

car_image= url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlRS1eA7tKlbwBtSZlGKjbpnb09kOoBo0e-_KNpNxw5UVl56YPphJlhDDxCiQV8-xdbU&usqp=CAU");
car_x= 10;
car_y= 10;

function add()
{
    background_imgTag= new Image(); //Defining a variable with a new image
    background_imgTag.onload= uploadBackground; //Setting a function, on loading this variable
    background_imgTag.src= background_image; //Load image

    car_imgTag= new Image(); //Defining a variable with a new image
    car_imgTag.onload= uploadcar; //Setting a function, on loading this variable
    car_imgTag.src= car_image; //Load image
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, Canvas.width, Canvas.height);
}

function uploadcar()
{
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if (keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if (keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if (keyPressed == '39')
    {
        right();
        console.log("right");
    }
    
}

function up()
{
    if (car_y >= 0)
    {
        car_y= car_y - 10;
        console.log("When UP arrow is pressed, x= " + car_x + "| y=" + car_y);
        uploadBackground();
        uploadcar();
    }
}

function down()
{
    if (car_y <= 500)
    {
        car_y= car_y + 10;
        console.log("When DOWN arrow is pressed, x=" + car_x + "| y= " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function left()
{
    if (car_x >= 0)
    {
        car_x= car_x - 10;
        console.log("When LEFT arrow is pressed x=" + car_x + "| y=" + car_y);
        uploadBackground();
        uploadcar();
    }
}

function right()
{
    if (rover_x <= 700)
    {
        car_x= car_x + 10;
        console.log("When RIGHT arrow is pressed x=" + car_x + "| y= " + car_y);
        uploadBackground();
        uploadcar();
    }
}