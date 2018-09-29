class Fish {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vx = 2;
      this.vy = 2;
      this.sizeB = 20;
      this.sizeA = 20;
      this.lastPointX = this.x;
      this.lastPointY = this.y;

        this.rx = Math.random() * W-this.sizeA;
        this.ry = Math.random() * H-this.sizeB;

      this.angle = 0;
      this.color = "BLACK";
    }
  
    draw(c) {
        // c.save();
        // c.translate(this.x+W/2, this.y+H/2);
        // c.rotate(this.angle * Math.PI / 180);

        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.y, this.y);
        c.lineTo(this.x, this.x);
        c.stroke();
        c.closePath();
        // c.rect(this.x, this.y, this.sizeA, this.sizeB);
        c.fillStyle = this.color;
        c.fill();
        // c.restore();
    }
  
    update() {
        if(key.isPressed(RIGHT)) {  
            this.x += this.vx;
        } 
        if(key.isPressed(LEFT)) {
            this.x -= this.vx;
        } 
        if(key.isPressed(UP)) {
            this.y -= this.vy;
        } 
        if(key.isPressed(DOWN)) {
            this.y += this.vy;
        }  

        if(this.x > W-this.sizeA) {
            this.x = W-this.sizeA;
        } else
        if(this.x < 0) {
            this.x = 0;
        } else
        if(this.y > H-this.sizeB) {
            this.y = H-this.sizeB;
        } else 
        if(this.y < 0) {
            this.y = 0;
        }


        // this.angle -= 0.1;

    }

    getRandomMove() {
        this.rx = Math.random() * W-this.sizeA;
        this.ry = Math.random() * H-this.sizeB;

        this.lastPointX = this.rx;
        this.lastPointY = this.ry;
  
    }

    move() {
        
        if(dist(this.lastPointX, this.lastPointY, this.x, this.y) < 4) {
            this.getRandomMove();
        }
        

        if(this.x > this.rx) {
                this.x -= this.vx;
        } else if(this.x < this.rx) {
                this.x += this.vx;
        }
        if(this.y > this.ry) {
                this.y -= this.vy;
        } else if(this.y < this.ry) {
                this.y += this.vy;
            }
    }

  
  }
  
